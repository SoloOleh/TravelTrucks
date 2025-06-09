import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const filterByLocation = (campers, location) => {
  if (!location) return campers;

  const searchText = location.toLowerCase().trim();
  return campers.filter((camper) =>
    camper.location.toLowerCase().includes(searchText)
  );
};

const filterByForm = (campers, form) => {
  if (!form) return campers;

  return campers.filter((camper) => camper.form === form);
};

const filterByEquipment = (campers, equipment) => {
  return campers.filter((camper) => {
    for (const [equipmentType, isRequired] of Object.entries(equipment)) {
      if (!isRequired) continue;

      if (equipmentType === "transmission") {
        if (camper.transmission !== "automatic") return false;
      } else {
        if (!camper[equipmentType]) return false;
      }
    }

    return true;
  });
};

const paginateData = (data, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return data.slice(startIndex, endIndex);
};

export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
  try {
    const response = await api.get("/campers");
    let allCampers = response.data;

    if (allCampers.items && Array.isArray(allCampers.items)) {
      allCampers = allCampers.items;
    } else if (!Array.isArray(allCampers)) {
      throw new Error("Invalid API response structure");
    }

    let filteredCampers = [...allCampers];

    filteredCampers = filterByLocation(filteredCampers, filters.location);

    filteredCampers = filterByForm(filteredCampers, filters.form);

    const equipmentFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
      const isNotSystemParam =
        key !== "location" &&
        key !== "form" &&
        key !== "page" &&
        key !== "limit" &&
        key !== "append";

      if (isNotSystemParam && value === true) {
        equipmentFilters[key] = true;
      }
    });

    if (Object.keys(equipmentFilters).length > 0) {
      filteredCampers = filterByEquipment(filteredCampers, equipmentFilters);
    }

    const paginatedCampers = paginateData(filteredCampers, page, limit);

    return {
      items: paginatedCampers,
      total: filteredCampers.length,
    };
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const getCamperById = async (camperId) => {
  try {
    const response = await api.get(`/campers/${camperId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper by ID:", error);
    throw error;
  }
};

import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCampers = async ({
  page = 1,
  limit = 4,
  filters = {},
  ...otherParams
}) => {
  try {
    const response = await api.get("/campers");
    let data = response.data;

    if (data.items && Array.isArray(data.items)) {
      data = data.items;
    } else if (!Array.isArray(data)) {
      throw new Error("Invalid API response structure");
    }

    let filteredData = [...data];

    const allFilters = { ...filters, ...otherParams };

    if (allFilters.location) {
      const searchLocation = allFilters.location.toLowerCase().trim();
      filteredData = filteredData.filter((camper) =>
        camper.location.toLowerCase().includes(searchLocation)
      );
    }

    if (allFilters.form) {
      filteredData = filteredData.filter((camper) => {
        return camper.form === allFilters.form;
      });
    }

    const equipmentFilters = Object.entries(allFilters).filter(
      ([key, value]) =>
        key !== "location" &&
        key !== "form" &&
        key !== "page" &&
        key !== "limit" &&
        key !== "append" &&
        value === true
    );

    equipmentFilters.forEach(([key, _]) => {
      filteredData = filteredData.filter((camper) => {
        if (key === "transmission") {
          return camper.transmission === "automatic";
        }
        return camper[key] === true;
      });
    });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      total: filteredData.length,
    };
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const getCamperById = async (id) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper by ID:", error);
    throw error;
  }
};

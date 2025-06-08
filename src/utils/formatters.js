export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatLocation = (location) => {
  if (!location) return "";

  const parts = location.split(",").map((part) => part.trim());

  return parts.reverse().join(", ");
};

export const capitalizeFirst = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getVehicleTypeIcon = (form) => {
  const typeMap = {
    panelTruck: "icon-van",
    fullyIntegrated: "icon-fully-integrated",
    alcove: "icon-alcove",
  };

  return typeMap[form] || "icon-van";
};

export const getFeatureIcon = (feature) => {
  const iconMap = {
    transmission: "icon-transmission",
    engine: "icon-engine",
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
    users: "icon-users",
  };

  return iconMap[feature] || null;
};

export const formatFeatureName = (feature, value) => {
  const nameMap = {
    transmission: value === "automatic" ? "Automatic" : "Manual",
    engine: value === "diesel" ? "Diesel" : "Petrol",
    AC: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    TV: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave",
    gas: "Gas",
    water: "Water",
  };

  return nameMap[feature] || feature;
};

export const getFormLabel = (form) => {
  const formMap = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return formMap[form] || form;
};

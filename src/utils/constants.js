export const VEHICLE_TYPES = [
  { value: "panelTruck", label: "Van", icon: "icon-van" },
  {
    value: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "icon-fully-integrated",
  },
  { value: "alcove", label: "Alcove", icon: "icon-alcove" },
];

export const VEHICLE_EQUIPMENT = [
  { value: "AC", label: "AC", icon: "icon-ac" },
  { value: "transmission", label: "Automatic", icon: "icon-transmission" },
  { value: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
  { value: "TV", label: "TV", icon: "icon-tv" },
  { value: "bathroom", label: "Bathroom", icon: "icon-bathroom" },
];

export const FEATURES_LIST = [
  "transmission",
  "engine",
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
];

export const DETAILS_LIST = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  CAMPER: "/catalog/:id",
};

import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectLocation = (state) => state.filters.location;

export const selectForm = (state) => state.filters.form;

export const selectEquipment = (state) => state.filters.equipment;

export const selectActiveFilters = createSelector(
  [selectLocation, selectForm, selectEquipment],
  (location, form, equipment) => {
    const activeEquipment = {};
    Object.entries(equipment).forEach(([key, value]) => {
      if (value === true) {
        activeEquipment[key] = true;
      }
    });

    const activeFilters = {};

    if (location) {
      activeFilters.location = location;
    }

    if (form) {
      activeFilters.form = form;
    }

    Object.assign(activeFilters, activeEquipment);

    return activeFilters;
  }
);

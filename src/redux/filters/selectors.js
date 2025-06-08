import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectLocation = createSelector(
  [selectFilters],
  (filters) => filters.location
);

export const selectForm = createSelector(
  [selectFilters],
  (filters) => filters.form
);

export const selectEquipment = createSelector(
  [selectFilters],
  (filters) => filters.equipment
);

export const selectActiveFilters = createSelector(
  [selectLocation, selectForm, selectEquipment],
  (location, form, equipment) => {
    const activeEquipment = Object.entries(equipment)
      .filter(([_, value]) => value)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    return {
      ...(location && { location }),
      ...(form && { form }),
      ...activeEquipment,
    };
  }
);

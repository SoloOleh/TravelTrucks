import { createSelector } from "@reduxjs/toolkit";

export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = (id) =>
  createSelector([selectFavorites], (favorites) => favorites.includes(id));

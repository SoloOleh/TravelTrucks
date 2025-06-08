import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch {
    // Handle error silently
  }
};

const initialState = {
  items: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.items.indexOf(camperId);

      if (index === -1) {
        state.items.push(camperId);
      } else {
        state.items.splice(index, 1);
      }

      saveFavorites(state.items);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

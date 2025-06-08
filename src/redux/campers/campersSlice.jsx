import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  items: [],
  currentCamper: null,
  total: 0,
  page: 1,
  hasMore: true,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
      state.total = 0;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total, append } = action.payload;

        if (append) {
          state.items = [...state.items, ...items];
        } else {
          state.items = items;
        }

        state.total = total;
        state.hasMore = state.items.length < total;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;

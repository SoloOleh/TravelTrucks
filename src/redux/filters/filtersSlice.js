import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  equipment: {
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setLocation, setForm, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;

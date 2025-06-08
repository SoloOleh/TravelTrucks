export const selectCampers = (state) => state.campers.items;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectCampersTotal = (state) => state.campers.total;
export const selectCampersPage = (state) => state.campers.page;
export const selectHasMoreCampers = (state) => state.campers.hasMore;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;

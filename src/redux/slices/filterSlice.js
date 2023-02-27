import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: 0,
  sortType: true,
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId) || 0;
      state.sort = Number(action.payload.sort) || 0;
      state.currentPage = Number(action.payload.currentPage) || 1;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setSortType,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;

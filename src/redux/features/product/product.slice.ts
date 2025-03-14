import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Search Product Types and Slice
type TSearchState = {
  searchItem?: string | null;
};

const searchInitialState: TSearchState = {
  searchItem: '',
};

// Product Sort Types and Slice
type TSortState = {
  sort?: string | null;
};

const sortInitialState: TSortState = {
  sort: '',
};

// Product Pagination Types and Slice
export type TPagination = {
  skip?: number | null;
  limit?: number | undefined;
};

const paginationInitialState: TPagination = {
  skip: null,
  limit: 8,
};

// Price Range Types and Slice
type TPriceRangeState = {
  priceRange?: number[];
};

const priceRangeInitialState: TPriceRangeState = {
  priceRange: [],
};

// Category Filter Types and Slice
type TCategoryState = {
  categoris: string | null | undefined;
};

const categoryInitialState: TCategoryState = {
  categoris: "",
};

// Reset Filter Types and Slice
export type TResetFilter = {
  reset: string;
};

const resetInitialState: TResetFilter = {
  reset: "not reset",
};

// Search Product Slice
export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState: searchInitialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<TSearchState>) => {
      state.searchItem = action.payload.searchItem;
    },
  },
});

// Product Sort Slice
export const productSortSlice = createSlice({
  name: "sortProduct",
  initialState: sortInitialState,
  reducers: {
    sortProduct: (state, action: PayloadAction<TSortState>) => {
      state.sort = action.payload.sort;
    },
  },
});

// Product Pagination Slice
export const productPaginationSlice = createSlice({
  name: "pagination",
  initialState: paginationInitialState,
  reducers: {
    paginationProduct: (state, action: PayloadAction<TPagination>) => {
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
  },
});

// Price Range Slice
export const priceRangeSlice = createSlice({
  name: "priceRange",
  initialState: priceRangeInitialState,
  reducers: {
    priceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
  },
});

// Category Filter Slice
export const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState: categoryInitialState,
  reducers: {
    categoryFilter: (state, action: PayloadAction<string>) => {
      state.categoris = action.payload;
    },
  },
});

// Reset Filter Slice
export const resetSlice = createSlice({
  name: "reset",
  initialState: resetInitialState,
  reducers: {
    resetFilter: (state, action: PayloadAction<string>) => {
      state.reset = action.payload;
    },
  },
});

// Export actions
export const { searchProduct } = searchProductSlice.actions;
export const { sortProduct } = productSortSlice.actions;
export const { paginationProduct } = productPaginationSlice.actions;
export const { priceRange } = priceRangeSlice.actions;
export const { categoryFilter } = categoryFilterSlice.actions;
export const { resetFilter } = resetSlice.actions;

// Export reducers
export const searchProductReducer = searchProductSlice.reducer;
export const productSortReducer = productSortSlice.reducer;
export const productPaginationReducer = productPaginationSlice.reducer;
export const priceRangeReducer = priceRangeSlice.reducer;
export const categoryFilterReducer = categoryFilterSlice.reducer;
export const resetSliceReducer = resetSlice.reducer; 
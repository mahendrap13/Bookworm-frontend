import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CategoryFetch = createAsyncThunk("CategoryFetch", async () => {
  const {
    data: { data },
  } = await axios.get("http://localhost:7001/get-category");
  return data;
});

const CategoriesData = createSlice({
  name: "Category",
  initialState: {
    data: [],
    isLoading: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(CategoryFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(CategoryFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(CategoryFetch.rejected, (state, action) => {
      console.log("isError", action.payload);
      state.isError = true;
    });
  },
});

export default CategoriesData.reducer;

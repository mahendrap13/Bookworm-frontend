import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ProductFetch = createAsyncThunk("ProductFetch", async () => {
  const {
    data: { data },
  } = await axios.get(`http://localhost:7001/get-product`);
  return data;
});

const ProductData = createSlice({
  name: "Product",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(ProductFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ProductFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(ProductFetch.rejected, (state, action) => {
      console.log("isError", action.payload);
      state.isError = true;
    });
  },
});
export default ProductData.reducer;

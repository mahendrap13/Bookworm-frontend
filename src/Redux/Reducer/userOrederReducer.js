import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addOrderdetails = createAsyncThunk(
  "addOrderDetails",
  async (e) => {
    try {
      const response = axios.post("http://localhost:7001/add-orderdetails", e);
      return response.data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  }
);
export const getOrderdetails = createAsyncThunk(
  "getOrderDetails",
  async (e) => {
    try {
      const response = await axios.get(
        "http://localhost:7001/get-orderdetails"
      );
      return response.data;
    } catch (error) {
      console.error("Error geting to cart:", error);
      throw error;
    }
  }
);

const orderData = createSlice({
  name: "useOrderDetails",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderdetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addOrderdetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addOrderdetails.rejected, (state, action) => {
        console.log("Error adding to userOrder Data:", action.error);
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getOrderdetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getOrderdetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getOrderdetails.rejected, (state, action) => {
        console.log("Error get to userOrder Data:", action.error);
        state.isError = true;
        state.isLoading = false;
      });
  },
});
export default orderData.reducer;

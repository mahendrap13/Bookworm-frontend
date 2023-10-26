import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addContactdetails = createAsyncThunk(
  "addContactdetails",
  async (e) => {
    try {
      const response = axios.post(
        "http://localhost:7001/add-contactdetails",
        e
      );
      return response.data;
    } catch (error) {
      console.log("Error creating contact details request ", error);
      throw error;
    }
  }
);

const contactDetails = createSlice({
  name: "addcontactdetails",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContactdetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addContactdetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addContactdetails.rejected, (state, action) => {
        console.log("Error adding to userOrder Data:", action.error);
        state.isError = true;
        state.isLoading = false;
      });
  },
});
export default contactDetails.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignIn = createAsyncThunk("userSignIn", async (userdata) => {
  try {
    const response = await axios.post(
      "http://localhost:7001/signin-user",
      userdata
    );
    localStorage.setItem("user", JSON.stringify(response.data.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response.data;
  } catch (error) {
    console.error("Error signin user:", error);
    throw error;
  }
});
export const userSignUp = createAsyncThunk("userSignUp", async (userdata) => {
  try {
    const response = await axios.post(
      "http://localhost:7001/signup-user",
      userdata
    );
    return response.data;
  } catch (error) {
    console.error("Error signup user:", error);
    throw error;
  }
});

const userData = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        console.log("Error signin user:", action.error);
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(userSignUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        console.log("Error signin user:", action.error);
        state.isError = true;
        state.isLoading = false;
      });
  },
});
export default userData.reducer;

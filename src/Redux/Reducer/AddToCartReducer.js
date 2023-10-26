import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartFeach = createAsyncThunk(
  "cart/addToCartFeach",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:7001/add-to-cart",
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      return rejectWithValue(error.response.message);
    }
  }
);

export const getCartData = createAsyncThunk("cart/getCartData", async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:7001/get-cartdata`);
    return data;
  } catch (error) {
    console.error("Error getting cart data:", error);
    throw error;
  }
});

export const updateCartData = createAsyncThunk(
  "cart/updateCartData",
  async (e) => {
    try {
      const data = await axios.put(
        `http://localhost:7001/update-cartdata/${e.id}?type=${e.type}`
      );
      return data;
    } catch (error) {
      console.error("Error getting cart data:", error);
      throw error;
    }
  }
);
export const deleteCartData = createAsyncThunk(
  "cart/deleteCartData",
  async (e) => {
    try {
      const data = await axios.delete(
        `http://localhost:7001/delete-cartdata/${e}`
      );
      return data;
    } catch (error) {
      console.error("Error getting cart data:", error);
      throw error;
    }
  }
);
export const deleteManyCartData = createAsyncThunk(
  "cart/deleteManyCartData",
  async (cartIds) => {
    try {
      const data = await axios.delete(
        `http://localhost:7001/delete-all-cartdata/${cartIds}`
      );
      return data;
    } catch (error) {
      console.error("Error getting cart data:", error);
      throw error;
    }
  }
);

const CartData = createSlice({
  name: "cart",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartFeach.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addToCartFeach.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addToCartFeach.rejected, (state, action) => {
        console.log("isError", action.payload);
        state.isError = true;
      })
      .addCase(getCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCartData.rejected, (state, action) => {
        console.log("isError", action.payload);
        state.isError = true;
      })
      .addCase(updateCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateCartData.rejected, (state, action) => {
        console.log("isError", action.payload);
        state.isError = true;
      })
      .addCase(deleteCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteCartData.rejected, (state, action) => {
        console.log("isError", action.payload);
        state.isError = true;
      })
      .addCase(deleteManyCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteManyCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteManyCartData.rejected, (state, action) => {
        console.log("isError", action.payload);
        state.isError = true;
      });
  },
});
export default CartData.reducer;

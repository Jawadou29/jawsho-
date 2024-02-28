import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
})

let productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return [...action.payload]
    })
  }
})

export default productSlice.reducer;
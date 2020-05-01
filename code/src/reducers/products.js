import { createSlice } from "@reduxjs/toolkit"

export const products = createSlice({
  name: "products",
  initialState: {
    product: []
  },
  reducers: {
      setProduct: (state, action) => {
      state.product = action.payload
    }
  }
})
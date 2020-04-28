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

export const fetchProduct = barcode => {
  return dispatch => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        dispatch(products.actions.setProduct(json))
      })
  }
}


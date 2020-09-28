import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: "products",
  initialState: {
    product: [],
    showButtons: true,
    // showScanner: true,
    // showManual: true
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    hideButtons: (state) => {
      state.showButtons = false
    },
    restart: (state) => {
      console.log("now restarted")
      state.showButtons = true
      
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
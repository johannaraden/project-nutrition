import { createSlice } from "@reduxjs/toolkit"

export const products = createSlice({
  name: "products",
  initialState: {
    product: {},
    scanStarted: false,
  },
  reducers: {
      setProduct: (state, action) => {
      state.product = action.payload
    },
      scanStarted: (state) => {
        state.scanStarted = true;
      },
      restart: (state) => {
        state.scanStarted = false;
      }

  }
})

export const fetchProduct = (code) => {
  return dispatch => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then(res => res.json())
      .then(json => {
        dispatch(products.actions.setProduct(json))
        console.log(json)
      })
  }
}


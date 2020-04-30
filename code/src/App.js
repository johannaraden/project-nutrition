import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { products } from "reducers/reducer"
import { Start } from "components/Start"




const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
        <Start />
    </Provider>
  )
}

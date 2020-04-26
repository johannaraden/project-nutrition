import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { products } from "reducers/reducer"
import { ProductInput } from "./pages/ProductInput"
import {Start } from "pages/Start"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { ProductInfo } from "pages/ProductInfo"
// import { Product } from "components/Product"


const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/productinput">
            <ProductInput />
          </Route>
          <Route path="/productinfo">
            <ProductInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

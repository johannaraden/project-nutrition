import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { products } from "reducers/products"
import style from "styled-components"
import { ProductCard } from './components/ProductCard'
//import { ProductInput } from "./pages/ProductInput"
//import { Start } from "pages/Start"
//import {BrowserRouter, Switch, Route} from "react-router-dom"
//import { ProductInfo } from "pages/ProductInfo"
// import { Product } from "components/Product"
import { Header } from 'lib/Header'

const Container = style.section ``

const Section = style.section`
background: #B284BE;
height: 100vh;
color: #FDFFFC;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    
   <Provider store={store}>
     <Container>
      <Header />
    </Container>
     <Section>
       <ProductCard />
     </Section>
   </Provider>
  )
}




import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { products } from "reducers/products"
import style from "styled-components"
import { ProductCard } from './components/ProductCard'
import { Header } from 'lib/Header'

const Section = style.section`
color: #FDFFFC;
position: relative;
display: flex;
justify-content: center;
// align-items: center;
flex-direction: column;
`

const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    
   <Provider store={store}>
     <>
      <Header />
    </>
     <Section>
       <ProductCard />
     </Section>
   </Provider>
  )
}




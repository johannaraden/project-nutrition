import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from 'reducers/products'
import styled from 'styled-components'
import { ProductCard } from './components/ProductCard'
import { Header } from 'lib/Header'
import { ScanBarcode } from './components/ScanBarcode'
import { TypeInput } from './components/TypeInput'
import './index.css'

const Section = styled.section`
  color: #FDFFFC;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-bottom: 3em;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 768px) {
  flex-direction: row;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-2deg);
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    transform: rotate(-1deg);
  }
`

const Div = styled.div`
  width: 850px;
  border-width: 2px 3px 2px 4px;
  border-radius: 92% 8% 92% 8%/6% 92% 10% 94%;
  transform: rotate(2deg);
  margin: auto;
  margin-top: 3em;
  background:#fff;
  border: solid black;
  @media (max-width: 768px) {
    width: 90%;
    transform: rotate(1deg);
    border-radius: 4% 6% 64% 8%/9% 55% 4% 15%;
  }
`

const reducer = combineReducers({
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = (scanner) => {
  // console.log(scanner)
  console.log(store.getState())

  return (
    <Provider store={store}>
      <Div>
        <Header />
        <Section>
          <ButtonContainer>
            {scanner &&
              <ScanBarcode scanner={scanner}/>
            }
            <TypeInput />
          </ButtonContainer>
        </Section>
        <ProductCard />
      </Div>
   </Provider>
  )
}

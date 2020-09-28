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
`

const Div = styled.div`
  width: 850px;
  border-width: 3px 4px 3px 5px;
  border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(2deg);
  margin: auto;
  margin-top: 3em;
  background:#fff;
  border: solid black;
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
          <ProductCard />
        </Section>
      </Div>
   </Provider>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../lib/Header'
import { BackArrow } from '../lib/BackArrow'
import { ImageContainer } from '../lib/ImageContainer'
import styled from 'styled-components'
import { fetchProduct } from 'reducers/reducer'


const ProductCard = styled.section`
  border: 1px solid black;
  width: 60%;
  margin: 2em auto;

`


export const ProductInfo = () => {
  const getInfo = useSelector(state => state.products.product)

    return (
      <>
      <Header />
        <ProductCard>
          <ImageContainer />
          <p>Här får du info om din produkt</p>
          {/* <p>{getInfo.product.ingredients_analysis_tags}</p> */}
        </ProductCard>
      <BackArrow />
      </>
    )
  }



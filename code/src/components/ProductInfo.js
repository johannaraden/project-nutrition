import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { products } from '../reducers/reducer'


const ProductCard = styled.section`
  border: 1px solid black;
  width: 60%;
  margin: 2em auto;

`

export const ProductInfo = () => {
  const getInfo = useSelector(state => state.products.product)
  const dispatch = useDispatch()
  console.log(getInfo)

  const handleClick = () => {
    console.log('hello') // add functionality in reducer
    dispatch(products.actions.restart())
  }


  // when product is found - show this info
    return (
      <>
        <ProductCard>
          {getInfo.product && (<div className="productInfoContainer"><h1>Brand:</h1> <h2>{getInfo.product.brands}</h2></div>)}
          <p>Här får du info om din produkt</p>
          {/* <p>{getInfo.product.ingredients_analysis_tags}</p> */}
        </ProductCard>
      <button onClick={handleClick}>Sök efter ny produkt</button>
      </>
    )
  }



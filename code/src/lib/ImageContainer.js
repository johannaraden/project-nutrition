import React from 'react'
import styled from 'styled-components'
import { products } from "reducers/products"

const id = 7311070347272;

const ProductImage = styled.img.attrs({
    // src: `${products[id].product.image_small_url}`
})`
background-color: red;
padding: 4em;
margin: 2em;
`


export const ImageContainer = () => {
    return (
        <ProductImage>

        </ProductImage>
    )
  }
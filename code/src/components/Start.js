import React from 'react'
import { Header } from 'components/Header'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ScanBarcode } from 'components/ScanBarcode'
// import { ProductInput } from 'components/ProductInput'
import { ProductInfo } from 'components/ProductInfo'


const StartDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

export const Start = () => {
    const scanStarted =  useSelector((state) => state.products.scanStarted)

    return (
      <StartDiv>
           <Header />
           <InfoDiv>
                <h4>CHECK IF YOUR PRODUCT IS VEGAN/VEGETARIAN</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non varius erat, vitae consectetur tortor. Vivamus ut odio justo. Donec tortor est, faucibus et nulla et, faucibus gravida arcu. Ut ac dictum elit. Phasellus eleifend eleifend hendrerit. Suspendisse tincidunt dui neque, in efficitur leo varius sed. Nunc facilisis consectetur bibendum.</p>
            </InfoDiv>
            {!scanStarted ? <ScanBarcode/> : <ProductInfo/>}
            <ButtonDiv>
            </ButtonDiv>
           
      </StartDiv>
    )
  }
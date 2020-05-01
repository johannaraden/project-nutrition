import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { Button } from 'lib/Button'


const Wrapper = styled.section ``

const CameraContainer = styled.div ``

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
        
      )}

      {showScanner && (
        <CameraContainer>
        <BarcodeScanner  className='scanner' onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code)) //action fetch info from that specific product
        }} 
        />
        </CameraContainer>
      )} 
    </Wrapper>
  )
}
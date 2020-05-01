import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { Button } from 'lib/Button'
import './style.css'


const CameraContainer = styled.div `
// width: 40em;
// display: flex;
// overflow: hidden;
`

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
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
    </div>
  )
}
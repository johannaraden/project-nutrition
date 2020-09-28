import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { products } from 'reducers/products'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from 'lib/Button'
import { Close } from 'lib/Close'
import { Instructions } from 'lib/Instructions'
import './style.css'

const CameraContainer = styled.div `
  margin: auto;
  margin: 3em auto;
  width: 80%;
  padding:10px 5px;
  background: #40ad5d;
  border:1px solid #222;
  box-shadow:3px 3px 0 #222;
`

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  const startButtons = useSelector((store) => store.products.showButtons)  

// Function starting the scanner and dispatching action to hide startbuttons
  const scan = () => {
    setShowScanner(true)
    dispatch(
      products.actions.hideButtons()
    )
  }
// Function setting form in false mode and dispatching to go back to start screen
  const close = () => {
    setShowScanner(false)
    dispatch(
      products.actions.restart()
    )
  }

  return (
    <div className="wrapper">
      {/* Listening to the reducer state if the startbuttons should show or not */}
      {startButtons && (
        <Button type="button" onClick={scan}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <CameraContainer>
          <Close onClick={close}>Close</Close>
          <BarcodeScanner  className='scanner' onDetected={(code) => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code)) //action fetch info from that specific product
          }} 
          />
          <Instructions>
            <p>Scan your product's barcode.</p>
            <p>Find out if your product is veggie/vegan<span role="img" aria-label="herb-leaf">🌿</span></p>
          </Instructions>
        </CameraContainer>
      )} 
    </div>
  )
}
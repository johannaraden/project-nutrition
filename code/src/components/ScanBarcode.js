// jsx
import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/reducer'
import { products } from 'reducers/reducer'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/styling.css'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  const [showInput, setShowInput] = useState(false)
  const [code, setCode] = useState('')
  const getInfo = useSelector(state => state.products.product)



  //manual input 
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchProduct(code))
    dispatch(products.actions.scanStarted())
    setShowInput(false)
  }


  return (
    <>
    {/* If scanner is not showing - show this button to activate the scanner */}
      {!showScanner && (
        <button className="scanButton" type="button" onClick={() => setShowScanner(true)}>
          Scan your product
        </button>
      )}

      {/*If scanner is true - deactivate scanner, dispatch the code to fetchProduct function */}
      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code)) //action fetch info from that specific product
        }} />
      )}
      {!showInput && (
        <button
        className="inputButton"
        onClick={() => setShowInput(true)}
        >Search for product manually</button>
      )}
      {showInput && (
        <form onChange={handleSubmit}>
        <label>
            {" "}
            Test codes here:{" "}
            <input 
            type="text" 
            value={code}
            onChange={(e) => setCode(e.target.value)}></input>
        </label>
        <p> 
            {" "}
            Type 7311070347272 - Pågen Gifflar. Yum
        </p>
        <button
        className="inputButton"
        type="submit"
        >Search</button>       
       </form>
      )}

    </>
  )
}

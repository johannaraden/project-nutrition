import React, { useState } from 'react'
import { BarcodeScanner } from "components/BarcodeScanner"
import { Header } from '../lib/Header'
import { BackArrow } from 'lib/BackArrow'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/reducer'
import { useSelector } from 'react-redux'


const onDetected = (code) => {
    console.log(`Code: ${code}`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });
  };


export const ProductInput = () => {
    const getInfo = useSelector(state => state.products.product)
    const [code, setCode] = useState('')
    const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchProduct(code))
  }


  // skicka till product-info
  // printa ut rätt information

  return (
    <section>
        <Header />
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
            {/* {getInfo.product.product_name} */}
            {" "}
            Use the field above to test barcodes manually and keep an eye on your
            console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
        </p>
        </form>
        <BarcodeScanner onDetected={onDetected}></BarcodeScanner>
        <BackArrow />
    </section>
    )
}

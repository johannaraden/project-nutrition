import React, { useState } from 'react'
import { BarcodeScanner } from "components/BarcodeScanner"
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/reducer'
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
    let formatIngredients = []
    const dispatch = useDispatch()

  


  // skicka till product-info
  // printa ut rätt information

  return (
    <section>
        
        <BarcodeScanner onDetected={onDetected}></BarcodeScanner>
        {getInfo.product && (
          <div>
             {formatIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
        )}
    </section>
    )
}

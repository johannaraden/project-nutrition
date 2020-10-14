import React, { useState } from 'react'
import { fetchProduct } from 'reducers/products'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'lib/Button'
import { Close } from 'lib/Close'
import { Instructions } from 'lib/Instructions'
import { products } from 'reducers/products'
import styled from 'styled-components'

const ManualSection = styled.section`
  text-align: center;
  @media (max-width: 768px) {
  margin: auto;  
  }
`

const InputForm = styled.form`
  margin: 3em auto;
  width: 80%;
  padding:10px 5px;
  background: #40ad5d;
  border:1px solid #222;
  box-shadow:3px 3px 0 #222;
`

const InputField = styled.input`
  margin-left: 3em;
`

const Div = styled.div`
  margin: 3em 2em 2em 2em;
`
const SearchButton = styled.button`
  :hover {
    cursor: pointer;
  }
`


export const TypeInput = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const startButtons = useSelector((store) => store.products.showButtons)
  const [code, setCode] = useState("")
  const dispatch = useDispatch()

// Function to dispatch the api fetch of product
  const handleSubmit = e => {
    e.preventDefault()
    setShowInputForm(false)
    dispatch(fetchProduct(code))
    setCode("")
  }
// Function to show the type form and dispatching action to hide startbuttons
  const showForm = () => {
    setShowInputForm(true)
    dispatch(
      products.actions.hideButtons()
    )
  }
// Function setting form in false mode and dispatching to go back to start screen
  const close = () => {
    setShowInputForm(false)
    dispatch(
      products.actions.restart()
    )
  }

  return (
    <ManualSection>
     {/* Listening to the reducer state if the startbuttons should show or not */}
      {startButtons && (
        <Button type='Button' onClick={showForm}>
          Manual search
        </Button>
      )}
      {showinputForm && (
        <InputForm onSubmit={handleSubmit}>
          <Close onClick={close}>Close</Close>
          <Div>
            {/* <Instructions>3017620422003</Instructions> */}
            <Instructions>Please type the barcode number of your product to search information about your product</Instructions>
            <InputField
              type='text'
              placeholder='Enter product code'
              value={code}
              onChange={e => setCode(e.target.value)}
            >
            </InputField>
            <SearchButton type='submit'>Search</SearchButton>
          </Div>
        </InputForm>
      )}
    </ManualSection>
  )
}
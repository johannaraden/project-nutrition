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
  padding: 4em 2em 2em 2em;
  background: #40ad5d;
  border:1px solid #222;
  box-shadow:3px 3px 0 #222;
`

const InputField = styled.input`
  border: 2px solid #40ad5d; 
  border-bottom: 2px solid white;
  border-right:2px solid white;
  border-radius: 4px 0 0 4px;
  background-color: #40ad5d;
  font-size: 1em;
  color: white;
  line-height: 2em;
  -webkit-transition: 0.5s;
  transition: 0.2s;
  outline: none;
  :focus {
    background-color: white;
    border: 2px solid #40ad5d;
    color: #40ad5d;
  }
`

const InputDiv = styled.div`
  margin: 1em auto 2em;
`

const SearchButton = styled.button`
  font-size: 1em;
  line-height: 2em;
  border: 2px solid white; 
  border-left: 0px;
  padding: 1px;
  border-radius: 0 4px 4px 0 ;
  background-color: #40ad5d;
  color: white;
  :hover {
    cursor: pointer;
    color: #40ad5d;
    background-color: white;
  }
`
// Fetching the Close-button and making it more suitable to the local usage
const CloseButton = styled(Close)`
  margin: auto;
  float: none;
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

  const search = (e) => {
    if(e && e.keyCode === 13) {
      document.forms[0].submit()
   }
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
            {/* <Instructions>3017620422003</Instructions> */}
            <Instructions>Please type the barcode number of your product to search information about your product</Instructions>
            <InputDiv>
              <InputField
                type='text'
                placeholder='Enter product code'
                value={code}
                onChange={e => setCode(e.target.value)}
              >
              </InputField>
              <SearchButton type='submit' onClick={search}>Search</SearchButton>
            </InputDiv>
            <CloseButton onClick={close}>Close</CloseButton>
        </InputForm>
      )}
    </ManualSection>
  )
}
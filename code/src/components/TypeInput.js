import React, { useState } from "react"
import { fetchProduct } from "reducers/products"
import { useDispatch } from "react-redux"
import { Button } from "lib/Button"
import styled from "styled-components"

const ManualSection = styled.section`
@media (max-width: 768px) {
margin: auto;  
}
`

const InputField = styled.input`
margin-left: 3em;
`

export const TypeInput = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const [code, setCode] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchProduct(code))
    setCode("")
  }

  return (
    <ManualSection>

      {!showinputForm && (
        <Button type='Button' onClick={() => setShowInputForm(true)}>
          Manual search
        </Button>
      )}

      {showinputForm && (
        <Button type='Button' onClick={() => setShowInputForm(false)}>
          Close search 
        </Button>
      )}

      {showinputForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
            type='text'
            placeholder='Enter product code'
            value={code}
            onChange={e => setCode(e.target.value)}
            >
            </InputField>
            <button type='submit'>Search</button>
          </div>
        </form>
      )}
    </ManualSection>
  )
}
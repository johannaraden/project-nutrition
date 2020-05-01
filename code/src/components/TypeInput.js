import React, { useState } from "react"
import { fetchProduct } from "reducers/products"
import { useDispatch } from "react-redux"
import { Button } from "lib/Button"

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
    <>
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
            <input
              type='text'
              placeholder='Enter product code'
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <button type='submit'>Search</button>
          </div>
        </form>
      )}
    </>
  )
}
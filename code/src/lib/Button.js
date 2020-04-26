import React from 'react'
import styled from 'styled-components'

const ChoiceButton = styled.input`
background-color: green;
border-radius: 25%;
padding: 2em;
cursor: pointer;
margin: 2em;
`

export const Button = () => {
    return (
      <ChoiceButton
      type="button"
      >
      </ChoiceButton>
    )
  }
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
background-color: lightblue;
padding: 2em;
display: flex;
justify-content: center;
`

export const Header = () => {
    return (
      <HeaderContainer>
        VEGGO
      </HeaderContainer>
    )
  }
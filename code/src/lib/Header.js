import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.section`
background-color: lightblue;
width: 100%;
padding: 2em;
display: flex;
justify-content: center;
`



export const Header = () => {
    return (
      <HeaderContainer>
          <h1><Link to={`/`}>Veggo</Link></h1>
      </HeaderContainer>
    )
  }
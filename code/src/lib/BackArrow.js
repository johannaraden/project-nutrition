import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Arrow = styled.button`
  margin: 2em;
  width: 3em;
  text-decoration: none;
`



export const BackArrow = () => {
    return (
      <Arrow>
         <Link to={'/'} style={{ textDecoration: 'none'}}>⬅</Link> 
      </Arrow>
    )
  }
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
  width: 100%;
  padding-top: 2em;
  display: flex;
  margin-bottom: 2em;
  color: #40ad5d;
  justify-content: center;
  transform: rotate(-2deg);
`

const InfoText = styled.h1`
  width: 70%;
  margin: auto;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-family: 'Inconsolata', monospace;
  transform: rotate(-2deg);
  text-align: center;
    @media (max-width: 768px) {
      transform: rotate(-1deg);
    }
`

// Extending InfoText with some extra styles
const One = styled(InfoText)`
  color: #2BAB56;
  font-size: 4.2em;
  letter-spacing: .16em;
`
const Two = styled(InfoText)`
  color: white;
  font-size: 5.6em;
  letter-spacing: .02em;
  margin-top: -.2em;
`

const Three = styled(InfoText)`
  font-size: 3em;
  line-height: 1.4;
  letter-spacing: .02em;
  color: #2BAB56; 
  margin-top: -.2em;
`

export const Header = () => { 
    return ( 
      <>
        <HeaderContainer> 
        </HeaderContainer> 
        <One>
          VEGGIECHECKER
        </One> 
        <Two>
          Want veggie? 
        </Two>
        <Three>
          Research your product!
        </Three>
      </>
  ) 
}

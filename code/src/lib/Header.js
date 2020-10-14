import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
  width: 100%;
  padding-top: 2em;
  display: flex;
  margin-bottom: 2em;
  color: #40ad5d;
  justify-content: center;
`

const InfoText = styled.h1`
  width: 70%;
  margin: auto;
  font-family: 'Inconsolata', monospace;
  text-align: center;
`

export const Header = () => { 
    return ( 
      <>
      <HeaderContainer> 
      </HeaderContainer> 
      <InfoText style={{color:"#2BAB56", fontSize: 74, transform: "rotate(-2deg)"}}>VEGGIECHECKER</InfoText> 
      <InfoText style={{color:"white", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", marginTop:"-.2em", fontSize: 80, transform: "rotate(-2deg)"}}>
        Want veggie? 
      </InfoText>
      <InfoText style={{color:"#2BAB56", marginTop:"-.2em", fontSize: 44, transform: "rotate(-2deg)"}}>
        Research your product!
      </InfoText>
      </>
  ) 
}

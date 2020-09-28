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

const Headline = styled.h1`
  font-size: 2em;
  transform: rotate(-2deg);
  margin:15px;
  width: 50%;
  text-align: center; 
  padding: 10px 20px;
  background:#EFDECD;
  border:1px solid #222;
  box-shadow: 3px 3px 0 #222;
`

const InfoText = styled.h1`
  width: 70%;
  margin: auto;
  text-align: center;
`

export const Header = () => { 
    return ( 
      <>
      <HeaderContainer> 
      </HeaderContainer> 
      <InfoText style={{color:"green", fontSize: 62, transform: "rotate(-2deg)"}}>VEGGIECHECKER</InfoText> 
      <InfoText style={{color:"white", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", marginTop:"-.2em", fontSize: 75, transform: "rotate(-2deg)"}}>
        Want veggie? 
      </InfoText>
      <InfoText style={{color:"green", marginTop:"-.2em", fontSize: 42, transform: "rotate(-2deg)"}}>
        Research your product!
      </InfoText>
      </>
  ) 
}

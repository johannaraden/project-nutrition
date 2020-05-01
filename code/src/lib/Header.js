import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
background-color: lightblue;
width: 100%;
padding: 2em;
display: flex;
margin-bottom: 3em;
color: #fff;
justify-content: center;
background-image: url("https://previews.123rf.com/images/jpkirakun/jpkirakun1806/jpkirakun180600207/103664696-backdrop-and-texture-of-green-leaves-natural-wall-.jpg");
`

const Headline = styled.h1`
font-size: 2em;
`

const InfoText = styled.h1`
  margin: auto;
  text-align: center;
  color: white;
`

export const Header = () => { 
    return ( 
        <>
    <HeaderContainer> 
        <Headline>VeggieChecker</Headline> 
    </HeaderContainer> 
    <InfoText>
    Hold the barcode to the camera to scan it for information
  </InfoText>
  </>
    ) }

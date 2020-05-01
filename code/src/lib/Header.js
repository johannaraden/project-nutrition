import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
background-color: lightblue;
width: 100%;
padding: 2em;
display: flex;
color: #fff;
justify-content: center;
background-image: url("https://previews.123rf.com/images/jpkirakun/jpkirakun1806/jpkirakun180600207/103664696-backdrop-and-texture-of-green-leaves-natural-wall-.jpg");
`

export const Header = () => { 
    return ( 
    <HeaderContainer> 
        <h1>VeggieChecker</h1> 
    </HeaderContainer> ) }

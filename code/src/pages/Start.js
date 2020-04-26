import React from 'react'
import { Header } from '../lib/Header'
import { Button } from '../lib/Button'
import styled from 'styled-components'

const WelcomeDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em 8em;
`

export const Start = () => {
    return (
      <WelcomeDiv>
           <Header />
            <ButtonDiv>
                <Button value="scan"/>
                <Button />
            </ButtonDiv>
            <InfoDiv>
                <h4>Hej så här gör du:</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non varius erat, vitae consectetur tortor. Vivamus ut odio justo. Donec tortor est, faucibus et nulla et, faucibus gravida arcu. Ut ac dictum elit. Phasellus eleifend eleifend hendrerit. Suspendisse tincidunt dui neque, in efficitur leo varius sed. Nunc facilisis consectetur bibendum.</p>
            </InfoDiv>
      </WelcomeDiv>
    )
  }
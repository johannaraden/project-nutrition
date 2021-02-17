import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { products } from 'reducers/products'
import { Close } from '../lib/Close'
import './style.css'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotate(-2deg);
  margin: -3em auto 3em;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding: 2em; 
  border-width: 4px 5px 4px 6px;
  border-radius:90% 4% 80% 4%/2% 80% 3% 50%;
`

const HighlightInfo = styled.span`
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1em;
  font-weight: 800;
  font-size: 1.2em;
`

const InfoText = styled.h1`
  margin: 2em auto;
  text-align: center;
`
const NotFound = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`

const ProductName = styled.p`
  font-size: 1.4em;
  text-align: center;
`

// Nutrition grid

const Grid = styled.div`
  display: grid;
  padding: 2em;
  margin: auto;
  grid-template-rows: auto;
  grid-template-columns: 15em 15em;
  row-gap: 1em;
  column-gap: .3em; 
`

const Headline = styled.div`
  justify-self: center;
`

const Result = styled.div`
  color: white;
`


export const ProductCard = () => {
  const dispatch = useDispatch()
  const scan = useSelector(state => state.products.product)
  let formatIngredients = []

  if (!scan) return null

// Checks if the product json file has the ingredients_analysis_tags category, taking the values and cleaning the output with some regex.
  if (scan.product && scan.product.ingredients_analysis_tags) {
    formatIngredients = scan.product.ingredients_analysis_tags.map(ingredient =>
      ingredient
        .replace(/\w+:/, " ")
        .replace(/-/gi, " ")
        .replace(":", " ")
    )
  }

  const restart = () => {
    dispatch(
      products.actions.restart()
    )
  }

  const redirect = () => {
    window.location =  
                `https://world.openfoodfacts.org/product/${scan.code}/`
  }

  return (

    <Container>
      {scan.product && (
        <Card>
            <HighlightInfo>Dietary information:</HighlightInfo>
        <ProductName>{scan.product.product_name}, {scan.product.brands}</ProductName>
            <Grid>
              <Headline>Vegan</Headline>
              <Headline>Vegetarian</Headline>
              {/* Taking the formatted array, splicing out the first unimportant palm oil data set and mapping through the remaining.  */}
              {formatIngredients.splice(1, 2).map((ingredient, index) => (
                <Result className={ingredient.includes("non") ? "non" : ingredient.includes("unknown") ? "unknown" : "green" } key={index}>{ingredient}</Result>
              ))}
            </Grid>
            <Close onClick={redirect} style={{fontSize:'1.2em'}}> 
              Read more
            </Close> 
            <Close onClick={restart} style={{fontSize:'1.2em'}}>Restart</Close>
        </Card>
      )}
      
      {scan.status === 0 && (
        <NotFound>
          <InfoText>
            Product not found! Try again or search for another product.
          </InfoText>
          <Close onClick={restart}>Restart</Close>
        </NotFound>
      )}
    </Container>
  )
}
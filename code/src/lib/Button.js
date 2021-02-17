import styled from 'styled-components'



export const Button = styled.button`
  background: #71c687;
  padding: 2em;
  cursor: pointer;
  margin: 2em;
  width: 250px;
  height: 150px;
  color: #FFFF;
  font-weight: bold;
  font-size: 1.2em;
  border:solid 2px #41403E;
  transition:all .2s ease;
  border:1px solid #222;
  box-shadow:3px 3px 0 #222;
  font-family: 'Open Sans', sans-serif;
  :hover {
    background-color: #C6B271;
    text-decoration: underline;
  }
  // @media (max-width: 768px) {
  //   transform: rotate(-2deg);
  // }
`
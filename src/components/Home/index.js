import React from 'react'; 
import styled from 'styled-components'; 
import { Container, Row } from 'react-bootstrap';

export default function Home() {
  return (

    <Wrapper>
      <Container fluide= "true" > 
      <Row > 
        <h1>Bienvenu sur le site RPA</h1>
      </Row>
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div `
display: flex; 
align-items: center; 
`
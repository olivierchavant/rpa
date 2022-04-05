import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import Header from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

import { Children } from 'react'


export default function Layout({children}) {
  return (
      <Wrapper>
          <Header/> 
            <Main> 
              {children}
            </Main>
          <Footer/> 
      </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`
const Main = styled.div `
min-height: calc(100vh - 210px); 
width : 100% ; 
max-width : auto;   
margin: auto;  
display: flex ; 
justify-content: center;
`


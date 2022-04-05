import React from 'react'
import { Button, Nav,NavDropdown,Container,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"; 
import { Link } from 'react-router-dom';

export default function Header() {


  return (

    <Wrapper> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to = {'/'}>RPA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link  as={Link} to = {'/connect'} >Admin</Nav.Link>
                        <Nav.Link href="#pricing">Robots</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Données-Entrée</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">CC-CUB</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Master-data</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Interline</NavDropdown.Item> 
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <NavDropdown title="Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </Wrapper>
  )
}

const Wrapper = styled.div `


`

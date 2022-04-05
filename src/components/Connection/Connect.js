import {React, useState} from 'react'
import { Button,Row,Container,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"



export default function Connect() {

    const [validated, setValidated] = useState(false);
    const [verifSubmit, setVerifSubmit] = useState(false); 

    const handleSubmit = (event) => {

    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true); } ; 


    const [content, setContent] = useState({})

    const handleChange = (event) => {
    const { name  , value} = event.currentTarget; 
    setContent({
      ...content, 
      [name]: value, 
    }) 
    console.log(content)
   
  }; 


  return (

    <Wrapper> 
    <Container> 
         <Row>
            <h1> Bienvenu sur le site RPA</h1>
        </Row>
        <Row> 
        <Form noValidate validated={validated} onSubmit={handleSubmit}  >
            <Form.Group className="mb-3" controlId="Identifiant">
                <Form.Label>Login </Form.Label>
                <Form.Control 
                type="email" 
                placeholder="E-Mail" 
                name="login"
                onChange={handleChange}
                required
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                placeholder="Password" 
                onChange={handleChange}
                required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Row>
       
    </Container>

    </Wrapper> 
  )
}

const Wrapper = styled.div`
`
import React from 'react';
import "./LandingPage.css";
import {Button, Container,Row} from "react-bootstrap"



const LandingPage = () => {
  return (
    <div className='main'> 
    <Container>
        <Row>
            <div className='introtext'>
                <div>
                    <h1 className='introh1'>
                        Welcome to the NoteZipper
                    </h1>
                    <p4 className= 'introp1'>
                        One safe place for all of your notes
                    </p4>

                </div>
            </div>
            <div className='buttonContainer'>
                <a href='./login'>
                    <Button variant = "primary mt-4" size = 'lg' >Login</Button>
                </a>
                <a href='./Signup'>
                    <Button variant = "outline-primary mt-4 ml-4" size = 'lg' >Signup</Button>
                </a>
            </div>
        </Row>
    </Container>
    </div>
  )
}

export default LandingPage
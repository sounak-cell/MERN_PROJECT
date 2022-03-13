import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
        width : "100%",
        position: "fixed", 
        bottom:0,
        
        justifyContent : 'center'
          }} >
        <Container>
  <Row>
    <Col>Copyright &copy;NoteZipper</Col>
  </Row>
</Container>
    </footer>
  )
}

export default Footer

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Container, Col, Row} from 'react-bootstrap';

const jumbotron = () =>{
   
  return (
      <div>

<Container style={{ background: "#d6ebad", 
                paddingLeft: "70px", paddingRight: "70px", paddingTop: "70px",
                paddingBottom: "70px", color: "#666666"}} fluid>
  <Row style={{fontSize: "50px", textAlign: "center"}} >
    <Col>
      What
    </Col>
    </Row>
  <Row>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
  </Row>
</Container>


<Container style={{ background: "#d6ebad", paddingLeft: "70px", paddingRight: "70px",
                paddingBottom: "70px", color: "#666666"}} fluid>
  <Row style={{fontSize: "50px", textAlign: "center"}} >
    <Col>
      How
    </Col>
    </Row>
  <Row>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
    <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
  </Row>
</Container>

</div>
        );
    
}

export default jumbotron;
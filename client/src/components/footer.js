import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row} from 'react-bootstrap';

const footer = () => {
    
        return (
            
            <div style={{ background: " #ebf5d6", color: "#666666", paddingTop: "20px" }}>
                
                <Container>
                    <Row>
                    <Col>
                        <h5>Test</h5>
                        <p>This is test</p>
                   </Col>
                   <Col>
                    <ul>
                        <li>Link 3</li>
                        <li>Link 2</li>
                        <li>Link 1</li>
                    </ul>
                   </Col>
                    </Row>
                   
                </Container>
                
                <div  style={{ background: " #e1f0c1", color: "#666666"}} className="footer-copyright text-center py-3">
                <Container   fluid>
                    &copy; {new Date().getFullYear()} Copyright
                </Container>
                </div>
                </div>
        );
    
}

export default footer;
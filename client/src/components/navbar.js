import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap';

const navbar = () =>{
   
        return (
            <div style={{ background: "#aed75b", color: "#666666" }}>
                 <Navbar bg="#9acd32">
    <Navbar.Brand href="#home" style={{ color: "#666666" }}>Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={{ color: "#666666" }}>Home</Nav.Link>
    </Nav>
    <Form inline>
      
      <Button  style={{ background: "none",borderColor: "#666666", color: "#666666" }}>Register</Button>
    </Form>
  </Navbar>
            </div>
        );
    
}

export default navbar;
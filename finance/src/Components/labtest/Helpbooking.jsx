import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { IoIosCall } from "react-icons/io";
import { CiStickyNote } from "react-icons/ci";

export const Helpbooking = () => {
  return (
    
    <Container style={{padding:"30px"}}>
      <h3 style={{ marginBottom: '20px' }}>Need help in booking?</h3>

      <Row>
       
        <Col md={6} xs={12}>
          <div
            style={{
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CiStickyNote size={30} />
              <span>Upload your prescription to book your tests</span>
            </div>
            <Button variant="outline-primary">Upload</Button>
          </div>
        </Col>

       
        <Col md={6} xs={12}>
          <div
            style={{
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IoIosCall size={30} />
              <span>Call us to get booking assistance with lab experts</span>
            </div>
            <Button variant="outline-primary">Call Us</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

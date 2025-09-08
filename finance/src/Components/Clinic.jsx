import React from 'react'
import Container from 'react-bootstrap/esm/Container'

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

export const Clinic = () => {
  return (
    <div>


<Container className="mt-4 mb-2">
        <h4 className="fw-bold">Top Hospitals</h4>
        <p>Access 6500+ top hospitals across India</p>
      </Container>
      <Container className="py-4">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: "20px",
            paddingBottom: "10px",

            scrollbarWidth: 'none', msOverflowStyle: 'none'
          }}
        >

          <Card style={{ minWidth: "18rem", flex: "0 0 auto", backgroundColor: 'white' }}>
            <Card.Img
              variant="top"
              src="https://doctorlistingingestionpr.blob.core.windows.net/provider/4c3ddfba-9962-4235-9dd6-e8d2b4008e7e/HospitalProfileImage_HospitalProfileImage_image_105.jpg"
              style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Clove Dental</Card.Title>
              
              <p>South Delhi ~1513km</p>
              <Button variant='outline-primary' style={{ width: '18rem' }} >View details</Button>
            </Card.Body>
          </Card>




          <Card style={{ minWidth: "18rem", flex: "0 0 auto", backgroundColor: 'white' }}>
            <Card.Img
              variant="top"
              src="https://doctorlistingingestionpr.blob.core.windows.net/provider/19e7f44d-8caa-4ee4-a4cf-81479b74eeb1/HospitalProfileImage_ProviderLogo_ProviderLogo_square_4__1_.jpg"
              style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Sabka Dentist</Card.Title>
              
              <p>Mumbai ~9.5km</p>
              <Button variant='outline-primary' style={{ width: '18rem' }} >View details</Button>
            </Card.Body>
          </Card>
          </div>
          </Container>



    </div>
  )
}

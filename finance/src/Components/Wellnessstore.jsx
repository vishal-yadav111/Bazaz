import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './homepage.css'

export const Wellnessstore = () => {
  return (
    <div>
<Container className="mt-4 mb-2">
  <h4 className="fw-bold">Wellness Store
</h4>
  <p>All you need for well-being in one place</p>
    
</Container>
<Container className="p-4">
        <Row className="g-3">

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Icons_Program_1_e22cff729d.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Programs</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Icons_Membership_1_7574f19b05.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Memberships</h6>
          </Col>

           <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Icons_Devices_1_35983e9f28.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Devices</h6>
          </Col>
       </Row>
       </Container>

    </div>
  )
}

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './homepage.css'

export const Labtest = () => {
  return (
    

<div>


<Container className="mt-4 mb-2">
  <h4 className="fw-bold">Lab Tests</h4>
  <p>Get best deals on tests across 1000+ labs</p>
</Container>


      <Container className="p-4">
        <Row className="g-3">

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/heart_b665519e4c.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Healthy Heart</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Full_body_checkup_9645a38071.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Full Body Checkup</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/ultra_sound_de9b738fae.png" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Ultrasound</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/liver_0787cb1814.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Healthy Liver</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/cancer_dba7a67b45.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Cancer</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Joint_pain_77001558af.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Artheritis</h6>
          </Col>

        </Row>
      </Container>
    </div>
  )
}






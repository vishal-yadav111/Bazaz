import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './homepage.css'

export const Symptoms = () => {
  return (
    <div>


<Container className="mt-4 mb-2">
  <h4 className="fw-bold">Select Symptoms</h4>
  <p>Select a symptom for doctor consultation</p>
    
</Container>

 

      <Container className="p-4">
        <Row className="g-3">

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Fever_e596b621c6.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Fever</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Hair_fall_049e030315.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Hair Fall</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Joint_pain_77001558af.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Joint Pain</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Toothache_1_4eaf187b45.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Toothache</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Skin_Infection_b4a61e932d.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Skin Infection</h6>
          </Col>

          <Col xs={6} sm={4} md={3} lg={2}>
            <Card className="symptom">
              <Card.Img 
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Iregular_periods_bb8bde9dbb.svg" 
                className="size" 
              />
            </Card>
            <h6 className="text-center mt-2">Irregular Periods</h6>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

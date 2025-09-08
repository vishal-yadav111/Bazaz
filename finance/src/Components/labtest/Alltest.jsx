
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const Alltest = () => {
  return (
    <div>
      <Container className="mt-4 mb-2">
        <h4 style={{ fontWeight: "bold" }}>Lab Tests</h4>
        <p style={{ margin: "0", color: "#555" }}>
          Get best deals on tests across 1000+ labs
        </p>
      </Container>

      <Container style={{ padding: "20px" }}>
        {/* Make row flex evenly spaced */}
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Card 1 */}
          <Col xs={6} sm={4} md={3} lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Card style={{ border: "1px solid #ddd", borderRadius: "12px", width: "100%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                <Card.Img
                  src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/full_body_checkup_5b110016d0.png"
                  style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px" }}
                />
              </Card>
              <h6 style={{ marginTop: "12px", textAlign: "center" }}>Full body checkup</h6>
              <p style={{ fontSize: "14px", color: "#666", textAlign: "center", margin: "0" }}>
                overall health diagnosis
              </p>
            </div>
          </Col>

          {/* Card 2 */}
          <Col xs={6} sm={4} md={3} lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Card style={{ border: "1px solid #ddd", borderRadius: "12px", width: "100%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                <Card.Img
                  src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/organ_assesment_f1f68fa288.png"
                  style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px" }}
                />
              </Card>
              <h6 style={{ marginTop: "12px", textAlign: "center" }}>Body Organ</h6>
              <p style={{ fontSize: "14px", color: "#666", textAlign: "center", margin: "0" }}>
                assess organ function 
              </p>
            </div>
          </Col>

          {/* Card 3 */}
          <Col xs={6} sm={4} md={3} lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Card style={{ border: "1px solid #ddd", borderRadius: "12px", width: "100%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                <Card.Img
                  src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/lifestyle_habits_c810175435.webp"
                  style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px" }}
                />
              </Card>
              <h6 style={{ marginTop: "12px", textAlign: "center" }}>Lifestyle Habits</h6>
              <p style={{ fontSize: "14px", color: "#666", textAlign: "center", margin: "0" }}>
                measure your habit
              </p>
            </div>
          </Col>

          {/* Card 4 */}
          <Col xs={6} sm={4} md={3} lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Card style={{ border: "1px solid #ddd", borderRadius: "12px", width: "100%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                <Card.Img
                  src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/radiology_tests_4f53656388.webp"
                  style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px" }}
                />
              </Card>
              <h6 style={{ marginTop: "12px", textAlign: "center" }}>Radiology Tests</h6>
              <p style={{ fontSize: "14px", color: "#666", textAlign: "center", margin: "0" }}>
                X-ray MRI etc
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

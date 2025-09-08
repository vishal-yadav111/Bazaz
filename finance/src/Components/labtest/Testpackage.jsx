



import { Row,Col ,Container } from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoTimerOutline } from "react-icons/io5";
import { FaHospital } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Testpackage = () => {
  const testpack = [
    {
      packagename: "Aarogyam Full Body Platinum",
      problem: "Arthritis and 144 more",
      labname: "Thyrocare",
      price: "₹6000",
      hospital: "Pearl Women's Hospital",
      address: "Pune, Maharashtra",
    },
    {
      packagename: "Aarogyam Full Body Platinum",
      problem: "Arthritis and 144 more",
      labname: "Thyrocare",
      price: "₹6000",
      hospital: "Pearl Women's Hospital",
      address: "Pune, Maharashtra",
    },
    {
      packagename: "Aarogyam Full Body Platinum",
      problem: "Arthritis and 144 more",
      labname: "Thyrocare",
      price: "₹6000",
    },
    {
      packagename: "Aarogyam Full Body Platinum",
      problem: "Arthritis and 144 more",
      labname: "Thyrocare",
      price: "₹6000",
    },
  ];

  return (<div>
    <div style={{ margin: "0 40px" }}> {/* ✅ margin left & right */}
      <h3 style={{ marginBottom: "20px" }}>Popular Test Package</h3>

      <div
        className="doctorcardcontainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {testpack.map((item, index) => (
          <Card
            key={index}
            style={{
              flex: "1 1 200px", // ✅ responsive flexible width
              maxWidth: "220px", // ✅ prevent too wide cards
              backgroundColor: "white",
              minWidth:'330px',
              padding: "10px",
              minHeight: "250px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              justifyContent: "flex-start",
            }}
          >
            <Card.Img
              src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_1707480543_dcd4d493cc.png"
              style={{
                objectFit: "cover",
                height: "40px",
                width: "40px",
              }}
            />
            <Card.Body style={{ padding: "0", marginTop: "10px" }}>
              <Card.Title>{item.packagename}</Card.Title>
              <p style={{ fontWeight: "100" }}>{item.problem}</p>
              <p style={{ margin: "0" }}>{item.labname}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  alignItems: "center",
                }}
              >
                <h6 style={{ margin: 0 }}>{item.price}</h6>
                <Button size="sm" variant="outline-primary">
                  Book Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
    
 <Container >
        <Row className="g-3">
          {/* First Image */}
          <Col xs={12} md={6}>
            <div style={{ width: "100%" }}>
              <a href="https://www.bajajfinservhealth.in/lab-tests/express-booking">
              <img
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/express_banner_1_6fed024f15.webp"
                alt="Express Banner"
                style={{
                  width: "100%",        // ✅ fills the container
                  height: "auto",       // ✅ responsive height
                  maxHeight: "200px",   // ✅ cap height
                  objectFit: "cover",
                  borderRadius: "10px",
                  display: "block"      // ✅ removes inline spacing
                }}
              />
              </a>
            </div>
          </Col>

          {/* Second Image */}
          <Col xs={12} md={6}>
            <div style={{ width: "100%" }}>
              <a href="https://www.bajajfinservhealth.in/lab-tests/radiology">
              <img
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/radio_banner_1_c63bd1c485.webp"
                alt="Radio Banner"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  display: "block"
                }}
              /></a>
            </div>
          </Col>
        </Row>
      </Container>
</div>


  );
};

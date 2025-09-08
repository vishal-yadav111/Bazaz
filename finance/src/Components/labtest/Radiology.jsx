// import React from 'react'

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import { LuMicroscope } from "react-icons/lu";
// import { GrCertificate } from "react-icons/gr";
// import { CiLocationOn } from "react-icons/ci";
// export const Radiology = () => {
//   return (
//     <div style={{backgroundColor:'#e6f3fd'}}>

//  <Container>
//       <Row>
//         <Col >
//         <div style={{padding:'20px',display:'flex'

//         }}>
//         <div style={{padding:'20px' }}>
//         <h3>Radiology Scan</h3>
//         <br></br>
//         <p>  <LuMicroscope  size={20}/>  
// 32+ Partner diagnostic labs PAN India</p>
// <p> <GrCertificate size={20} />
// NABH & NABL Certified abs</p>
// <p> <CiLocationOn size={20} />
// 550+ Scans and Tests</p>
// </div>
// <div style={{alignContent:'center'}} className='img-fluid'>
//     <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/radiology_section_image_3f9c09af90.webp" alt="" srcset="" style={{height:'255px',width:'250px',objectFit:'cover', }} />

// </div>
// </div>
//         </Col>
//         <Col>
//         <div style={{display:'flex',flexWrap:'nowrap'
//         }}>
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/ct_scan_aaa736ee0a.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/ultra_sound_35541053d2.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/ecg_15e5f31b07.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/xray_icon_ae66a1b84a.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/joint_pain_e153b74448.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/mri_df47e8ed4d.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/echo_92506aeee2.png" alt="" srcset="" />
// <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/mammography_9a13623f3a.png" alt="" srcset="" />
// </div>
//         </Col>
      
//       </Row>
//     </Container>









//     </div>
//   )
// }







import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { LuMicroscope } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

export const Radiology = () => {
  const scanIcons = [
    { file: "ct_scan_aaa736ee0a.png", label: "CT Scan" },
    { file: "ultra_sound_35541053d2.png", label: "Ultrasound" },
    { file: "ecg_15e5f31b07.png", label: "ECG Test" },
    { file: "xray_icon_ae66a1b84a.png", label: "X-Ray" },
    { file: "joint_pain_e153b74448.png", label: "BMD" },
    { file: "mri_df47e8ed4d.png", label: "MRI" },
    { file: "echo_92506aeee2.png", label: "ECHO" },
    { file: "mammography_9a13623f3a.png", label: "Mammography" },
  ];

  return (
    <div style={{ backgroundColor: "#e6f3fd", padding: "40px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={6} className="mb-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {/* Text */}
              <div>
                <h3>Radiology Scan</h3>
                <br />
                <p>
                  <LuMicroscope size={20} style={{ marginRight: "8px" }} />
                  32+ Partner diagnostic labs PAN India
                </p>
                <p>
                  <GrCertificate size={20} style={{ marginRight: "8px" }} />
                  NABH & NABL Certified Labs
                </p>
                <p>
                  <CiLocationOn size={20} style={{ marginRight: "8px" }} />
                  550+ Scans and Tests
                </p>
              </div>

              {/* Image */}
              <div>
                <img
                  src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/radiology_section_image_3f9c09af90.webp"
                  alt="Radiology"
                  style={{
                    height: "255px",
                    width: "250px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>

          {/* Right Section - Scans */}
          <Col md={6}>
            <Row>
              {scanIcons.map((item, idx) => (
                <Col xs={6} sm={3} className="mb-4" key={idx}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      padding: "15px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {/* Image */}
                    <img
                      src={`https://cmsuatstor.blob.core.windows.net/cms-uat/assets/${item.file}`}
                      alt={item.label}
                      style={{
                        height: "70px",
                        width: "70px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                      className="img-fluid"
                    />
                    {/* Label */}
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        marginTop: "5px",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

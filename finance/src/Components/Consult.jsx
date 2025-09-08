// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const doctors = [
//   {
//     title: "General Physician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+425 doctors online"
//   },
//   {
//     title: "Dermatologist",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+129 doctors online"
//   },
//   {
//     title: "Gynaecologist and Obstetrician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+166 doctors online"
//   },
//   {
//     title: "Paediatrician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+145 doctors online"
//   },
//   {
//     title: "Orthopaedic",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+48 doctors online"
//   },
//   {
//     title: "Ayurveda",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+132 doctors online"
//   }
// ];

// const Consult = () => {
//   return (
//     <Container className="py-4">
      
//       <div className="align-items-center mb-3 ">
//        <h5>Consult Instantly</h5>
//           <p className="text-muted">Consult any top doctors online in just 60 Seconds</p>
        
//         <div className="text-end">
//           <a href="#view-all" style={{color:"blue", fontWeight:"500"}}>View All</a>
//         </div>
// </div>
//       {/* Doctor cards */}
//       <div className="g-3 " style={{whiteSpace:"nowrap",overflow:'auto'}}>
//         {doctors.map((doc, index) => (
//           <Col key={index} xs={6} sm={4} md={3} lg={2} style={{minWidth:"160px"}}>
//             <Card className="h-100 text-center " style={{borderRadius:"12px",backgroundColor:'white',gap:"10px"}}>
//               <Card.Img 
//                 variant="top" 
//                 src={doc.img} 
//                 style={{ width: "70px", height: "70px", margin: "15px" }} 
//               />
//               <Card.Body style={{padding:"8px"}}>
//                 <Card.Title style={{fontSize:"14px", fontWeight:"600"}}>{doc.title}</Card.Title>
//                 <p className="text-muted" style={{fontSize:"12px", margin:"0"}}>
//                   {doc.online}
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   )
// }

// export default Consult;



// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';

// const doctors = [
//   {
//     title: "General Physician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+425 doctors online"
//   },
//   {
//     title: "Dermatologist",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+129 doctors online"
//   },
//   {
//     title: "Gynaecologist and Obstetrician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+166 doctors online"
//   },
//   {
//     title: "Paediatrician",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+145 doctors online"
//   },
//   {
//     title: "Orthopaedic",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+48 doctors online"
//   },
//   {
//     title: "Ayurveda",
//     img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
//     online: "+132 doctors online"
//   }
// ];

// const Consult = () => {
//   return (
//     <Container className="py-4">
//       {/* Heading */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <h5>Consult Instantly</h5>
//           <p className="text-muted mb-0">
//             Consult any top doctors online in just 60 Seconds
//           </p>
//         </div>
//         <a href="#view-all" style={{ color: "blue", fontWeight: "500" }}>
//           View All
//         </a>
//       </div>

//       {/* Cards using Flexbox */}
//       <div
//         className=" gap-3"
//         style={{ justifyContent: "center" ,overflowX: "auto",
//             whiteSpace: "nowrap",
//             gap: "20px",
//             display:'flex',
//             paddingBottom: "10px",
           

//             scrollbarWidth: 'none', msOverflowStyle: 'none'}}
//       >
//         {doctors.map((doc, index) => (
//           <Card
//             key={index}
//             className="text-center"
//             style={{
//               borderRadius: "12px",
//               minWidth: "160px",
//               flex: "1 1 150px",
//               maxWidth: "200px"
//             }}
//           >
//             <Card.Img
//               variant="top"
//               src={doc.img}
//               style={{ width: "70px", height: "70px", margin: "15px auto 0" }}
//             />
//             <Card.Body style={{ padding: "8px" }}>
//               <Card.Title style={{ fontSize: "14px", fontWeight: "600" ,overflow: 'hidden', }}>
//                 {doc.title}
//               </Card.Title>
//               <p
//                 className="text-muted"
//                 style={{ fontSize: "12px", margin: "0" }}
//               >
//                 {doc.online}
//               </p>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Consult;







import React from 'react';
import { Container, NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const doctors = [
  {
    title: "General Physician",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_20_f32eb42bbf.png",
    online: "+425 doctors online",
    url: "https://www.bajajfinservhealth.in/instant-consultation/schedule?instantConsult=true&speciality=General%20Physician"
  },
  {
    title: "Dermatologist",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_18_0baa9ed89a.png",
    online: "+129 doctors online",
    url: "#"
  },
  {
    title: "Gynaecologist and Obstetrician",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_a2a52ab8e5.png",
    online: "+166 doctors online",
    url: "#"
  },
  {
    title: "Paediatrician",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_6_59530ed475.png",
    online: "+145 doctors online",
    url: "#"
  },
  {
    title: "Orthopaedic",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_4_b34f7a5361.png",
    online: "+48 doctors online",
    url: "#"
  },
  {
    title: "Ayurveda",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_1_9d0199d8e6.png",
    online: "+132 doctors online",
    url: "#"
  },
   {
    title: "Dentist",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_19_f602ac061a.png",
    online: "+132 doctors online",
    url: "#"
  },
   {
    title: "Opthamalogist",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_12_cbf55204c6.png",
    online: "+132 doctors online",
    url: "#"
  },
   {
    title: "Homeopath",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_1_9d0199d8e6.png",
    online: "+132 doctors online",
    url: "#"
  },
  {
    title: "Psychiatrist",
    img: "https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_2087327217_8_ba9e9694dd.png",
    online: "+132 doctors online",
    url: "#"
  }
];

const Consult = () => {
  return (
    <Container className="py-4">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5>Consult Instantly</h5>
          <p className="text-muted mb-0">
            Consult any top doctors online in just 60 Seconds
          </p>
        </div>
        <a href="#view-all" style={{ color: "blue", fontWeight: "500" }}>
          View All
        </a>
      </div>

     
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          gap: "20px",
          padding: "20px 0",
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}
      >
        {doctors.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              style={{
               
                flex: "0 0 auto",
                borderRadius: "11px",
                backgroundColor: "white",
                maxWidth:'12rem',
                textAlign: "left",
                
              }}
            >
               <Card.Img
                src={doc.img}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  marginTop: "10px"
                }}
              />


              
              <Card.Body style={{ padding: "12px" }}>
                <Card.Title
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    lineHeight: "1.3",
                    whiteSpace: "normal",
                    height: "2.5em",
                    overflow: "hidden"
                  }}
                >
                  {doc.title}
                </Card.Title>
                <p
                  className="text-muted"
                  style={{ fontSize: "0.9rem", margin: "0" }}
                >
                  {doc.online}
                </p>
              </Card.Body>
            </Card>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Consult;


// import React from 'react'
// import Button from 'react-bootstrap/esm/Button'
// import Container from 'react-bootstrap/esm/Container'

// export const Healthcorner = () => {
//   return (
//     <div > 
//         <Container >
//           <h5>Health Corner</h5>
//          <p> Take a quiz, check your Health Score and much more </p>
//         </Container>
//         <Container style={{display:'flex' ,gap:'30px'}}>
//         <Container style={{backgroundColor:'rgb(0,93,172)',display:'flex' ,borderRadius:'10px'}} >
//         <div >
//         <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_19997_d85066c3ba.svg" alt="" srcset="" />
//           <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Group_unk8486_b985cef023.png" alt="" srcset="" className='img-fluid '/>

//           </div> 
//           <div>
//             <h4 style={{marginTop:'20px',marginBottom:'20px',color:' rgb(255, 191, 94)'}}>Health Risk Assessment</h4>
//             <p style={{color:'white'}}>A quiz based on your lifestyle to understand your health better</p>
//             <button style={{backgroundColor:'red',color:'white',borderRadius:'10px',marginTop:'30px'}}>GOT FREE HEALTH CHECKUP</button>
//           </div>
//           <div style={{alignContent:'flex-end'}}>
//             <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_19996_00ecb0aa43.svg" alt="" srcset="" className='img-fluid'/>
//           </div>
//         </Container>
//         <Container style={{display:'flex' ,padding:'20px',borderRadius:'10px', backgroundColor:'rgb(253,164,22)'}}>

// <div style={{display:'flex', flexWrap:'wrap'}}>

//   <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_1707480248_861486fc28.svg" alt="" srcset=""  className='img-fluid'/>
//   <div style={{color:'white'}}>
//   <h2>Fun time!
// Take a Quiz</h2>
// <p>Test your knowledge & earn health coins

// Take a Quiz</p>
// <Button style={{paddingLeft:'20px',paddingRight:'20px'}}>Take a quiz</Button>
// </div>
// </div>

//         </Container>
//         </Container>


//     </div>
//   )
// }






import React from "react";
import { Button, Container } from "react-bootstrap";

export const Healthcorner = () => {
  return (
    <div className="my-5">
      <Container>
        <h5>Health Corner</h5>
        <p>Take a quiz, check your Health Score and much more</p>


        <div className="d-flex flex-wrap gap-4 mt-4">

          <div
            className="d-flex justify-content-between align-items-center  rounded"
            style={{ backgroundColor: "rgb(0,93,172)", flex: "1 1 55%" }}
          >
            <div>
              <img
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_19997_d85066c3ba.svg"
                alt=""
                className="img-fluid mb-2"
              />
              <img
                src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Group_unk8486_b985cef023.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="ms-3">
              <h4 className="mb-3" style={{ color: "rgb(255,191,94)" }}>
                Health Risk Assessment
              </h4>
              <p className="text-white">
                A quiz based on your lifestyle to understand your health better
              </p>
              <Button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                Get Free Health Checkup
              </Button>
            </div>
 
            <div >
              <img
                src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_19996_00ecb0aa43.svg"
                alt=""

              />
            </div>
          </div>

        
          <div
            className="d-flex p-3 rounded align-items-center"
            style={{ backgroundColor: "rgb(253,164,22)", flex: "1 1 25%" }}
          >
            <img
              src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Frame_1707480248_861486fc28.svg"
              alt=""
              className="img-fluid me-3"
              style={{ maxWidth: "120px" }}
            />
            <div className="text-white">
              <h3>Fun time! Take a Quiz</h3>
              <p>
                Test your knowledge & earn health coins
                <br />
                Take a Quiz
              </p>
              <Button variant="primary">Take a Quiz</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};















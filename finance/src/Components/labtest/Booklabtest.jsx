import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '..//Navigationb.css';
import './/book.css'
import { Container } from 'react-bootstrap';
import { useState } from 'react';

export const Booklabtest = () => {

const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    // later you can send files to backend with fetch or axios
    console.log("Files ready to upload:", files);
  };

  return (
    <div><div  className='screen' style={{display:'flex',backgroundColor:'rgb(243, 243, 243)'}}>  
       <Container>
         <Row>
         <Col className='home'>
         <h1 className='mt-3 mb-3'>Book Tests at Trusted Labs</h1>
         <h5 style={{color:'rgb(255, 191, 94)'}}> Upload prescription to book your tests</h5>


<div className='fileupload'>
      <h5 style={{color:'rgb(0,93,172)'}}>Click here to upload Prescription</h5>
      <div style={{textAlign:'center'}}>
      <p  style={{fontWeight:'10'}} >JPG PNG PDF</p>
      </div>
      {/* <input
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleFileChange}
        className="border rounded p-2 w-full"
      /> */}

      

      {files.length > 0 && (
        <ul className="list-disc pl-5">
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
{/* 
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Upload
      </button> */}
    </div>

         </Col>
        <Col style={{display:'flex',justifyContent:'end'}}>
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/home_page_intro_66169c9673.webp" alt="" srcset="" style={{height:'280px',width:'400px'}}/>
        
        
        </Col>
      </Row>
      </Container>
      
      </div></div>
  )
}

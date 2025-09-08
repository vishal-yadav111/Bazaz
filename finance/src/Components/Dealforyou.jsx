import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export const Dealforyou = () => {
  return (
    <div style={{backgroundColor:'rgb(242,242,242)',marginTop:'30px',padding:'40px'}}>

<Container>
    <h5>Deals For You</h5>
    <p>Best deals curated just for you and your health</p>
</Container>

<Container style={{display:'flex', flexWrap:'wrap',gap:'30px', objectFit:'cover'}}>
    <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/image_3_88873febf8.png" alt="" srcset="" style={{height:'266px',width:'450px'}} className='img-fluid' />
    <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/ultrasound_banner_6506af2079.png" alt="" srcset="" style={{height:'266px',width:'450px',}} className='img-fluid'/>
</Container>

    </div>
  )
}

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Navigationb.css'
import Container from 'react-bootstrap/esm/Container';
export const Featurecard = () => {
  return (
    < div className='screen'>
    <Container>
    <div  style={{display:'flex',overflowX:'scroll',whiteSpace:'nowrap',gap:'20px', scrollbarWidth:'none' ,msOverflowStyle:'none',padding:'10px', paddingTop:'60px'}}>
      
    <img className='hw' src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/WELLNESS_app_web_unk931_807897ec1c.webp" alt="" srcset="" />
       <img className='hw' src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Homepage_Banner_1_d90906d63f.webp" alt="" srcset="" />
      <img className='hw' src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Homepage_Banner_2_9617c57990.webp" alt="" srcset="" />
        <img className='hw' src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Homepage_Banner_3_c0fff76eac.webp" alt="" srcset="" />
         <img className='hw' src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Homepage_Banner_5_aa60f06b4f.webp" alt="" srcset="" />
    </div>
    
    </Container>
    </div>

  )
}

import React from 'react'
import './/articlepage.css'

export const Articlepage = () => {
    const punespecialist =[
        
"Top General Physicians in Pune",
"Top Dentists in Pune",
"Top Dermatologists in Pune",
"Top Paediatricians in Pune",
"Top Gynaecologists in Pune",
"Top ENTS in Pune",
"Top Diabetologists in Pune",
"Top Cardiologists in Pune",
"Top Physiotherapists in Pune",
"Top Endocrinologists in Pune",
"Top Orthopaedics in Pune",
"Top Ophthalmologists in Pune",
 "Top Gastroenterologists in",
"Top Pulmonologists in Pune",
"Top Psychiatrists in Pune",
"Top Urologists in Pune",
"Top Dietitian/Nutritionists in Pune",

    ]
  return (
    <div >

<div style={{paddingTop:'50px', paddingLeft:'50px',paddingRight:'50px'}}>

<h5>Why Bajaj Finserv Health?</h5>
<p>At Bajaj Finserv Health, you can book your preferred appointment slot with an experienced and qualif <strong style={{color:'blue',cursor:'pointer'}}>See more</strong>
</p>
<div style={{padding:"30px"}}>
    <h4>Related article</h4>

    <div className='article'>
    <img src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/07/July-thumbnail-15-1.webp" alt="" srcset=""  className='img-fluid'height={80} width={80} style={{paddingRight:'10px',objectFit:'cover'}}/>
    <h6>

Top 7 Benefits of Ashwagandha Tablet: What You Need to Know</h6>
</div>
<div className='article'>
    <img src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/06/TAVR-thumbnail.png" alt="" srcset=""  className='img-fluid'height={80} width={80} style={{paddingRight:'10px',objectFit:'cover'}}/>
    <h6>

Revolutionizing Access to TAVR: Bajaj Finance Transforming Cardiac Surgeries with Easy EMIs</h6>
</div>
<div className='article'>
    <img src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Thumbnail-10.webp" alt="" srcset=""  className='img-fluid'height={80} width={80} style={{paddingRight:'10px',objectFit:'cover'}}/>
    <h6>


Vaginal Yeast Infection: Causes, Early Symptoms and Treatment</h6>
</div>
<div className='article'>
    <img src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Thumbnail-9.webp" alt="" srcset=""  className='img-fluid'height={80} width={80} style={{paddingRight:'10px',objectFit:'cover'}}/>
    <h6>

Ketones in Urine: 6 Top Things to Know About Ketone Test</h6>
</div>

</div>

</div>







        <h5>Top Specialist in Pune</h5>
{punespecialist.map((pune)=>(
    <div style={{color:'blue', cursor:"pointer"}}>
    <ul>
        <li>{pune}</li>
    </ul>
    </div>

))}
    </div>
  )
}


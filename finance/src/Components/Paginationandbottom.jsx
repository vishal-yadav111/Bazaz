import React from 'react'
import { Button, Card, CardBody } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { VscCallIncoming } from "react-icons/vsc";

export const Paginationandbottom = () => {
  return (
    <div>
    <div>
        

    <Pagination>
      
   
     
 <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
       <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item >{5}</Pagination.Item>
       <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item >{7}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{1000}</Pagination.Item>
      <Pagination.Next />
     
    </Pagination>
</div>

    <h5>Easy Way To Book</h5>
<div style={{display:"flex",justifyContent:'center',justifyContent:'space-between',backgroundColor:'white',padding:'10px',borderRadius:'10px'}}>
   
<div style={{display:'flex'}} >
<VscCallIncoming size={35}/>
<span style={{marginLeft:'15px'}}> 
<h6 style={{margin:'0'}}>Request a call back</h6> 
<p style={{margin:'0'}}>Assisted booking with experts</p>
</span>

</div>
<Button variant='outline-primary'>Call us</Button>
</div>






<div style={{display:"flex",justifyContent:'center',justifyContent:'space-between',backgroundColor:'white',padding:'10px',borderRadius:'10px',flexWrap:'wrap'}}>
   
<div  >

<h5>Choose preferred language</h5>
<p>We will try to connect with a Doctor who can speak the language</p>

</div>
<div style={{padding:'20px',display: "flex",gap:'10px'}}>

<Button variant='outline-secondary'>HINDI</Button>
<Button variant='outline-secondary'>ENGLISH</Button>

</div>

</div>




<div style={{display:"flex",justifyContent:'center',justifyContent:'space-between',backgroundColor:'white',padding:'10px',borderRadius:'10px',flexWrap:'wrap'}}>
   
<div  >

<h5>Refine Your Research</h5>
<p>Consider doctor experience & gender preferences</p>

</div>
<div style={{padding:'20px',display: "flex", gap: "10px" }}>

<Button variant='outline-secondary'>2-5 years</Button>
<Button variant='outline-secondary'>5-8 years</Button>
<Button variant='outline-secondary'>9-12 years</Button>

</div>
</div>
    </div>
   
  )
}

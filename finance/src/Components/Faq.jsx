import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';



export const Faq = () => {

const Faqdata=[
    {
        id:0,
        FaQuestion:"Does Bajaj Finserv Health have its own hospitals?",
        answer:"No, Bajaj Finserv Health does not have its own hospitals. We work in partnership with top hospitals across India to provide comprehensive care to our patients at affordable prices. "
    },
     {
        id:1,
        FaQuestion:"Can I consult with a doctor online at Bajaj Finserv Health?",
        answer:"Yes. Bajaj Finserv Health provides the option of booking online doctor consultations. You can connect with medical experts via calls or online chats. Our doctors ensure a detailed medical discussion with the patients during these consultations to arrive at a suitable treatment course."
    },
     {
        id:2,
        FaQuestion:"Does Bajaj Finserv Health have insurance coverage for all surgeries?",
        answer:"Bajaj Finserv Health does not provide insurance. However, insurance coverage is accepted for the different procedures and surgeries offered by our partner hospitals."
    },
     {
        id:3,
        FaQuestion:"Does Bajaj Finserv Health have partnerships with laboratories and imaging centers?",
        answer:"Yes. A detailed list of lab and radiology (imaging) partners can be found on the Bajaj Finserv Health App and website. You can easily book an appointment for a home sample collection for lab tests or schedule an imaging test at a nearby radiology center."
    }]


  return (
    <div>
        <Container>


<div style={{marginTop:'50px',marginBottom:'50px'}}>
<h2>Book Pathology & Radiology Tests Effortlessly with Bajaj Finserv Health

</h2>
<h3>Comprehensive Healthcare Solutions for Modern Living</h3>
<p>Bajaj Finserv Health brings you world-class laboratory services in the comfort of your home. Our seamless diagnostic experience combines convenience with clinical excellence, making preventive healthcare an effortless part of your wellness routine. Visit Our Lab Tests Section to explore our complete catalog and book your tests today.</p>

<h5>Experience Hassle-Free Testing in Three Simple Steps</h5>
<ul>
   <li>Select Your Test: Choose from our comprehensive range of tests or health packages</li>
    <li>Schedule Your Appointment: Pick a convenient time for home sample collection</li>
    <li>Access Digital Reports: Receive accurate results through our secure platform</li>
</ul>

<h5>Comprehensive Diagnostic Solutions</h5>



<ul>
   <li>Full Body Checkups: Overall health diagnosis including CBC, Lipid Profile, Thyroid Function, Blood Glucose, Vitamin Panels, and more</li>
    <li>Body Organs: Assess major organ function with Liver Health, Kidney Performance, Cardiac Risk Assessment, Hormone Levels, and Cancer Screening</li>
    <li>Lifestyle Habits: Measure habits, empower health with customized testing for diabetes management, nutritional deficiencies, immunity profiles, and more</li>

    <li>ECG, X-Ray, MRI & Scans : Radiology based lab tests including ECG, X-Ray, MRI, CT Scan, Ultrasound, and more advanced imaging services</li>

</ul>


</div> 




<h4>Faqs</h4>
<Accordion defaultActiveKey="0" flush>

    {Faqdata.map((faq)=>(


<Accordion.Item  Key={faq.id} eventKey={faq.id.toString()}>
        <Accordion.Header><h6>{faq.FaQuestion}</h6></Accordion.Header>
        <Accordion.Body>
        {faq.answer}
        </Accordion.Body>
      </Accordion.Item>
      

    ))}
     </Accordion>
      
     

   



</Container>
    </div>
  )
}

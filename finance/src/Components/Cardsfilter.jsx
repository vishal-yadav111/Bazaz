import React from "react";
import { Card, Form, Accordion, Container ,ProgressBar} from "react-bootstrap";
import "./Doctorcard.css";

export const Cardsfilter = () => {
  const specialities = [
    "General Physician",
    "Dentist",
    "Dermatologist",
    "Paediatrician",
    "Cardiologist",
    "Neurologist",
    "Orthopedic",
    "Psychiatrist",
    "ENT Specialist",
    "Ophthalmologist",
    "Physiotherapist",
    "Urologist",
    "Cardiologist",
    "Neurologist",
    "Orthopedic",
    "Psychiatrist",
    "ENT Specialist",
    "Ophthalmologist",
    "Physiotherapist",
    "Urologist",
  ];
  const modeofcommunication = [
    "video call",
    "audio call",
    "in clinic"

  ];
  const language = [
    "hindi",
    "english",
    "marathi",
     "tamil",
    "telgu",
    "gujrati",
     "bangali",
     "punjabui",
    "kanndi",
    

  ];


   const gender = [
    
    "Male",
    "Femay",
     " any",
   

  ];

  
   const availibility = [
    
    "Available now",
    "Available today",
     "Available tomorrow",
    

  ];


  const fees=[
    "0-200",
    "200-500",
    "500-1000",
    "1000 & above"
  ];
  const symptom=[
    "Fever","Achne","Anxiety","hair related iissue","diabitese","joint pain","Tooth Pain","COVID-19"
  ];
  const experience=[
    "0-5 years ","6-10 years","10+ years","Any"



  ];
  return (
    
//sort by
      <div  >



        
      <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>Sort By</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {availibility.map((availibility, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={availibility}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>
        <br></br>
         <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}
            >
  

              <h4>Filters</h4>
              <span style={{ color: 'blue' }}>
                Clear all
              </span>
            </div>

        <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
           
            <Accordion.Header>Specialities</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >

                  <Form className="p-2" >
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                  {specialities.map((expert, index) => (

                    <h6>
                      <Form.Check
                        key={index}
                        type="checkbox"
                        name="speciality"
                        label={expert}
                      /></h6>

                  ))}
                </div>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr></hr>


        <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >

            <Accordion.Header>Mode Of Consultation</Accordion.Header>
            <Accordion.Body >
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {modeofcommunication.map((moc, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={moc}
                      />




                    </h6>











                  ))}




                </div>





              </Container>
            </Accordion.Body>





          </Accordion.Item>
        </Accordion>

<hr></hr>






<Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >

            <Accordion.Header>Distance</Accordion.Header>
            <Accordion.Body >
              <Container>
                {/* scrollable wrapper */}
                <div>
                  
<p>Select Kilometer Range</p>
<p>50 Kms</p>
 <ProgressBar now={30}  variant="secondary"/>



                  











                 



                </div>





              </Container>
            </Accordion.Body>

          </Accordion.Item>
        </Accordion>


<hr></hr>










        <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >

            <Accordion.Header>language</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "150px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {language.map((language, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="checkbox"
                        name="speciality"
                        label={language}
                      />




                    </h6>

                  ))}




                </div>





              </Container>
            </Accordion.Body>





          </Accordion.Item>
        </Accordion>
<hr></hr>

      <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {gender.map((gender, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={gender}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>

        
      <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>Availibility</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {availibility.map((availibility, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={availibility}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>
<hr></hr>
        
      <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>Fees</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {fees.map((fees, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={fees}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>


            <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>Experience</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {experience.map((experience, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="radio"
                        name="speciality"
                        label={experience}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>
<hr></hr>

         <Accordion defaultActiveKey="0" className="unstyled-acc">
          <Accordion.Item eventKey="0" >
<Accordion.Header>symptom</Accordion.Header>
            <Accordion.Body style={{ background: 'none', border: 'none' }}>
              <Container>
                {/* scrollable wrapper */}
                <div
                  className="scrollable-list"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {symptom.map((symptom, index) => (
                    <h6>
                      <Form.Check
                        key={index}
                        type="checkbox"
                        name="speciality"
                        label={symptom}
                      />
                      </h6>))}

</div></Container>
            </Accordion.Body></Accordion.Item>
        </Accordion>
        </div>
      
  );
};

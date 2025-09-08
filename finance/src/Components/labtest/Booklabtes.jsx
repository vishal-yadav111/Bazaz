import React from 'react'
import { Container } from 'react-bootstrap'

import Accordion from 'react-bootstrap/Accordion';

export const Booklabtes = () => {
    return (
        <div>
            <Container >
                <h2 style={{paddingTop:"20px",paddingBottom:"20px"}}>Blood Test at Home - Bajaj Finserv Health Lab Tests</h2>

                
                <p>Bajaj Finserv Health brings healthcare right to your doorstep with its convenient and reliable lab test services. Now, you can schedule blood tests at home, ensuring accuracy and convenience without the need to step out. Bajaj Finserv Health offers an easy-to-use online booking system for appointments, along with a home sample collection service, allowing you to get tested in the comfort of your home. With access to trusted labs and experienced professionals, you can expect precise results and affordable pricing. Bajaj Finserv Health makes healthcare more accessible, ensuring timely diagnostic services at your convenience.</p>
                <h2 style={{paddingTop:"20px",paddingBottom:"20px"}}>Overview of Lab Services</h2>
                <p>Bajaj Finserv Health's blood test services are designed to offer patients both convenience and reliable diagnostics. With a home sample collection option, you no longer need to visit a lab to get tested. The process is hassle-free with a user-friendly app that allows you to book tests easily and track your results. Whether you're looking for routine tests or more specialized diagnostics, Bajaj Finserv Health guarantees quality, precision, and fast delivery of test results from accredited labs.<br></br><br></br>

With a wide network of partner labs and a commitment to maintaining the highest standards of testing, Bajaj Finserv Health is a trusted name for diagnostic services.</p>
<h2>Popular Lab Tests</h2>
<p>Bajaj Finserv Health offers a comprehensive range of essential lab tests, including the following:</p>
<ul>
    <li> <strong>Complete Blood Count (CBC):</strong> Provides important insights into overall health by evaluating various blood components.</li>
    <li> <strong>Liver Function Test (LFT):</strong> Helps assess liver health and detect potential liver issues.</li>
    <li> <strong>Kidney Function Test (KFT):</strong> Monitors kidney performance and assists in diagnosing kidney-related health conditions.</li>
    <li> <strong>Thyroid Profile: </strong>Assesses thyroid hormone levels to identify thyroid disorders.</li>
    <li><strong>Lipid Profile:</strong> Evaluates cholesterol and triglyceride levels, contributing to heart health monitoring.</li>
    <li> <strong>HbA1c:</strong> Measures long-term blood sugar levels, aiding in the diagnosis and management of diabetes.</li>
   
</ul>
<p>These tests are vital for early detection and prevention of various health conditions. Prioritize your health with regular check-ups to stay ahead of any potential concerns.</p>
<h2>Affordable Health Checkup Packages</h2>
<p>Bajaj Finserv Health offers competitive pricing for blood tests, with a variety of options that suit different budgets. For basic tests, prices start at competitive rates, and comprehensive panels are also available at affordable prices.</p>

<p>Bajaj Finserv Health offers a variety of budget-friendly health checkup packages to suit your health needs:</p>
<ul>
    <li><strong>Bajaj Basic Health Checkup:</strong>This package includes essential tests like blood sugar and kidney function tests, priced affordably.</li>
    <li><strong>Bajaj Regular Health Plan:</strong> A comprehensive health package that includes up to 55 tests to assess vital organs like the kidneys, liver, and heart, offered at a reasonable price.</li>
    <li><strong>Bajaj Premium Health Checkup:</strong> This plan covers key tests such as KFT, LFT, and thyroid profile, providing a thorough health assessment.</li>
    <li><strong>Bajaj Advanced Health Plan:</strong> A premium package that includes specialized assessments, including Vitamin D and Rheumatoid Factor, for a complete overview of your health</li>
   
</ul>
<h2>Book a Blood Test at Home with Bajaj Finserv Health</h2>

<p>Booking a blood test with Bajaj Finserv Health is simple and convenient. Here's how to get started:</p>
<ol>
    <li> <strong>Visit Our Website or Download the App:</strong> Start by browsing the Bajaj Finserv Health website or download the mobile app.</li>
    <li> <strong>Explore Test Options:</strong> Browse through the extensive list of available tests tailored to your health needs.</li>
    <li> <strong>Select Your Test:</strong> Choose the test that suits your requirements from our diverse selection.</li>
    <li><strong>Pick a Convenient Time:</strong>  Schedule a home sample collection at a time that works best for you.</li>
    <li> <strong>Home Collection:</strong>  A trained technician will come to your home to collect your sample.</li>
    <li> <strong>Receive Results:</strong>  Get your test results delivered directly to your mobile or email, ensuring a hassle-free and timely experience.</li>
</ol>
            </Container>
            <div style={{padding:'20px 0'}}>
<Container >
<h2>FAQ</h2>
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can I test my blood at home ?</Accordion.Header>
        <Accordion.Body>
        You can book a blood test online. We have a partnership with accredited labs in India, and you can select 'home sample collection' when scheduling the test. A healthcare professional will come to your home to collect the blood sample, and you will receive accurate results from the lab within 48 hours.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Should you visit a diagnostic center or book a lab test online ?</Accordion.Header>
        <Accordion.Body>
         Online lab test booking is limited to blood, nose, and throat swabs and urine tests, while other diagnostic tests will always require you to come in physically (X-ray, CT scans, etc.)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What should you not do before a blood test ?</Accordion.Header>
        <Accordion.Body>
         It is advisable not to drink coffee, eat food or take any medicines 12 hours before a fasting blood test. However, drinking water is acceptable to most physicians.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</Container>
</div>


        </div>
    )
}

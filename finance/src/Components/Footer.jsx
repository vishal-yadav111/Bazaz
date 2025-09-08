// import React from 'react'

// export const Footer = () => {
//   return (
//     <div className='' style={{backgroundColor:" rgba(77, 95, 233, 1)",paddingLeft:'100px',paddingRight:'100px'}}>

// <div class="container " >
//   <div class="row">
//     <div class="col" style={{color:'white'}}>
//         <div style={{padding:'5px'}}>
//         <h4>Bajaj Finserv Health Ltd.</h4>
//         <h6>About us</h6>
// <h6>Customer service</h6>
// <h6>Contact us</h6>

// <h6>Become a partner</h6>
// <h6>Privacy policy</h6>
// <h6>Terms & Conditions</h6>
// <h6>Financial report</h6>
// </div>
// <div style={{padding:'5px'}}>
// <h4 className='pt-3'>Health Library</h4>
// <h6>Health Articles</h6>
// </div>


// <div style={{padding:'5px'}}>
//     <h4 className='pt-3'>Careers</h4>
//     <h6>Join us</h6>
    
// </div>

   

// </div>

//     <div class="col" style={{color:'white'}}>

//         <div style={{padding:'5px'}}>
//         <h4>For Doctors</h4>
//         <h6>Practice Management Platform</h6>
// <h6>Specialized Dental EMR</h6>
// <h6>Google My Business for Doctors</h6>


// </div>
// <div style={{padding:'5px'}}>
// <h4 className='pt-3'>Find Doctors</h4>
// <h6>Online consultation</h6>
// <h6>In-Clinic consultation</h6>
// </div>


// <div style={{padding:'5px'}}>
//     <h4 className='pt-4'>Find Hospitals</h4>
//     <h6>Hospitals in india</h6>
//     <h6>Nearby Hospitals</h6>
//     <h6>Network Hospitals</h6>
    
// </div>
//     </div>
//     <div class="col" style={{color:'white'}}>

//         <div style={{padding:'5px'}}>
//         <h4>Lab Booking</h4>
//         <h6>Book Lab Tests</h6>
// <h6>Full Body Checkups</h6>
// <h6>Radiology</h6>

// <h6>Organ Function Tests</h6>
// <h6>Lifestyle & Habits Tests</h6>
// <h6>Express Booking</h6>

// </div>
// <div style={{padding:'5px'}}>
// <h4 className='pt-3'>Index</h4>
// <h6>Lab Test Index</h6>
// <h6>Cornerstone Index</h6>
// <h6>Hospitals City Index</h6>
// <h6>Hospitals Specialty Index</h6>
// <h6>Hospitals Profile Index</h6>
// <h6>Diagnostic Center Index</h6>
// <h6>Find Labs Near You</h6>
// <h6>Diagnostic All India Index</h6>
// </div>





//     </div>



//     <div class="col" style={{color:'white'}}>

//         <div style={{padding:'5px'}}>
//         <h4>CIN</h4>
//         <h6>U85320PN2019PLC185286</h6>

// </div>
// <div style={{padding:'5px'}}>
// <h4 className='pt-3'>Registered Office</h4>
// <h6>Bajaj Auto Limited Complex, Mumbai - Pune Road, Akurdi, Pune - 411 035</h6>
// </div>


// <div style={{padding:'5px'}}>
//     <h4 className='pt-4'>Corporate Address</h4>
//     <h6>Trion IT Park,
// 4th, 5th and 6th floors,
// Pune - Ahmednagar Road,
// Wadgaon Sheri,
// Pune - 411014</h6>
    
// </div>
//     </div>
//   </div>
//  </div>
  


//     </div>
//   )
// }



import React from 'react'
import './Navigationb.css'

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(0,93,172)",
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div className="container py-4">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 text-white">
            <div className="p-2">
              <h4 className='footer-heading'>Bajaj Finserv Health Ltd.</h4>
              <h6>About us</h6>
              <h6>Customer service</h6>
              <h6>Contact us</h6>
              <h6>Become a partner</h6>
              <h6>Privacy policy</h6>
              <h6>Terms & Conditions</h6>
              <h6>Financial report</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-3 footer-heading">Health Library</h4>
              <h6>Health Articles</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-3 footer-heading">Careers</h4>
              <h6>Join us</h6>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 text-white">
            <div className="p-2">
              <h4 className=" footer-heading">For Doctors</h4>
              <h6>Practice Management Platform</h6>
              <h6>Specialized Dental EMR</h6>
              <h6>Google My Business for Doctors</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-3 footer-heading" >Find Doctors</h4>
              <h6>Online consultation</h6>
              <h6>In-Clinic consultation</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-4 footer-heading">Find Hospitals</h4>
              <h6>Hospitals in India</h6>
              <h6>Nearby Hospitals</h6>
              <h6>Network Hospitals</h6>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 text-white">
            <div className="p-2">
              <h4 className='footer-heading'>Lab Booking</h4>
              <h6>Book Lab Tests</h6>
              <h6>Full Body Checkups</h6>
              <h6>Radiology</h6>
              <h6>Organ Function Tests</h6>
              <h6>Lifestyle & Habits Tests</h6>
              <h6>Express Booking</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-3 footer-heading">Index</h4>
              <h6>Lab Test Index</h6>
              <h6>Cornerstone Index</h6>
              <h6>Hospitals City Index</h6>
              <h6>Hospitals Specialty Index</h6>
              <h6>Hospitals Profile Index</h6>
              <h6>Diagnostic Center Index</h6>
              <h6>Find Labs Near You</h6>
              <h6>Diagnostic All India Index</h6>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 text-white">
            <div className="p-2">
              <h4 className='footer-heading'>CIN</h4>
              <h6>U85320PN2019PLC185286</h6>
            </div>
            <div className="p-2">
              <h4 className="pt-3 footer-heading">Registered Office</h4>
              <h6>
                Bajaj Auto Limited Complex, Mumbai - Pune Road, Akurdi, Pune - 411 035
              </h6>
            </div>
            <div className="p-2">
              <h4 className="pt-4 footer-heading">Corporate Address</h4>
              <h6>
                Trion IT Park, 4th, 5th and 6th floors, Pune - Ahmednagar Road,
                Wadgaon Sheri, Pune - 411014
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

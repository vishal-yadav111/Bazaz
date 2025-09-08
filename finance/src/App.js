   
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import './App.css';
import { Navigationb } from './Components/Navigationb';
import { Footer } from './Components/Footer';

import { Nav2 } from './Components/Nav2';
import { Home1 } from './Components/Home1';
import { Labservice } from './Components/Labservice';
import { Featurecard } from './Components/Featurecard';
import Consult from './Components/Consult';
import { Symptoms } from './Components/Symptoms';
import { Hospital } from './Components/Hospital';
import { Labtest } from './Components/Labtest';
import { Clinic } from './Components/Clinic';
import { Medicard } from './Components/Medicard';
import { Dealforyou } from './Components/Dealforyou';
import { Healthcorner } from './Components/Healthcorner';
import { Faq } from './Components/Faq';
import { Heathvideo } from './Components/Heathvideo';
import { Healthblog } from './Components/Healthblog';
import { Download } from './Components/Download';
import { Wellnessstore } from './Components/Wellnessstore';

import { Bookappointments } from './Components/Bookappointments';
import { Tophospitaldoctor } from './Components/Tophospitaldoctor';
import { Booklabtest } from './Components/labtest/Booklabtest';
import { Toplabservice } from './Components/labtest/Toplabservice';
import { Testpackage } from './Components/labtest/Testpackage';
import { Alltest } from './Components/labtest/Alltest';
import { Labsnear } from './Components/labtest/Labsnear';
import { Helpbooking } from './Components/labtest/Helpbooking';
import { Labpartner } from './Components/labtest/Labpartner';
import { Booklabtes } from './Components/labtest/Booklabtes';
import { Radiology } from './Components/labtest/Radiology';
import { Healthhome } from './Components/Healthlibrary/Healthhome';
import { Healthvideo } from './Components/Healthlibrary/Healthvideo';
import { Medicards } from './Components/Healthlibrary/Medicards';
import { Loyalitymed } from './Components/Healthlibrary/Loyalitymed';
import { Availmedical } from './Components/Healthlibrary/Availmedical';
import { Faqs } from './Components/Healthlibrary/Faqs';
import { Iframeuse } from './Components/Healthlibrary/Iframeuse';
import { Corporatebenifit } from './Components/Corporate/Corporatebenifit';
import { Chart } from './Components/Corporate/Chart';
import { Chart2 } from './Components/Corporate/Chart2';
import { Chart3 } from './Components/Corporate/Chart3';



const router=createBrowserRouter(
  [
    {
      path:'/',
      element:(
        <>
         <Navigationb/>
      <Nav2/>
       <Home1/>
     <Labservice/>
     <Featurecard/>
     <Consult/>
      <Symptoms />
      <Wellnessstore />
      <Labtest />
      <Hospital />
      <Clinic />

      <Medicard />
      <Dealforyou />
      <Healthcorner />
     
     <Faq />
     <Heathvideo />
     <Healthblog />
     
     <Download />
     <Footer/>
</>
      )
    },
    {
      path:'/appointment',
      element:(
        <>
         <Navigationb/>
      <Nav2/>
        <Bookappointments/>

   <Download />
       <Footer/>
</>
      )
    },
     {
      path:"/labtest",
      element:(
        <>
         <Navigationb/>
      <Nav2/>
        <Booklabtest />
    <Toplabservice />





    <Testpackage />
     <Labsnear />
    <Alltest/>
    <Helpbooking />
    <Labpartner />
    <Booklabtes/> 
<Radiology />
{/* <Healthhome/> */}
 <Healthblog />
   <Download />
       <Footer/>
</>
      )
    }


    ,
     {
      path:"/healthlibrary",
      element:(
        <>
         <Navigationb/>
      <Nav2/>
     
<Healthhome/>
 <Healthblog />
 <Healthvideo />
   <Download />
       <Footer/>
</>
      )
    }
        ,
     {
      path:"/medicards",
      element:(
        <>
         <Navigationb/>
          <Nav2/>
  <Medicards />
  <Loyalitymed/>
  <Availmedical />
  <Faqs/>
 
   <Chart2 />
   <Chart3 />
       <Footer/>
</>
      )
    },
    {
      path:"/Corporate benifit",
      element:(
        <>
         <Navigationb/>
          <Nav2/>
          
        <Corporatebenifit />
        
          <Footer/>
          <Chart />
         
          
        </>
      )
    }
  ]
);


function App() {
  return (
     <div>
    
       <div><RouterProvider router={router}/></div>
   <div >
     
    

    
 
    </div>
    </div>
  );
}

export default App;

import React from 'react'
import { Container } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa";
import './loyalitymed.css';

export const Loyalitymed = () => {
  const hospitals = [
    {
      name: "Wellness Hospital",
      logo: "https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Wellness_Hospital_Logo_3b667ba6c1.png",
      link: "/medicards/wellness-hospital"
    },
    {
      name: "Premier Hospital",
      logo: "https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Premier_Hospital_Logo_21a895b3e8.png",
      link: "/medicards/premier-hospital"
    },
    {
      name: "BSG Hospital",
      logo: "https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/bgs_logo_1_d94286c2cc.png",
      link: "/medicards/bgs-hospital"
    },
    {
      name: "Ruby Hall Clinic",
      logo: "https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Ruby_Hall_Clinic_Logo_479e6bfcbd_1_2bc4492fff.png",
      link: "/medicards/ruby-hall-clinic"
    }
  ];

  return (
    <div style={{marginTop:'40px',marginBottom:'40px'}}>
      <Container>
        <h2>Loyalty Medicards in Pune</h2>
        <p>Nearby hospitals offering Medicards</p>

        <div className="hospitals-grid">
          {hospitals.map((hospital, index) => (
            <a key={index} href={hospital.link} className="card1">
              <div className="card-body1">
                <img src={hospital.logo} alt={hospital.name} />
                <h4>{hospital.name}</h4>
                <FaChevronRight className="arrow-icon" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}

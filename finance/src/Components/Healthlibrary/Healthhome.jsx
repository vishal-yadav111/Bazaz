import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

export const Healthhome = () => {
  const slides = [
    {
      id: 1,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/07/July-Header-15-1.webp",
      category: "General Health",
      title: "Top 7 Benefits of Ashwagandha Tablet: What You Need to Know",
   
    },
    {
      id: 2,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/06/TAVR-Header.jpg",
      category: "Heart Health",
      title:
        "Revolutionizing Access to TAVR: Bajaj Finance Transforming Cardiac Surgeries with Easy EMIs",
     
    },
    {
      id: 3,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-10-2.webp",
      category: "Woman Health",
      title: "Vaginal Yeast Infection: Causes, Early Symptoms and Treatment",
     
    },
    {
      id: 4,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Header-Jun-13-2.webp",
      category: "Health",
      title: "10 Home Remedies for Burning Urine: Get Relief Naturally",

    },
    {
      id: 5,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-7.webp",
      category: "Wellness",
      title: "Benefits of Hyaluronic Acid: Know How to Use it Effectively",
   
    },
    {
      id: 6,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-12-1.webp",
      category: "Fitness",
      title: "Karyotype Test: Purpose, Procedure, and Results",
 
    },
    {
      id: 7,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-7.webp",
      category: "Lifestyle",
      title: "Karyotype Test: Purpose, Procedure, and Results",

    },
    {
      id: 8,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-6.webp",
      category: "Daily Health",
      title: "Homeopathic Medicine for Fatty Liver: What is it?",
    
    },
    {
      id: 9,
      img: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2023/04/Jun-Header-8.webp",
      category: "Nutrition",
      title: "Anthrax Disease: A Guide on its Causes, Symptoms and More",

    },
  ];

  return (
    <Container >
      <div>
        <h2>Bajaj Finserv Health Library</h2>
        <p>All your helpful content at one place</p>
        <br />
        <h5>Today's Read</h5>

        <Carousel
          data-bs-theme="dark"
          style={{
            maxWidth: "100%",
            margin: "20px auto",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {slides.map((slide) => (
            <Carousel.Item key={slide.id} style={{ height: "400px" }}>
              <img
                className="d-block w-100 h-100"
                src={slide.img}
                alt={slide.title}
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption
                style={{
                  bottom: "0",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                 
                }}
              >
                <div style={{color:'white'}}>
                {slide.category && <strong>{slide.category}</strong>}</div>
                <h5 style={{color:'white'}}>{slide.title}</h5>
                <p style={{padding:'0',margin:'0',color:'white'}}>Bazaz finserv Health</p>
                <a style={{color:'#d99c13'}}>Read more</a>
                
              
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

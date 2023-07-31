import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './YourCarouselStyles.css';
import '../../node_modules/react-slick/dist/react-slick'

const YourCarousel = ({ data }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots", // Add custom class for dots container
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
      <div className="custom-dot"></div> // Custom dot style, modify as needed
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} 
          
          >
            <div className="text-container"
            style={{
              width:"80%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              margin:"0 150px"

            }}
            >
            <p 
              className='text'
              style={{
                position:"absolute",
                zIndex:"5",
                color:"white",
                textAlign:"center",
                textJustify:"inter-word",
                fontSize:"2rem",
                fontWeight:"300",
                top:"30px",
              }}
              >{item.overview}</p>
            </div>
             
            <img src={item.path} alt={item.title} />
               {/* <p >{item.title}</p> */}
            <div >
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YourCarousel;

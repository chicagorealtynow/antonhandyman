import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Manually import each image
import img1 from "/fullscreen6.jpg";
import img2 from "/fullscreen7.jpg";
import img3 from "/fullscreen9.jpg";
import img4 from "/fullscreen10.jpg";
import img5 from "/fullscreen11.jpg";
import img6 from "/fullscreen12.jpg";
import img7 from "/fullscreen13.jpg";
import img8 from "/profile-legacy.jpg";
import img9 from "/profile-legacy1.jpg";
import img10 from "/profile-legacy3.jpg";
import img11 from "/profile-legacy4.jpg";
import img12 from "/profile-legacy5.jpg";
import img13 from "/profile-legacy6.jpg";
 

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13 
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Gallery
      </h2>
      <Slider {...settings}>
        {images.map((image, index) =>
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        )}
      </Slider>
    </motion.div>
  );
};

export default Gallery;

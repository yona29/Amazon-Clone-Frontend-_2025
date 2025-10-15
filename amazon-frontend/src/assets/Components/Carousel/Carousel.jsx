import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from "./img/data.jsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import Classes from "./Carousel.module.css";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false} // hide small previews
        showArrows={true} // left/right arrows
        showStatus={false} // hide "1/5" status text
        interval={3000} // 3s per slide
        stopOnHover={true} // pause on hover
      >
        {img.map((imageItemLink , index) =>(
            <div key={index}>
            <img key={imageItemLink} src={imageItemLink} alt={'slide-${index}'}/>

            </div>
        ))}
      </Carousel>
      <div className={Classes.hero__img}></div>
    </div>

  );
}

export default CarouselEffect;

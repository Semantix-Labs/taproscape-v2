import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel: React.FC = () => {
  // Ref for the slider component
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      img: "/CarouselHome/1.png",
      title: "Lorem Ipsum Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/CarouselHome/2.png",
      title: "Lorem Ipsum Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/CarouselHome/3.png",
      title: "Lorem Ipsum Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/CarouselHome/4.png",
      title: "Lorem Ipsum Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/CarouselHome/1.png",
      title: "Lorem Ipsum Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className="flex justify-center text-4xl uppercase">
        <h2 className="pt-1 text-oxfordBlue">best</h2>
        <div className="image-container relative">
          <img src="/textbg.png" alt="" />
          <div className="text-overlay absolute top-0 pl-5 pt-1 justify-center">
            <p style={{fontFamily:'bagea'}} className="top-0 pl-2 text-white bottom-5">places</p>
          </div>
        </div>
        <h2 className="pt-1 pl-2 text-oxfordBlue">to Visit</h2>
      </div>
      {/* Custom Previous Arrow */}
      <SamplePrevArrow onClick={() => sliderRef.current?.slickPrev()} />
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.img}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
              />
               <div className={styles.slideContent}>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <button className={styles.learnMore}>Learn more</button>
            </div>
            </div>
           
          </div>
        ))}
      </Slider>
      {/* Custom Next Arrow */}
      <SampleNextArrow onClick={() => sliderRef.current?.slickNext()} />
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow}`} onClick={onClick}>
      <img
        src="/CarouselHome/left.png"
        alt="Next"
        className={styles.arrowImage}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={`${styles.prevArrow}`} onClick={onClick}>
      <img
        src="/CarouselHome/right.png"
        alt="Previous"
        className={styles.arrowImage}
      />
    </div>
  );
}

export default Carousel;

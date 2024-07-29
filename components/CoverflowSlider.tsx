"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./App.module.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const App: React.FC = () => {
  const slidesData = [
    {
      img: "/couple.jpg",
      title: "Sigiriya",
      description: "Ancient rock fortress with stunning panoramic views.",
      links: "/destinations/destination5",
    },
    {
      img: "/kandy.jpg",
      title: "Kandy",
      description: "Home to the sacred Temple of the Tooth.",
      links: "/destinations/destination1",
    },
    {
      img: "/ella.jpg",
      title: "Ella",
      description: "Charming town with beautiful tea plantations and hikes.",
      links: "/destinations/destination2",
    },
    {
      img: "/glle.jpg",
      title: "Galle",
      description: "Historic coastal city with a Dutch colonial fort.",
      links: "/destinations/destination4",
    },
    {
      img: "/elephant.jpg",
      title: "Yala National Park",
      description: "Renowned for wildlife safaris and leopard sightings.",
      links: "/destinations/destination6",
    },
    {
      img: "/nuwara.jpg",
      title: "Nuwara Eliya",
      description: "Cool climate town surrounded by lush tea estates.",
      links: "/destinations/destination3",
    },
    {
      img: "/kandy.jpg",
      title: "Kandy",
      description: "Home to the sacred Temple of the Tooth.",
      links: "/destinations/destination1",
    },
  ];

  // State to store the swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );

  useEffect(() => {
    if (!swiperInstance) return;

    const handleNext = () => {
      swiperInstance.slideNext();
    };

    const handlePrev = () => {
      swiperInstance.slidePrev();
    };

    const nextButton = document.querySelector(`.${styles.swiperButtonNext}`);
    const prevButton = document.querySelector(`.${styles.swiperButtonPrev}`);

    if (nextButton) {
      nextButton.addEventListener("click", handleNext);
    }

    if (prevButton) {
      prevButton.addEventListener("click", handlePrev);
    }

    return () => {
      if (nextButton) {
        nextButton.removeEventListener("click", handleNext);
      }
      if (prevButton) {
        prevButton.removeEventListener("click", handlePrev);
      }
    };
  }, [swiperInstance]); // Depend on swiperInstance to re-bind events when it changes

  return (
    <div className="px-5 lg:px-14 2xl:px-40">
      <div className="flex justify-center text-2xl md:text-2xl lg:text-3xl xl:text-4xl ">
        <h2 className="pt-1 text-oxfordBlue">Best </h2>
        <div className="image-container relative">
          <img className="w-28 md:w-full" src="/textbg.png" alt="" />
          <div className="text-overlay absolute top-0 pl-5 pt-1 justify-center">
            <p
              style={{ fontFamily: "bagea" }}
              className="top-0 pl-2 text-white md:text-2xl text-xl uppercase lg:text-3xl xl:text-4xl bottom-5"
            >
              place
            </p>
          </div>
        </div>
        <h2 className="pt-1 text-oxfordBlue">To Visit </h2>
      </div>

      <div
        className="swiper-containe lg:px-16 xl:px-[108px] 2xl:px-[205px]"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Swiper
          onSwiper={setSwiperInstance} // Get Swiper instance
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0, // Customize rotation angle
            stretch: 0, // Customize space between slides
            depth: 100, // Customize depth offset
            modifier: 2.5, // Customize effect multiplier
            slideShadows: false, // Disable slide shadows for a cleaner look
          }}
          pagination={{ clickable: true, el: null }} // Disable default pagination dots
          navigation={false} // Disable default navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`${styles["swiper-slide"]} bg-gradient-to-t from-transparent to-black`}
            >
              <div className={`${styles.image} `}>
                <Image
                  className="brightness-50 w-1/2 md:w-full h-full object-cover"
                  src={slide.img}
                  alt={slide.title}
                  width={500} // Set the width of the image
                  height={300} // Set the height of the image
                />
              </div>
              <div className={styles.content}>
                <h3
                  
                  className="text-white text-[10px] md:text-[18px] sd z-20"
                >
                  {slide.title}
                </h3>
                <p className="text-white text-[8px] md:text-[18px]">{slide.description}</p>
                <Link
                  className="text-white text-[8px] md:text-[18px]"
                  href={slide.links}
                >
                  Learn more
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles.swiperButtonNext} hidden md:inline`}>
          <span>
            <svg
              width="42"
              height="63"
              viewBox="0 0 42 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1535 58.9934C12.893 59.3779 12.5674 59.5702 12.2093 59.5702C11.8511 59.5702 11.5256 59.3779 11.2651 58.9934C10.7442 58.2244 10.7442 56.9748 11.2651 56.2058L27.8697 31.6942L11.2651 7.18258C10.7442 6.41359 10.7442 5.16397 11.2651 4.39498C11.786 3.62599 12.6325 3.62599 13.1535 4.39498L30.7023 30.3004C31.2232 31.0694 31.2232 32.319 30.7023 33.088L13.1535 58.9934Z"
                fill="#082B49"
              />
            </svg>
          </span>
        </div>
        <div className={styles.swiperButtonPrev}>
          <span>
            <svg
              width="42"
              height="63"
              viewBox="0 0 42 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8464 4.395C29.1069 4.0105 29.4325 3.81825 29.7906 3.81825C30.1487 3.81825 30.4743 4.0105 30.7348 4.395C31.2557 5.16399 31.2557 6.4136 30.7348 7.18259L14.1301 31.6942L30.7348 56.2058C31.2557 56.9748 31.2557 58.2245 30.7348 58.9934C30.2139 59.7624 29.3673 59.7624 28.8464 58.9934L11.2976 33.088C10.7766 32.319 10.7766 31.0694 11.2976 30.3004L28.8464 4.395Z"
                fill="#082B49"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;

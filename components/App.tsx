import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from './App.module.css';

const slides = [
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-3.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-5.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-6.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-7.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-8.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    imgSrc: "https://swiperjs.com/demos/images/nature-9.jpg",
    title: "LOREM IPSUM EVENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
         
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
            <div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.sliderControler}>
          <div className={`swiper-button-prev ${styles.sliderArrow}`}>
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className={`swiper-button-next ${styles.sliderArrow}`}>
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className={`swiper-pagination ${styles.swiperPagination}`}></div>
        </div>
      </Swiper>
    </div>
  );
};

export default App;

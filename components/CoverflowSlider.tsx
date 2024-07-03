import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import CSS module
import styles from './App.module.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const App: React.FC = () => {
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

  return (
    <div id="app" className={styles.app}>
      <div style={{ overflow: "hidden" }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={5}
          initialSlide={5}
          coverflowEffect={{
              rotate: 30,      // Customize rotation angle
              stretch:-10,     // Customize space between slides
              depth: 200,      // Customize depth offset
              modifier: 2,     // Customize effect multiplier
              slideShadows: false, // Disable slide shadows for a cleaner look
             
            }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles['swiper-slide']}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className={styles.content}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <a href="#">Learn more</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;

"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import TripCard from "../components/TripCard";
import Carousel from "@/components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import { FloatingLabel } from "flowbite-react";
import styles from "../styles/indexstyle.module.css";
import CoverflowSlider from "@/components/CoverflowSlider";

export default function Home() {
  return (
    <div className="section min-h-screen">
      <Navbar />

      <section className="flex ">
        <div className="image-container  relative">
          <img src="/home.png" className=" w-screen brightness-50" alt="" />
          <div className="text-overlay absolute px-5 lg:px-20 2xl:px-40 left-4 bottom-4 p-4">
            <h1
              style={{  fontFamily: "Bagea" }}
              className={`text-white max-w-2xl font-normal  text-sm  md:text-5xl  ${styles.title}`}
            >
              Explore the Essence of Sri Lanka with Taproscapes
            </h1>
            <p className="text-white max-w-xl font-lexendDeca text-[12px] md:text-3xl ">
              Luxury · Wellness · Sustainability
            </p>
            <button className="bg-none hover:bg-orange-700 text-[12px] p-1 text-white font-bold md:py-2 md:px-4 rounded-sm md:my-6 border-2">
              Discover Our Tours
            </button>
          </div>
        </div>
      </section>

      <section>
        <img
          className="w-screen mt-[-10px] md:mt-[-30px] z-20 relative"
          src="/home2.png"
          alt=""
        />
      </section>

      <section className=" pt-20  overflow-hidden px-5 lg:px-20 2xl:px-40   ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid col-span-1">
            <div className="flex text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">Lorem ipsum</h2>
              <div className="image-container relative">
                <img className="w-28 md:w-full" src="/textbg.png" alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 text-white bottom-5"
                  >
                    INTRO
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5">
              Embark on a journey of luxury, wellness, and cultural immersion
              with Taproscapes. Discover personalized itineraries and exclusive
              experiences.
            </p>
            <p className="mt-5 text-justify md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="grid col-span-1">
            <div  className="flex relative items-center justify-center  ">
              <TripCard
                mainImage="/home3.png"
                mainTitle="Trip To Ella"
                mainDate="14-29 June"
                mainAuthor="Robbin Jones"
                mainPeopleCount={24}
                overlayImage="/home3.png"
                overlayTitle="Trip to Galle"
                overlayCompletion={40}
              />
             <div className="absolute top-0 left-0 w-[370px] h-[382px">
             <img
                className="flex justify-center items-center 2xl:ml-72 md:ml-72 2xl:w-[370px] 2xl:h-[382px] md:w-[370px] md:h-[382px]"
                src="/e.png"
                alt=""
              />
             </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 absolute z-10 w-full">
        <img className="w-screen  z-20 relative" src="/bg.svg" alt="" />
      </section>

      <section className="mt-20 py-20 bg-isabelline">
        <Carousel />
      </section>

      <section className=" absolute z-10 w-full">
        <img
          className="w-screen mt-[-20px] z-20 relative"
          src="/bg.svg"
          alt=""
        />
      </section>

      <CoverflowSlider />

      <section>
        <WhyChooseUs />
      </section>

      <section style={{backgroundImage: 'url("/home6.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="mt-20  h-[265px] w-full">
        <div className="justify-center gap-8 py-24 flex">
          <label
            htmlFor="my-modal"
            className="search-button border-2 border-gray-600 bg-white w-1/2 h-8 md:h-auto py-1 px-2 md:py-4 md:px-6 rounded-lg "
          >
            <h2 className=" md:text-2xl"> Email</h2>
          </label>
          <button className=" border-2 border-gray-600 w-1/4 py-1 px-2 md:py-4 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg">SUBSCRIBE OUR NEWSLETTER</button>
        </div>
      </section>
    </div>
  );
}

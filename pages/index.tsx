"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import TripCard from "../components/TripCard";
import Carousel from "@/components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import { FloatingLabel } from "flowbite-react";

export default function Home() {
  return (
    <div className="section min-h-screen">
      <Navbar />

      <section className="flex ">
        <div className="image-container relative">
          <img src="/home.png" className=" w-screen brightness-50" alt="" />
          <div className="text-overlay absolute left-4 bottom-4 p-4">
            <h1
              style={{ lineHeight: "68px", fontFamily: "Bagea" }}
              className="text-white max-w-2xl font-normal text-5xl "
            >
              Explore the Essence of Sri Lanka with Taproscapes
            </h1>
            <p className="text-white max-w-xl font-lexendDeca text-3xl ">
              Luxury · Wellness · Sustainability
            </p>
            <button className="bg-none hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-sm my-6 border-2">
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

      <section className="px-5 pt-20 overflow-hidden lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid col-span-1">
            <div className="flex  text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">Lorem ipsum</h2>
              <div className="image-container relative">
                <img src="/textbg.png" alt="" />
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
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="grid col-span-1">
            <div className="flex items-center justify-center  bg-gray-100">
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
              <img
                className="absolute  pl-24 pb-28 "
                src="/cardbg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 absolute z-10 w-full">
        <img className="w-screen  z-20 relative" src="/bg.svg" alt="" />
      </section>

      <section className="mt-20 py-20 bg-desertSand">
        <Carousel />
      </section>

      <section className=" absolute z-10 w-full">
        <img
          className="w-screen mt-[-20px] z-20 relative"
          src="/bg.svg"
          alt=""
        />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section style={{backgroundImage: 'url("/home6.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="mt-20  h-[265px] w-full">
        <div className="justify-center gap-8 py-24 flex">
          <label
            htmlFor="my-modal"
            className="search-button border-2 border-gray-600 bg-white w-1/2 py-4 px-6 rounded-lg "
          >
            <h2 className="text-2xl"> Email</h2>
          </label>
          <button className=" border-2 border-gray-600 w-1/4 py-4 px-6 uppercase bg-tropicalRainForest text-white rounded-lg">SUBSCRIBE OUR NEWSLETTER</button>
        </div>
      </section>
    </div>
  );
}

import ExploreDestinations from "@/components/ExploreDestinations";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import React from "react";
import Footer from "@/components/Footer";

export default function Destination() {
  return (
    <div className="min-h-screen">
      <section>
        <Navbar />
      </section>

      <section className="flex ">
        <div className="image-container h-auto lg:h-[600px] 2xl:h-[700px] w-screen overflow-hidden relative">
          <img src="/hikkaduwa.jpg" className=" brightness-50" alt="" />
          <div className="text-overlay absolute lg:left-20 left-5 xl:left-40 bottom-5 md:bottom-20 p-4">
            <h1
              style={{ lineHeight: "68px", fontFamily: "bagea" }}
              className="text-white max-w-2xl font-normal text-3xl md:text-7xl "
            >
              Destinations
            </h1>
          </div>
          <div className="text-overlay hidden xl:inline absolute md:right-96 bottom-5 md:bottom-20 p-4">
            <img src="/Destination/h1.png" alt="" />
          </div>
          <div className="text-overlay absolute hidden lg:inline md:right-48 bottom-5 md:bottom-20 p-4">
            <img src="/Destination/h2.png" alt="" />
          </div>
          <div className="text-overlay hidden md:inline absolute md:right-0 bottom-5 md:bottom-20 p-4">
            <img src="/Destination/h3.png" alt="" />
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

      <section className="px-5 lg:px-20 2xl:px-40 ">
        <Overview />
      </section>

      <section className=" mt-28 absolute z-10 w-full">
        <img
          className="w-screen mt-[-1px] z-20 relative"
          src="/bg.svg"
          alt=""
        />
      </section>

      <section className="mt-28 relative">
        <ExploreDestinations />
        <section className="mt-[-10px] absolute z-10 w-full">
          <img className="w-screen  z-20 relative" src="/bg.svg" alt="" />
        </section>
      </section>

      <section className=" mb-96 md:my-36">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="my-auto">
            <div className="flex text-xl md:text-2xl mb-5 lg:text-3xl xl:text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">lorem </h2>
              <div className="image-container relative">
                <img
                  className="w-28 md:w-64 lg:w-[350px] h-[50px]"
                  src="/textbg.png"
                  alt=""
                />
                <div className="text-overlay absolute top-0   pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0  pl-2 flex text-white md:text-2xl lg:text-3xl xl:text-4xl bottom-5"
                  >
                    Tour packages
                  </p>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <button className="btn bg-sinopia px-5 rounded-sm text-white py-2 mt-5">
              Explore our tour packages
            </button>
          </div>
          <div className="relative object-cover ">
            <div className="absolute lg:w-[283px] lg:h-[358px] rounded-2xl lg:left-[148px] z-20 brightness-50 overflow-hidden">
              <img src="/Destination/t1.png" className="w-full h-full" alt="" />
            </div>
            <div className="absolute hidden lg:inline lg:w-[266px] lg:h-[310px] rounded-2xl lg:right-[10px] shadow-xl brightness-50 shadow-slate-600 mt-5 overflow-hidden">
              <img src="/Destination/t2.png" className="w-full h-full" alt="" />
            </div>
            <div className="absolute hidden lg:inline  lg:w-[266px] lg:h-[310px] rounded-2xl lg:left-[10px] mt-5 brightness-50 shadow-xl shadow-slate-600 overflow-hidden">
              <img
                src="/Destination/t3.png"
                className="w-full h-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: 'url("/train.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-20 h-[265px] w-full brightness-75"
      >
        <div className="flex justify-center gap-8 py-24">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 flex w-1/2 search-button cursor-pointer border-2 text-sm md:text-xl  xl:text-2xl border-gray-600 bg-white h-8 md:h-auto py-1 px-2 md:py-5 md:px-6 rounded-lg"
            required
          />
          <button className="border-2 border-gray-600 w-1/4 py-1 px-2 md:py-1 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg">
            SUBSCRIBE OUR NEWSLETTER
          </button>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

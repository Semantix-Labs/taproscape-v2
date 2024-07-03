import Navbar from '@/components/Navbar'
import StorySectionTour from '@/components/StorySectionTour'
import TravelPackages from '@/components/TravelPackages'
import React from 'react'

export default function TourPackages() {
  return (
    <div className='min-h-screen'>
   <section>
        <Navbar />
      </section>

      <section className="flex ">
        <div className="image-container relative">
          <img src="/home.png" className=" w-screen brightness-50" alt="" />
          <div className="text-overlay absolute md:left-40 bottom-5 md:bottom-20 p-4">
            <h1
              style={{ lineHeight: "68px", fontFamily: "bagea" }}
              className="text-white max-w-2xl font-normal text-3xl md:text-7xl "
            >
             Tour Packages
            </h1>
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

      <section>
        <StorySectionTour/>
      </section>

      <section className=" mt-28 absolute z-10 w-full">
        <img
          className="w-screen mt-[-1px] z-20 relative"
          src="/bg.svg"
          alt=""
        />
      </section>


      <section className=''>
        <TravelPackages/>
      </section>

      <section style={{backgroundImage: 'url("/home6.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="  md:h-[265px] overflow-hidden w-full">
        <div className="justify-center gap-8 py-16 lg:py-28 flex">
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
  )
}

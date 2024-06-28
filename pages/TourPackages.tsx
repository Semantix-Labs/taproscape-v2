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


      <section>
        <TravelPackages/>
      </section>

      
    </div>
  )
}

import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <section>
        <Navbar />
      </section>

      <section className="flex ">
        <div className="image-container relative">
          <img src="/home.png" className=" w-screen brightness-50" alt="" />
          <div className="text-overlay absolute left-40 bottom-20 p-4">
            <h1
              style={{ lineHeight: "68px", fontFamily: "bagea" }}
              className="text-white max-w-2xl font-normal  text-7xl "
            >
              About us
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

      <section className="px-5 pt-20 overflow-hidden lg:px-20">
       <StorySection />
      </section>
    </div>
  );
}

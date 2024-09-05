

import Link from "next/link";
import Navbar from "@/components/Navbar";
import TripCard from "../components/TripCard";
import Carousel from "@/components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import { FloatingLabel } from "flowbite-react";
import styles from "../styles/indexstyle.module.css";
import CoverflowSlider from "@/components/CoverflowSlider";
import App from "@/components/App";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="section min-h-screen">
      <Navbar />

      <section className="flex ">
        <div className="relative ">
          <video
            src="https://res.cloudinary.com/dbbndti4m/video/upload/v1720486983/utuejnocun8nnnrtm0oj.mp4"
            className="h-auto   relative w-screen"
            autoPlay
            loop
            muted
          ></video>
          <div className="text-overlay absolute px-5 lg:px-20 2xl:px-40 left-4 bottom-0 p-4">
            <h1
              style={{ fontFamily: "Bagea" }}
              className={`text-white max-w-2xl font-normal text-[12px] md:text-5xl ${styles.title}`}
            >
              Explore the Essence of Sri Lanka with Taproscapes
            </h1>
            <p className="text-white max-w-xl font-lexendDeca text-[12px] md:text-3xl">
              Luxury · Wellness · Sustainability
            </p>
            <Link href="/TourPackages#tour">
            <button className="bg-none hover:bg-orange-700 text-[12px] p-1 text-white font-bold md:py-2 md:px-4 rounded-sm md:my-6 border-2">
              Discover Our Tours
            </button>
            </Link>
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

      <section className=" pt-20   px-5 lg:px-20 2xl:px-40   ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="grid col-span-1 my-auto">
            <div className="flex text-2xl md:text-3xl lg:text-3xl xl:text-4xl ">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">Welcome to</h2>
              <div className="image-container relative">
                <img
                  className="w-52 h-12  md:h-16 xl:mt-[-20px] xl:w-[340px] md:w-48"
                  src="/textbg.png"
                  alt=""
                />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 xl:pl-4 uppercase text-white text-xl md:text-3xl lg:text-3xl xl:text-4xl bottom-5"
                  >
                    Taproscapes
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
              At Taproscapes, we specialize in crafting bespoke travel
              experiences in Sri Lanka. Our focus on wellness itineraries and
              sustainable travel ensures that each journey is enriching and
              memorable. Whether you are seeking relaxation, adventure, or
              cultural exploration, our expertly designed tours cater to your
              individual preferences and interests.
            </p>
          </div>
          <div className="grid col-span-1  xl:h-[500px] 2xl:h-[700px] justify-end relative">
            
            <Image
              className=" object-center lay justify-end  "
              src="/ayubowan.png"
              alt=""
              objectFit="cover"
              layout="fill"

            />
        
          </div>
        </div>
      </section>

      <section className="mt-20 absolute z-10 w-full">
        <img className="w-screen  z-20 relative" src="/bg.svg" alt="" />
      </section>

      <section className="mt-20 py-20 bg-isabelline">
        <CoverflowSlider />
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

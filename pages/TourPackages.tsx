import Navbar from '@/components/Navbar'
import StorySectionTour from '@/components/StorySectionTour'
import TravelPackages from '@/components/TravelPackages'
import React from 'react'
import Footer from "@/components/Footer";
import { useState } from 'react';
import axios from 'axios'; // Import axios

export default function TourPackages() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    try {
      // Use axios to post data
      const response = await axios.post('/api/subscribe', { email });

      if (response.status === 200) { // Check if the request was successful
        setStatus('Subscription successful!');
        setTimeout(() => setStatus(null), 3000);
        setEmail('');
      } else {
        setStatus(response.data.message || 'Failed to subscribe. Try again later.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle error returned from the server
        setStatus(error.response?.data.message || 'An error occurred. Please try again.');
      } else {
        // Handle unexpected errors
        setStatus('An error occurred. Please try again.');
      }
    }
  };
  return (
    <div className='min-h-screen'>
   <section>
        <Navbar />
      </section>

      <section className="flex ">
        <div className="image-container h-auto lg:h-[600px] 2xl:h-[700px] w-screen overflow-hidden relative">
          <img src="/pasikuda.jpg" className=" brightness-50" alt="" />
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


      <section id='tour' className='tour'>
        <TravelPackages/>
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
            <div className=" py-24">
          <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <label htmlFor="email" className="sr-only">
          Email Subscription
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-1 flex w-1/2 search-button cursor-pointer border-2 text-sm md:text-xl xl:text-2xl border-gray-600 bg-white h-8 md:h-auto py-1 px-2 md:py-5 md:px-6 rounded-lg"
          required
          aria-label="Email for Newsletter Subscription"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 border-gray-600 w-1/4 py-1 px-2 md:py-1 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg"
          aria-label="Subscribe to Newsletter"
        >
          SUBSCRIBE OUR NEWSLETTER
        </button>
      </form>
      {status && 
      <div className="flex justify-center "> <p className="mt-4 text-sm text-white flex justify-center bg-tropicalRainForest px-3 py-2 w-48 rounded-tl-lg rounded-b-lg item-center ">{status}</p>
      </div>
     }
          </div>
      </section>

      <section>
        <Footer/>
      </section>

      
    </div>
  )
}

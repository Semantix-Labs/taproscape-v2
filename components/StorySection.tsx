import React from "react";

const StorySection = () => {
  return (
    <section className="bg-white md:py-6">
      <div className=" flex flex-col h-[800px] gap-4 md:h-[552px] md:flex-row items-center">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex text-2xl md:text-2xl mb-5 lg:text-3xl xl:text-4xl ">
            {" "}
            <h2 className="pt-1 text-oxfordBlue">Get To Know Our</h2>
            <div className="image-container relative">
              <img className="w-28 md:w-full" src="/textbg.png" alt="" />
              <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                <p
                  style={{ fontFamily: "bagea" }}
                  className="top-0 pl-1 text-white md:text-2xl text-xl lg:text-3xl uppercase xl:text-4xl bottom-5"
                >
                  story
                </p>
              </div>
            </div>
          </div>
          <p className=" mb-4">
            Founded on a passion for showcasing Sri Lanka’s beauty and heritage,
            Taproscapes offers luxurious and sustainable travel experiences.
          </p>
          <p className=" mb-4">
            At Taproscapes, we create personalized itineraries that blend
            wellness, culture, and adventure. Our expert team ensures every
            journey is seamless and unforgettable, promoting eco-friendly
            practices and supporting local communities. Discover the hidden gems
            of Sri Lanka with us and create lasting memories.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 flex   md:h-[552px] justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full ">
            <img src="/aboutUs/bga.png" alt="" />
          </div>
          <div className="absolute  top-0 left-0 z-10  lg:top-[120px] lg:left-[210px] w-full h-full ">
            <img src="/aboutUs/twhite.png" alt="" />
          </div>
          <div className="-rotate-12  top-0 left-0 absolute lg:top-[145px] lg:left-[152px]  h-[350px]  md:w-[320px] md:h-[320px] bg-white shadow-lg">
            <div className="p-5 overflow-hidden">
              <img
                src="/aboutUs/story.png"
                alt="Create memories"
                className="rounded-lg  shadow-lg"
              />
            </div>
            <div className="absolute  bottom-4 left-[100px] bg-white px-4 rounded-lg shadow-md">
              <p
                style={{ fontFamily: "bagea" }}
                className="text-sm  justify-center  "
              >
                Create memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

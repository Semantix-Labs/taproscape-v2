import React from "react";

const StorySectionTour = () => {
  return (
    <section className="bg-white py-12 px-5 lg:px-20 2xl:px-40">
      <div className="container mx-auto flex flex-col h-[700px] md:h-[552px] md:flex-row items-center">
        <div className="w-full md:w-1/2 px-4">
        <div className="flex text-xl md:text-2xl mb-5 lg:text-3xl xl:text-4xl uppercase">
              {" "}
              <h2 className="pt-1 text-oxfordBlue">types of tours</h2>
              <div className="image-container relative">
                <img className="w-28 md:w-full" src="/textbg.png" alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl- text-white bottom-5"
                  >
                  Overview
                  </p>
                </div>
              </div>
            </div>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 flex  md:h-[552px] justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full ">
            <img src="/aboutUs/bga.png" alt="" />
          </div>
          <div className="absolute  top-0 left-0 z-10 md:top-[120px] md:left-[10px] w-full h-full ">
            <img src="/aboutUs/twhite.png" alt="" />
          </div>
          <div className="-rotate-12  top-0 left-0 absolute xl:top-[145px] xl:left-[152px] w-[280px] md:top-24 md:left-16  xl:w-[320px] xl:h-[320px] bg-white shadow-lg">
            <div className="p-5 overflow-hidden">
              <img
                src="/Tourpackage/story.jpeg"
                alt="Create memories"
                className="rounded-lg  shadow-lg"
              />
            </div>
            <div className="absolute  bottom-4 left-[100px] bg-white px-4 rounded-lg ">
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

export default StorySectionTour;
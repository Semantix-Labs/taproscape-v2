import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto flex flex-col h-[700px] md:h-[552px] md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 flex h-auto  md:h-[552px] justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full ">
            <img src="/aboutUs/bga2.png" alt="" />
          </div>
          <div className="absolute  top-0 left-0 z-10 xl:top-[140px] xl:left-[281px] w-full h-full ">
            <img src="/aboutUs/twhite.png" alt="" />
          </div>
          <div className="rotate-12  top-0 left-0 absolute xl:top-[145px] xl:left-[152px]  md:w-[320px] md:h-[320px] bg-white shadow-lg">
            <div className="p-5 overflow-hidden">
              <img
                src="/aboutUs/story2.png"
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
        <div className="w-full md:w-1/2 mt-96 md:mt-0 px-4">
          <div className="flex text-xl md:text-2xl mb-5 lg:text-3xl xl:text-4xl uppercase">
            {" "}
            <h2 className="pt-1 text-oxfordBlue">our</h2>
            <div className="image-container relative">
              <img className="w-28 ml-2 md:w-full" src="/textbg.png" alt="" />
              <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                <p
                  style={{ fontFamily: "bagea" }}
                  className="top-0 pl-2 text-white md:text-2xl lg:text-3xl xl:text-4xl bottom-5"
                >
                  mission
                </p>
              </div>
            </div>
          </div>
          <p className=" mb-4">
            At Taproscapes, our mission is to provide luxurious, personalized
            travel experiences in Sri Lanka, focusing on wellness,
            sustainability, and cultural immersion. We strive to create
            unforgettable journeys that showcase the beauty and heritage of Sri
            Lanka while promoting eco-friendly practices and supporting local
            communities. Join us in discovering the essence of Sri Lanka, and
            let us help you create memories that will last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

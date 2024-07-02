// pages/Gallery.tsx
import React, { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("information");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string>("information");

  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getSvgColor = (buttonName: string) => {
    if (hoveredButton === buttonName || activeButton === buttonName) {
      return "#006362";
    }
    return "#082B498F";
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveButton(tab);
  };

  return (
    <div>
      <div className="  ">
        <nav className="w-full flex justify-between ">
          <button
            className={`flex justify-center border-b-2  w-1/2 py-2 ${
              activeButton === "information"
                ? "border-[#006362] bg-white text-[#006362]"
                : "border-[#082B498F] text-[#082B498F]"
            } hover:text-white bg-none`}
            onMouseEnter={() => handleMouseEnter("information")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTabClick("information")}
          >
            <span className="mr-2">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.25 1.75H4.75C3.36929 1.75 2.25 2.86929 2.25 4.25V21.75C2.25 23.1307 3.36929 24.25 4.75 24.25H22.25C23.6307 24.25 24.75 23.1307 24.75 21.75V4.25C24.75 2.86929 23.6307 1.75 22.25 1.75Z"
                  stroke={getSvgColor("information")}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.125 10.5C10.1605 10.5 11 9.66053 11 8.625C11 7.58947 10.1605 6.75 9.125 6.75C8.08947 6.75 7.25 7.58947 7.25 8.625C7.25 9.66053 8.08947 10.5 9.125 10.5Z"
                  stroke={getSvgColor("information")}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.75 16.75L18.5 10.5L4.75 24.25"
                  stroke={getSvgColor("information")}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            <h2 className="text-sm md:text-xl"> Photos</h2>
          </button>
          <button
            className={`flex justify-center border-b-2  w-1/2 py-2 ${
              activeButton === "tourPlan"
                ? "border-[#006362] bg-white text-[#006362]"
                : "border-[#082B498F] text-[#082B498F]"
            } hover:text-white bg-none`}
            onMouseEnter={() => handleMouseEnter("tourPlan")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTabClick("tourPlan")}
          >
            <span className="mr-2">
              <svg
                width="36"
                height="26"
                viewBox="0 0 36 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_64_550)">
                  <path
                    d="M33.0573 4.94001C32.8857 4.25449 32.5362 3.6264 32.0442 3.11916C31.5522 2.61192 30.935 2.2435 30.2551 2.05112C27.7706 1.44446 17.8328 1.44446 17.8328 1.44446C17.8328 1.44446 7.89505 1.44446 5.41061 2.1089C4.73063 2.30128 4.11346 2.66969 3.62144 3.17693C3.12942 3.68417 2.77997 4.31227 2.60839 4.99779C2.1537 7.51915 1.93128 10.0769 1.94394 12.6389C1.92773 15.2202 2.15016 17.7974 2.60839 20.3378C2.79755 21.002 3.15483 21.6062 3.6457 22.092C4.13658 22.5779 4.74446 22.9289 5.41061 23.1111C7.89505 23.7756 17.8328 23.7756 17.8328 23.7756C17.8328 23.7756 27.7706 23.7756 30.2551 23.1111C30.935 22.9187 31.5522 22.5503 32.0442 22.0431C32.5362 21.5359 32.8857 20.9078 33.0573 20.2222C33.5085 17.7199 33.7309 15.1816 33.7217 12.6389C33.7379 10.0576 33.5155 7.48036 33.0573 4.94001Z"
                    stroke={getSvgColor("tourPlan")}
                    stroke-opacity="0.56"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5833 17.3622L22.8888 12.6389L14.5833 7.91553V17.3622Z"
                    stroke={getSvgColor("tourPlan")}
                    stroke-opacity="0.56"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_64_550">
                    <rect
                      width="34.6667"
                      height="26"
                      fill={getSvgColor("tourPlan")}
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
            <h2 className="text-sm md:text-xl">Videos</h2>
          </button>
        </nav>

        {activeTab === "information" && (
          <div>
            <div className="mt-16 px-5 lg:px-20 2xl:px-40 ">
              <div className="mx-auto">
                <h1 className="text-xl md:text-3xl">Landscapes</h1>
                <img
                  className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                  src="/undeline.svg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-2">
                <div className="h-[440px] rounded-xl overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/1.png" />
                </div>
                <div className="h-[440px] rounded-xl overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/2.png" />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-12">
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/3.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/4.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/5.png" />
                </div>

                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/6.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/7.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/8.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/9.png" />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/10.png" />
                </div>
              </div>
              <div className="mx-auto mt-16">
                <h1 className="text-xl md:text-3xl">Cultural Experiences</h1>
                <img
                  className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                  src="/undeline.svg"
                  alt=""
                />
              </div>
              <div className="grid  grid-cols-1 mt-12 gap-4 md:grid-cols-12">
                <div className="h-[215px] md:col-span-3 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/1.png"
                  />
                </div>
                <div className="h-[335px] md:col-span-6 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/2.png"
                  />
                </div>
                <div className="h-[403px] md:col-span-3 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/3.jpeg"
                  />
                </div>

                <div className="h-[403px] md:mt-[-188px] overflow-hidden rounded-xl md:col-span-3 ">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/4.png"
                  />
                </div>
                <div className="h-[283px] md:-mt-[68px] rounded-xl md:col-span-2 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/5.png"
                  />
                </div>
                <div className="h-[283px] md:-mt-[68px] rounded-xl md:col-span-4 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/6.png"
                  />
                </div>

                <div className="h-[215px] rounded-xl md:col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/culture/7.jpeg"
                  />
                </div>
              </div>

              <div className="mx-auto mt-16">
                <h1 className="text-xl text-black md:text-3xl">wildlife</h1>
                <img
                  className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                  src="/undeline.svg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-2">
                <div className="h-[440px] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/1.jpeg"
                  />
                </div>
                <div className="h-[440px] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/2.jpeg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-12">
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/3.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/4.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/5.jpeg"
                  />
                </div>

                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/6.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/7.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/8.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src="/GalleryPage/wild/9.jpeg"
                  />
                </div>
                <div className="h-[215px] rounded-xl col-span-3 overflow-hidden">
                  <img className="w-full h-full" src="/GalleryPage/10.png" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tourPlan" && (
          <div className="mt-16  max-w-7xl mx-auto">
            <div className="mx-auto">
              <h1 className="text-xl md:text-3xl">Popular 
                Videos
              </h1>
              <img
                className="justify-start flex max-w-[200px] overflow-hidden md:ml-[-8px]"
                src="/undeline.svg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-2">
              <div className="h-[604px] rounded-2xl md:col-span-2 overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/1.png" />
              </div>
              <div className="h-[344px] rounded-xl overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/2.png" />
              </div>
              <div className="h-[344px] rounded-xl overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/3.png" />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-12">
              <div className="h-[554px] rounded-xl col-span-4 overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/4.png" />
              </div>
              <div className="h-[554px] rounded-xl col-span-4 overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/5.png" />
              </div>
              <div className="h-[554px] rounded-xl col-span-4 overflow-hidden">
                <img className="w-full h-full" src="/GalleryPage/video/6.png" />
              </div>
             
            </div>
          </div>
        )}
      </div>
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
  );
}

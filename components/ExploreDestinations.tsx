import Link from "next/link";
import React from "react";

const destinations = [
  {
    title: "Kandy: The Cultural Heart of Sri Lanka",
    description:"Discover the Rich Heritage and Natural Beauty of Kandy",
      
    imageUrl: "/kandy.jpg",
    slug: 'destination1',
    span: "md:col-span-8 ", // First image spans 2 columns in lg and up
    imageSpan:"lg:h-[420px] md:h-[320px] 2xl:h-[470px]",
    span2:"lg:flex justify-between",
  },
  {
    title: "Ella: The Scenic Hill Country Retreat",
    description:
      "Experience the Natural Beauty and Adventure of Ella",
    imageUrl: "/ella.jpg",
    slug: 'destination2',
    span: "md:col-span-4 md:row-span-2", // Second image spans 2 columns in lg and up
    imageSpan:"lg:h-[900px] md:h-[700px] 2xl:h-[1000px]",
  },
  {
    title: "Nuwara Eliya: The Little England of Sri Lanka",
    description:
      "Discover the Colonial Charm and Natural Splendor of Nuwara Eliya",
    imageUrl: "/Destination/d3.png",
    slug: 'destination3',
    span: "md:col-span-4", // Third image spans 1 column
    imageSpan:"lg:h-[456px] md:h-[356px] 2xl:h-[506px]",
  },
  {
    title: "Galle: The Historic Coastal Gem",
    description:
      "Explore the Rich History and Coastal Beauty of Galle",
    imageUrl: "/Destination/d4.png",
    slug: 'destination4',
    span: "md:col-span-4", // Fourth image spans 1 column
    imageSpan:"lg:h-[456px] md:h-[356px] 2xl:h-[506px]",
  },
  {
    title: "Yala National Park: The Wildlife Wonderland",
    description:
      "Experience the Thrilling Wildlife and Natural Beauty of Yala National Park",
    imageUrl: "/Destination/d6.png",
    slug: 'destination6',
    span: "md:col-span-4 lg:row-span-2", // Second image spans 2 columns in lg and up
    imageSpan:"lg:h-[900px] md:h-[700px] 2xl:h-[1000px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d5.jpeg",
    slug: 'destination7',
    span: "md:col-span-8", // First image spans 2 columns in lg and up
    imageSpan:"lg:h-[420px] md:h-[320px] 2xl:h-[470px]",
    span2:"lg:flex justify-between",
  },

  {
    title: "Sigiriya: The Majestic Rock Fortress",
    description:
      "Explore the Ancient Marvel and Natural Splendor of Sigiriya",
    imageUrl: "/Destination/d7.jpeg",
    slug: 'destination5',
    span: "md:col-span-4", // Fourth image spans 1 column
    imageSpan:"lg:h-[456px] md:h-[356px] 2xl:h-[506px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d8.jpeg",
    slug: 'destination8',
    span: "md:col-span-4", // Fourth image spans 1 column
    imageSpan:"lg:h-[456px] md:h-[356px] 2xl:h-[506px]",
  },
];

const ExploreDestinations = () => {
  return (
    <div className="bg-teal-900 py-16">
      <div className="px-5 lg:px-20 2xl:px-40m sm:px-6 ">
      <div className="flex text-xl  md:text-2xl lg:text-3xl xl:text-4xl mb-10 uppercase">
              {" "}
              <h2 className="pt-1 text-white">Explore our </h2>
              <div className="image-container relative">
                <img className="w-28 lg:w-[309px] lg:h-[50px] md:w-full" src="/textbg.png" alt="" />
                <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                  <p
                    style={{ fontFamily: "bagea" }}
                    className="top-0 pl-2 text-white md:text-2xl lg:text-3xl xl:text-4xl bottom-5"
                  >
                   Destinations
                  </p>
                </div>
              </div>
            </div>
        <div className="grid grid-cols-1  md:grid-cols-12 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`  overflow-hidden  ${destination.span}`}
            >
              <div className={`${destination} relative   `}>
                <div className={`${destination.imageSpan}  h-48 overflow-hidden `}>
                <img
                  src={destination.imageUrl}
                  alt={destination.title}
                  className="w-full h-full   brightness-50  object-cover"
                />
                </div>
                <div className=" absolute bottom-0 left-0 opacity-100 bg-gradient-to-b space-y-1 pb-5 from-transparent to-black w-full  ">
                  <h3 className="text-xl font-semibold  px-2 lg:px-5 text-white">
                    {destination.title}
                  </h3>
                  <div className={`${destination.span2}`}>
                  <p className="text-white px-2 lg:px-5  mb-4">
                    {destination.description}
                  </p>
                  <p>
                  <Link href={`/destinations/${destination.slug} `}>
                  <span  className="w-32 md:w-48 px-2 py-1 flex mx-2 lg:mx-5 bg-[#E6C9A8] text-[#082B49] lg:px-5 hover:text-teal-600">
                    Explore more{" "}
                    <span className="ml-2 my-auto">
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.49967 17.9168C13.8719 17.9168 17.4163 14.3724 17.4163 10.0002C17.4163 5.62791 13.8719 2.0835 9.49967 2.0835C5.12742 2.0835 1.58301 5.62791 1.58301 10.0002C1.58301 14.3724 5.12742 17.9168 9.49967 17.9168Z"
                          stroke="#082B49"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 13.1667L12.6667 10L9.5 6.83337"
                          stroke="#082B49"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.33301 10H12.6663"
                          stroke="#082B49"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  </Link>
                  </p>
                  </div>
                </div>
               
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;

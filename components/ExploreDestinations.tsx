import Link from "next/link";
import React from "react";

const destinations = [
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d1.png",
    slug: 'destination1',
    span: "lg:col-span-2", // First image spans 2 columns in lg and up
    imageSpan:"lg:h-[333px] 2xl:h-[450px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d2.jpeg",
    slug: 'destination2',
    span: "lg:col-span-2", // Second image spans 2 columns in lg and up
    imageSpan:"lg:h-[333px] 2xl:h-[450px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d3.png",
    slug: 'destination3',
    span: "lg:col-span-1", // Third image spans 1 column
    imageSpan:"xl:h-[257px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d4.png",
    slug: 'destination4',
    span: "lg:col-span-1", // Fourth image spans 1 column
    imageSpan:"xl:h-[257px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d5.jpeg",
    slug: 'destination5',
    span: "lg:col-span-1", // Fifth image spans 1 column
    imageSpan:"xl:h-[257px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d6.png",
    slug: 'destination6',
    span: "lg:col-span-1", // Sixth image spans 1 column
    imageSpan:"xl:h-[257px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d7.jpeg",
    slug: 'destination7',
    span: "lg:col-span-2", // Seventh image spans 2 columns in lg and up
    span1: "grid grid-cols-2",
    imageSpan:"xl:h-[257px]",
  },
  {
    title: "Lorem Ipsum Event",
    description:
      "Lorem ipsum dolor sit amet, ipsum rem consectetur adipiscing elit, sed do it.",
    imageUrl: "/Destination/d8.jpeg",
    slug: 'destination8',
    span: "lg:col-span-2", // Eighth image spans 2 columns in lg and up
    span1: "grid grid-cols-2",
    imageSpan:"xl:h-[257px]",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-xl bg-teal-800 ${destination.span}`}
            >
              <div className={`${destination.span1}   rounded-lg`}>
                <div className={`${destination.imageSpan} p-3 h-48 overflow-hidden rounded-lg`}>
                <img
                  src={destination.imageUrl}
                  alt={destination.title}
                  className="w-full h-full  rounded-xl   object-cover"
                />
                </div>
                <div className="p-4 my-auto">
                  <h3 className="text-xl font-semibold text-white">
                    {destination.title}
                  </h3>
                  <p className="text-white text-sm mb-4">
                    {destination.description}
                  </p>
                  <Link href={`/destinations/${destination.slug}`}>
                  <span  className="text-white flex hover:text-teal-600">
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
                          stroke="#F7F3EE"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 13.1667L12.6667 10L9.5 6.83337"
                          stroke="#F7F3EE"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.33301 10H12.6663"
                          stroke="#F7F3EE"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  </Link>
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

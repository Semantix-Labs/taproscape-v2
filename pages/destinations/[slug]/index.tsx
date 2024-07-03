// pages/destinations/[slug]/index.tsx

import Navbar from "@/components/Navbar";
import { Card } from "flowbite-react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

// Define the type for the props passed to the destination detail page
type DestinationDetailProps = {
  destinationname: string;
  artiImge: string[];
  artiText: string[];
  author: string;
  authorName: string;
  authorText: string;
  TourImage: string[];
  TourText: string[];
};

const DestinationDetail: NextPage<DestinationDetailProps> = ({
  destinationname,
  artiImge,
  artiText,
  author,
  authorName,
  authorText,
  TourImage,
  TourText,
}) => {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div className="text-center text-2xl py-10">Loading...</div>;
  }

  return (
    <div className=" min-h-screen">
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
              {destinationname}
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
        <div className=" mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-12 gap-8">
          <div className="grid col-span-1 md:col-span-7 lg:col-span-8 ">
            <Card className="p-8 bg-white shadow-xl ">
              <div className="flex  text-4xl uppercase">
                {" "}
                <h2 className="pt-1 py-10 text-oxfordBlue">Lorem ipsum</h2>
                <div className="image-container relative">
                  <img src="/textbg.png" alt="" />
                  <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                    <p
                      style={{ fontFamily: "bagea" }}
                      className="top-0 pl-2 text-white bottom-5"
                    >
                      dolor
                    </p>
                  </div>
                </div>
              </div>
              {artiText.map((photo, index) => (
                <p key={index} className=" mb-4">{photo}</p>
              ))}

              <div className="flex mt-4 space-x-4">
                {artiImge.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-1/3 rounded-lg object-cover"
                  />
                ))}
              </div>
            </Card>
          </div>
          <div className="grid col-span-1 md:col-span-5 lg:col-span-4">
            <Card className="p-4 bg-white shadow-xl outline outline-offset-4 outline-gray-200 md:mt-[-200px] z-20 mb-10 text-center">
              <h1 className="text-oxfordBlue text-xl uppercase md:text-4xl ">
                About author
              </h1>
              <img
                className="w-[231px] flex justify-center mx-auto mb-5"
                src="/undeline.svg"
                alt=""
              />
              <img
                src={author}
                alt="Author"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{authorName}</h2>
              <p className="">{authorText}</p>
            </Card>
            <Card className="p-8 bg-white shadow-xl">
              <h1 className="text-oxfordBlue uppercase text-xl md:text-4xl  ">
                Tour Packeges
              </h1>
              <img
                className="w-[231px] flex justify-center mx-auto mb-5"
                src="/undeline.svg"
                alt=""
              />
              <div className="space-y-4">
                {TourImage.map((photo, imgIndex) => (
                  <div key={imgIndex} className="flex items-center">
                    <img
                      src={photo}
                      alt="Honeymoon Tours"
                      className="w-1/3 object-cover"
                    />
                    <h2 className=" text-xl md:text-2xl ml-4">{TourText[imgIndex]}</h2>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section style={{backgroundImage: 'url("/home6.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="mt-20  h-[265px] w-full">
        <div className="justify-center gap-8 py-24 flex">
          <label
            htmlFor="my-modal"
            className="search-button border-2 border-gray-600 bg-white w-1/2 py-4 px-6 rounded-lg "
          >
            <h2 className="text-2xl"> Email</h2>
          </label>
          <button className=" border-2 border-gray-600 w-1/4 py-4 px-6 uppercase bg-tropicalRainForest text-white rounded-lg">SUBSCRIBE OUR NEWSLETTER</button>
        </div>
      </section>
    </div>
  );
};

// Define all possible paths based on slugs
export const getStaticPaths: GetStaticPaths = async () => {
  // Sample data; replace with a real API call or data fetching logic
  const paths = [
    { params: { slug: "destination1" } },
    { params: { slug: "destination2" } },
    { params: { slug: "destination3" } },
    { params: { slug: "destination4" } },
    { params: { slug: "destination5" } },
    { params: { slug: "destination6" } },
    { params: { slug: "destination7" } },
    { params: { slug: "destination8" } },
  ];

  return { paths, fallback: true }; // fallback: true allows for dynamic generation
};

// Fetch the data for each destination based on the slug
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  // Sample data; replace with a real API call or data fetching logic
  const destinationData: { [key: string]: DestinationDetailProps } = {
    destination1: {
      destinationname: "Sigiriya",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiText: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem",
        "quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu",
      ],
      author: "/Destination/author/1.jpeg",
      authorName: "Author Name",
      authorText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      TourImage: [
        "/Destination/tour/1.png",
        "/Destination/tour/2.png",
        "/Destination/tour/3.png",
        "/Destination/tour/4.png",
        "/Destination/tour/5.png",
      ],
      TourText: [
        "Honeymoon Tours",
        "Wellness Tours",
        "Family Tours",
        "Adventure Tours",
        "Cultural Tours",
      ],
    },
    destination2: {
      destinationname: "",
      artiImge: [" "],
      artiText: ["fff", "ddd"],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination3: {
      destinationname: "",
      artiImge: [],
      artiText: ["fff", "ddd"],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination4: {
      destinationname: "",
      artiImge:[],
      artiText: ["fff", "ddd"],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination5: {
      destinationname: "",
      artiImge: [],
      artiText:[],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination6: {
      destinationname: "",
      artiImge: [],
      artiText: [],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination7: {
      destinationname: "",
      artiImge:[],
      artiText: [],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
    destination8: {
      destinationname: "",
      artiImge: [],
      artiText: [],
      author: "/Destination/author/1.png",
      authorName: "Author Name",
      authorText: "Lorem Ipsum Event 1",
      TourImage: [],
      TourText: []
    },
  };

  const data = destinationData[slug as string];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data,
    },
  };
};

export default DestinationDetail;

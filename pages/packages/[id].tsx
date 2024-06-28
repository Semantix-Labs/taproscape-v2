// pages/packages/[id].tsx
import { useRouter } from "next/router";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Navbar from "@/components/Navbar";
import { Card } from "flowbite-react";

// Simulated data for demonstration purposes
const travelPackages = [
  {
    id: 1,
    title: "Honeymoon Tours",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
    itinerary:
      "6-Night Honeymoon Itinerary: Colombo, Kandy, Nuwara Eliya, Bentota",
    infotext: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem",
    ],
    infoDeparture: "Lorem ipsum",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      "5 Star Accommodation",
      "All transportation in destination location",
      "Lorem ipsum",
    ],
    infoNotPriceIncluded: [
      "5 Star Accommodation",
      "All transportation in destination location",
      "Lorem ipsum",
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],
    location: "Colombo, Kandy, Nuwara Eliya, Bentota",
    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Colombo",
      departureTime: "6:15 AM",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Guided tours",
      ],
      notIncluded: [
        "Any private expenses",
        "Room service fees",
        "Travel insurance",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
  },
  {
    id: 2,
    title: "Luxury Tours",
    description:
      "Indulge in the finest experiences with our luxury tours. Travel in style and comfort while enjoying top-notch accommodations and exclusive services.",
    itinerary: "7-Day Luxury Itinerary: Colombo, Galle, Ella, Nuwara Eliya",
    location: "Colombo, Galle, Ella, Nuwara Eliya",
    imageUrl: "/images/luxury.jpg",
    price: "80000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Colombo",
      departureTime: "8:00 AM",
      returnTime: "9:00 PM",
      included: [
        "5 Star Hotels",
        "Private Chauffeur",
        "Luxury Dining Experiences",
      ],
      notIncluded: ["Personal expenses", "Spa services", "Insurance"],
      gallery: ["/images/luxury1.jpg", "/images/luxury2.jpg"],
    },
  },
  // Add more packages as needed
];

// Fetching package details based on ID
const getPackageDetails = (id: number) => {
  return travelPackages.find((pkg) => pkg.id === id);
};

const PackageDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [packageDetails, setPackageDetails] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("information");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getSvgColor = (buttonName: string) => {
    return hoveredButton === buttonName ? "white" : "#D94C12";
  };

  useEffect(() => {
    if (id) {
      const pkg = getPackageDetails(Number(id));
      setPackageDetails(pkg);
    }
  }, [id]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  if (!packageDetails)
    return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className=" bg-white min-h-screen">
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
              {packageDetails.title}
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

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
          <Card className="shadow-lg   md:col-span-8">
            <nav className="w-full flex justify-between md:px-20">
              <button
                className="bg-white text-black flex justify-center hover:text-white hover:bg-sinopia border-2 rounded-md w-1/4 py-2"
                onMouseEnter={() => handleMouseEnter("information")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("information")}
              >
                <span className="mr-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill={getSvgColor("information")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_152_2385)">
                      <path
                        d="M10.5 0.5C8.52219 0.5 6.58879 1.08649 4.9443 2.1853C3.29981 3.28412 2.01809 4.8459 1.26121 6.67317C0.504333 8.50043 0.306299 10.5111 0.692152 12.4509C1.078 14.3907 2.03041 16.1725 3.42894 17.5711C4.82746 18.9696 6.60929 19.922 8.5491 20.3079C10.4889 20.6937 12.4996 20.4957 14.3268 19.7388C16.1541 18.9819 17.7159 17.7002 18.8147 16.0557C19.9135 14.4112 20.5 12.4778 20.5 10.5C20.5 7.84784 19.4464 5.3043 17.5711 3.42893C15.6957 1.55357 13.1522 0.5 10.5 0.5ZM10.3864 4.47727C10.7235 4.47727 11.0531 4.57724 11.3334 4.76454C11.6137 4.95184 11.8321 5.21805 11.9612 5.52952C12.0902 5.84098 12.1239 6.18371 12.0582 6.51436C11.9924 6.84501 11.83 7.14873 11.5917 7.38711C11.3533 7.6255 11.0496 7.78784 10.7189 7.85361C10.3883 7.91938 10.0455 7.88563 9.73407 7.75661C9.4226 7.6276 9.15639 7.40912 8.96909 7.12881C8.78179 6.8485 8.68182 6.51895 8.68182 6.18182C8.68182 5.72974 8.86141 5.29619 9.18107 4.97652C9.50074 4.65686 9.93429 4.47727 10.3864 4.47727ZM12.7727 16.4091H8.22728V15.9545C8.50044 15.818 8.73018 15.608 8.89075 15.3482C9.05131 15.0884 9.13636 14.789 9.13637 14.4836V11.0618C9.13636 10.7564 9.05131 10.457 8.89075 10.1972C8.73018 9.93744 8.50044 9.72749 8.22728 9.59091V9.13636H11.8636V14.53C11.8636 14.8294 11.9491 15.1226 12.1102 15.375C12.2712 15.6274 12.5011 15.8285 12.7727 15.9545V16.4091Z"
                        fill={getSvgColor("information")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_2385">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
                Information
              </button>
              <button
                className="bg-white flex justify-center hover:text-white hover:bg-sinopia border-2 rounded-md w-1/4 py-2"
                onMouseEnter={() => handleMouseEnter("tourPlan")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("tourPlan")}
              >
                <span className="mr-2">
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill={getSvgColor("tourPlan")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_157_1941)">
                      <path
                        d="M24.3488 0.50218C21.9024 0.64102 17.0399 1.14638 14.0381 2.98388C13.831 3.11066 13.7136 3.33611 13.7136 3.57182V19.816C13.7136 20.3316 14.2774 20.6575 14.7528 20.4183C17.8412 18.8638 22.3078 18.4397 24.5162 18.3236C25.2703 18.2839 25.8564 17.6794 25.8564 16.9549V1.87272C25.8569 1.08209 25.1711 0.455752 24.3488 0.50218ZM11.9609 2.98388C8.95954 1.14638 4.09704 0.641466 1.65061 0.50218C0.828292 0.455752 0.142578 1.08209 0.142578 1.87272V16.9553C0.142578 17.6803 0.728739 18.2848 1.48276 18.3241C3.69213 18.4401 8.16088 18.8647 11.2493 20.42C11.7234 20.6589 12.2854 20.3334 12.2854 19.8191V3.56379C12.2854 3.32763 12.1685 3.11111 11.9609 2.98388Z"
                        fill={getSvgColor("tourPlan")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_157_1941">
                        <rect
                          width="25.7143"
                          height="20"
                          fill="white"
                          transform="translate(0.142578 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Tour Plan
              </button>
              <button
                className="bg-white flex justify-center hover:text-white hover:bg-sinopia border-2 rounded-md w-1/4 py-2"
                onMouseEnter={() => handleMouseEnter("gallery")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("gallery")}
              >
                <span className="mr-2">
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill={getSvgColor("gallery")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_157_1946)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9998 14.9444C10.1588 14.9444 8.66645 13.4521 8.66645 11.6111C8.66645 9.77016 10.1588 8.27778 11.9998 8.27778C13.8407 8.27778 15.3331 9.77016 15.3331 11.6111C15.3331 13.4521 13.8407 14.9444 11.9998 14.9444ZM20.8887 2.72222C22.1109 2.72222 23.1109 3.72222 23.1109 4.94444V18.2778C23.1109 19.5 22.1109 20.5 20.8887 20.5H3.11089C1.88867 20.5 0.888672 19.5 0.888672 18.2778V4.94444C0.888672 3.72222 1.88867 2.72222 3.11089 2.72222H6.63312L7.99978 1.22222C8.422 0.766667 9.02201 0.5 9.64423 0.5H14.3553C14.9776 0.5 15.5776 0.766667 15.9887 1.22222L17.3664 2.72222H20.8887ZM11.9998 17.1667C15.0664 17.1667 17.5553 14.6778 17.5553 11.6111C17.5553 8.54445 15.0664 6.05556 11.9998 6.05556C8.93312 6.05556 6.44423 8.54445 6.44423 11.6111C6.44423 14.6778 8.93312 17.1667 11.9998 17.1667Z"
                        fill={getSvgColor("gallery")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_157_1946">
                        <rect
                          width="22.2222"
                          height="20"
                          fill="white"
                          transform="translate(0.888672 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Gallery
              </button>
              <button
                className="bg-white flex justify-center hover:text-white hover:bg-sinopia border-2 rounded-md w-1/4 py-2"
                onMouseEnter={() => handleMouseEnter("review")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("review")}
              >
                <span className="mr-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill={getSvgColor("review")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_157_1957)">
                      <path
                        d="M7.08609 13.9C5.97656 14.7714 5.26228 16.1238 5.26228 17.6428V19.0714H2.40513C1.61466 19.0714 0.976562 18.4333 0.976562 17.6428V16.6904C0.976562 14.8476 2.46704 13.3571 4.3099 13.3571H5.26228C5.93847 13.3571 6.56228 13.5571 7.08609 13.9Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M16.2151 13.3571C17.3986 13.3571 18.358 12.3977 18.358 11.2143C18.358 10.0308 17.3986 9.07141 16.2151 9.07141C15.0317 9.07141 14.0723 10.0308 14.0723 11.2143C14.0723 12.3977 15.0317 13.3571 16.2151 13.3571Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M4.78544 13.3571C5.9689 13.3571 6.92829 12.3977 6.92829 11.2143C6.92829 10.0308 5.9689 9.07141 4.78544 9.07141C3.60197 9.07141 2.64258 10.0308 2.64258 11.2143C2.64258 12.3977 3.60197 13.3571 4.78544 13.3571Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M20.0236 16.6904V17.6428C20.0236 18.4333 19.3855 19.0714 18.595 19.0714H15.7379V17.6428C15.7379 16.1238 15.0236 14.7714 13.9141 13.9C14.4379 13.5571 15.0617 13.3571 15.7379 13.3571H16.6903C18.5331 13.3571 20.0236 14.8476 20.0236 16.6904Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M10.4999 13.8333C11.9464 13.8333 13.119 12.6607 13.119 11.2143C13.119 9.7678 11.9464 8.59521 10.4999 8.59521C9.05345 8.59521 7.88086 9.7678 7.88086 11.2143C7.88086 12.6607 9.05345 13.8333 10.4999 13.8333Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M10.9767 13.8333H10.0244C7.92389 13.8333 6.21484 15.5424 6.21484 17.6428V19.0714C6.21484 19.859 6.8558 20.5 7.64342 20.5H13.3577C14.1453 20.5 14.7863 19.859 14.7863 19.0714V17.6428C14.7863 15.5424 13.0772 13.8333 10.9767 13.8333Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M17.4043 7.01621L16.2552 7.42478C15.929 7.54049 15.5886 7.29335 15.5981 6.94716L15.6314 5.72811L14.8876 4.76144C14.6767 4.48716 14.8067 4.08668 15.1386 3.98859L16.3086 3.64383L16.9981 2.63763C17.1938 2.3524 17.6148 2.3524 17.8105 2.63763L18.5 3.64383L19.67 3.98859C20.0019 4.08621 20.1319 4.48716 19.9209 4.76144L19.1771 5.72811L19.2105 6.94716C19.22 7.29287 18.879 7.54049 18.5533 7.42478L17.4043 7.01621Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M3.59568 7.01621L2.44664 7.42478C2.12044 7.54049 1.77997 7.29335 1.78949 6.94716L1.82283 5.72811L1.07902 4.76144C0.868064 4.48716 0.998064 4.08668 1.32997 3.98859L2.49997 3.64383L3.18949 2.63763C3.38521 2.3524 3.80616 2.3524 4.00187 2.63763L4.6914 3.64383L5.8614 3.98859C6.1933 4.08621 6.3233 4.48716 6.11235 4.76144L5.36854 5.72811L5.40187 6.94716C5.4114 7.29287 5.07044 7.54049 4.74473 7.42478L3.59568 7.01621Z"
                        fill={getSvgColor("review")}
                      />
                      <path
                        d="M10.4997 5.94475L9.13732 6.42903C8.75065 6.56665 8.34685 6.27284 8.35827 5.86284L8.3978 4.4176L7.51589 3.27141C7.26589 2.94618 7.42018 2.47141 7.81351 2.35522L9.20065 1.94618L10.0183 0.753318C10.2502 0.414747 10.7497 0.414747 10.9816 0.753318L11.7992 1.94618L13.1864 2.35522C13.5797 2.47141 13.734 2.94618 13.484 3.27141L12.6021 4.4176L12.6416 5.86284C12.653 6.27284 12.2487 6.56665 11.8626 6.42903L10.4997 5.94475Z"
                        fill={getSvgColor("review")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_157_1957">
                        <rect
                          width="19.0476"
                          height="20"
                          fill="white"
                          transform="translate(0.976562 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Review
              </button>
            </nav>

            {activeTab === "information" && (
              <div className="container mx-auto  p-8">
                <h1 className="text-2xl font-bold mb-4">
                  {packageDetails.description}
                </h1>
                <div className="bg-gray-100 p-2 w-2/3 rounded-xl mb-6">
                  <span className="text-sm ml-2 font-semibold">
                    {packageDetails.itinerary}
                  </span>
                </div>
                {packageDetails.infotext.map(
                  (
                    text:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined,
                    index: any
                  ) => (
                    <p className="mb-6">{text}</p>
                  )
                )}

                <table className="table-auto w-full rounded-lg mb-6 border">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Destination
                      </td>
                      <td className="border px-4 py-2">SriLanka</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Departure
                      </td>
                      <td className="border px-4 py-2">
                        {packageDetails.infoDeparture}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Departure Time
                      </td>
                      <td className="border px-4 py-2">
                        {packageDetails.infoDepartureTime}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Return Time
                      </td>
                      <td className="border px-4 py-2">
                        {packageDetails.infoReturTime}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Price Included
                      </td>
                      <td className="border px-4 py-2">
                        <ul className="list-none  ">
                          {packageDetails.infoPriceIncluded.map(
                            (included: string, index: any) => (
                              <li className="flex ">
                                <span className="my-auto mr-2">
                                  <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_157_1412)">
                                      <path
                                        d="M16 0.239537L6.66206 12.7745C6.46388 13.0265 6.16617 13.0766 5.9178 12.8755C5.86783 12.8254 5.86783 12.8254 5.81764 12.7745L0.0220205 5.02433C-0.0275257 4.97428 0.0220205 4.92422 0.0220205 4.92422C0.0713532 4.87416 0.120899 4.92422 0.120899 4.92422L6.17215 9.39783L15.7521 0.0377872C15.8014 -0.0129213 15.9009 -0.0129213 15.9503 0.0377872C16 0.0876288 16 0.188612 16 0.239537Z"
                                        fill="#D94C12"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_157_1412">
                                        <rect
                                          width="16"
                                          height="13"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>{" "}
                                {included}
                              </li>
                            )
                          )}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">
                        Price Not Included
                      </td>
                      <td className="border px-4 py-2">
                        <ul className="list-none">
                          {packageDetails.infoNotPriceIncluded.map(
                            (included: string, index: any) => (
                              <li className="flex ">
                                <span className="my-auto mr-2">
                                  <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_157_1412)">
                                      <path
                                        d="M16 0.239537L6.66206 12.7745C6.46388 13.0265 6.16617 13.0766 5.9178 12.8755C5.86783 12.8254 5.86783 12.8254 5.81764 12.7745L0.0220205 5.02433C-0.0275257 4.97428 0.0220205 4.92422 0.0220205 4.92422C0.0713532 4.87416 0.120899 4.92422 0.120899 4.92422L6.17215 9.39783L15.7521 0.0377872C15.8014 -0.0129213 15.9009 -0.0129213 15.9503 0.0377872C16 0.0876288 16 0.188612 16 0.239537Z"
                                        fill="#D94C12"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_157_1412">
                                        <rect
                                          width="16"
                                          height="13"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>{" "}
                                {included}
                              </li>
                            )
                          )}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
                  {packageDetails.infoGallery.map(
                    (image: string, index: any) => (
                      <img
                        src={image}
                        alt="Image 1"
                        className=" h-[216px] overflow-hidden rounded-lg"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "tourPlan" && (
              <div>
                <img src="/path-to-tour-plan-image1.png" alt="Tour Plan 1" />
                <img src="/path-to-tour-plan-image2.png" alt="Tour Plan 2" />
              </div>
            )}

            {activeTab === "gallery" && (
              <div>
                <h2>Make your own memories</h2>
                <div className="gallery">
                  {}
                  <img src="/path-to-gallery-image1.png" alt="Gallery 1" />
                  <img src="/path-to-gallery-image2.png" alt="Gallery 2" />
                  <img src="/path-to-gallery-image3.png" alt="Gallery 3" />
                  <img src="/path-to-gallery-image4.png" alt="Gallery 4" />
                  <img src="/path-to-gallery-image5.png" alt="Gallery 5" />
                  <img src="/path-to-gallery-image6.png" alt="Gallery 6" />
                </div>
              </div>
            )}

            {activeTab === "review" && (
              <div>
                <h2>Reviews</h2>
                <p>No reviews available.</p>
              </div>
            )}
          </Card>
          <Card className="shadow-lg   md:col-span-4">
            <div className="">
              <h2 className="text-center text-xl font-semibold text-teal-700">
                BOOK THIS TOUR
              </h2>
              <div className="flex justify-center my-2">
                <img
                  src="/path-to-your-image"
                  alt="Horizontal Line"
                  className="w-24"
                />
              </div>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-teal-500"
                  />
                  <div className="absolute left-3 top-3 text-orange-500">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-teal-500"
                  />
                  <div className="absolute left-3 top-3 text-orange-500">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-teal-500"
                  />
                  <div className="absolute left-3 top-3 text-orange-500">
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy *"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-teal-500"
                  />
                  <div className="absolute left-3 top-3 text-orange-500">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Number of Tickets *"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-teal-500"
                  />
                  <div className="absolute left-3 top-3 text-orange-500">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message ...."
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="text-teal-500 focus:outline-none"
                  />
                  <label className="ml-2 text-gray-700">
                    Check Availability
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sinopia text-white py-2 rounded-md hover:bg-orange-500 transition-colors"
                >
                  BOOK NOW
                </button>
              </form>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
                <h3 className="text-lg font-semibold text-teal-700">
                  ANY QUESTION?
                </h3>
                <div className="flex justify-center my-2">
                  <img
                    src="/path-to-your-image"
                    alt="Horizontal Line"
                    className="w-24"
                  />
                </div>
                <p className="text-gray-700">
                  Do not hesitate to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <div className="mt-4">
                  <p className="flex items-center justify-center">
                    <i className="fas fa-envelope text-orange-500 mr-2"></i>
                    taproscapes@gmail.com
                  </p>
                  <p className="flex items-center justify-center mt-2">
                    <i className="fas fa-phone text-orange-500 mr-2"></i>
                    +94 76 123 456 9845
                  </p>
                </div>
              </div>
            
          </Card>
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {packageDetails.title}
          </h1>
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Go Back
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={packageDetails.imageUrl}
              alt={packageDetails.title}
              width={800}
              height={500}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Package Details</h2>
            <p className="text-gray-700 mb-4">{packageDetails.description}</p>
            <h3 className="text-xl font-semibold mb-2">Itinerary</h3>
            <p className="text-gray-700 mb-4">{packageDetails.itinerary}</p>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700 mb-4">{packageDetails.location}</p>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-gray-900 font-bold mb-4">
              {packageDetails.price}
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="py-2 px-4 font-semibold">Destination</td>
                    <td className="py-2 px-4">
                      {packageDetails.details.destination}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Departure</td>
                    <td className="py-2 px-4">
                      {packageDetails.details.departure}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-2 px-4 font-semibold">Departure Time</td>
                    <td className="py-2 px-4">
                      {packageDetails.details.departureTime}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Return Time</td>
                    <td className="py-2 px-4">
                      {packageDetails.details.returnTime}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-2 px-4 font-semibold">Included</td>
                    <td className="py-2 px-4">
                      <ul className="list-disc pl-5">
                        {packageDetails.details.included.map(
                          (
                            item:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  any,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<AwaitedReactNode>
                              | null
                              | undefined,
                            index: Key | null | undefined
                          ) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Not Included</td>
                    <td className="py-2 px-4">
                      <ul className="list-disc pl-5">
                        {packageDetails.details.notIncluded.map(
                          (
                            item:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  any,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<AwaitedReactNode>
                              | null
                              | undefined,
                            index: Key | null | undefined
                          ) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {packageDetails.infoGallery.map(
              (image: string | StaticImport, index: Key | null | undefined) => (
                <div key={index} className="relative w-full h-48">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
        <Link href="/contact">
          <span className="flex items-center">
            <span>Book This Tour</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PackageDetails;

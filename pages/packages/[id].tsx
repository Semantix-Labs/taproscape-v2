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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 2,
    title: "Luxury Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 3,
    title: "Ramayana Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 4,
    title: "Wellness Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 5,
    title: "Family Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 6,
    title: "Adventure Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 7,
    title: "Cultural Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 8,
    title: "Nature & Wildlife Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 9,
    title: "Beach Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 10,
    title: "Eco & Sustainable Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
  },
  {
    id: 11,
    title: "Food & Culinary Tours",
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
    TourPlantext: [
      "Arrival Colombo",
      "Arrival Kandy",
      "Kandy",
      "Departure Kandy",
      "Arrival Nuwara Eliya",
      "Departure Nuwara Eliya",
      "Arrival Bentota",
      "Departure Bentota",
    ],
    TourText: [
      [
        "Arrive at Bandaranaike International Airport.",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
        "Transfer to Negombo: Short drive to a beachside hotel in Negombo",
      ],
      [
        "Morning: Transfer to Kandy, visit the Pinnawala Elephant Orphanage on the way.",
        "Check-in at a luxury hotel. Visit the Temple of the Tooth",
      ],
    ],
    GalleryImages: [
      "/Tourpackage/Gallery/1.png",
      "/Tourpackage/Gallery/2.jpeg",
      "/Tourpackage/Gallery/3.jpeg",
      "/Tourpackage/Gallery/4.jpeg",
      "/Tourpackage/Gallery/5.jpeg",
      "/Tourpackage/Gallery/6.jpeg",
      "/Tourpackage/Gallery/7.jpeg",
    ],
    RewProfile: ["/Tourpackage/rew/1.jpeg"],
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
  const [activeButton, setActiveButton] = useState<string>("information");

  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getSvgColor = (buttonName: string) => {
    if (hoveredButton === buttonName || activeButton === buttonName) {
      return "white";
    }
    return "#D94C12";
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveButton(tab);
  };

  useEffect(() => {
    if (id) {
      const pkg = getPackageDetails(Number(id));
      setPackageDetails(pkg);
    }
  }, [id]);

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
                className={`flex justify-center border-2 rounded-md w-1/4 py-2 ${
                  activeButton === "information"
                    ? "bg-sinopia text-white"
                    : "bg-white text-black"
                } hover:text-white hover:bg-sinopia`}
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
                className={`flex justify-center border-2 rounded-md w-1/4 py-2 ${
                  activeButton === "tourPlan"
                    ? "bg-sinopia text-white"
                    : "bg-white text-black"
                } hover:text-white hover:bg-sinopia`}
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
                          width="25.7134"
                          height="20.3636"
                          fill="white"
                          transform="translate(0.142578 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
                Tour Plan
              </button>
              <button
                className={`flex justify-center border-2 rounded-md w-1/4 py-2 ${
                  activeButton === "pricing"
                    ? "bg-sinopia text-white"
                    : "bg-white text-black"
                } hover:text-white hover:bg-sinopia`}
                onMouseEnter={() => handleMouseEnter("pricing")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("pricing")}
              >
                <span className="mr-2">
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill={getSvgColor("pricing")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_152_2405)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9998 14.9444C10.1588 14.9444 8.66645 13.4521 8.66645 11.6111C8.66645 9.77016 10.1588 8.27778 11.9998 8.27778C13.8407 8.27778 15.3331 9.77016 15.3331 11.6111C15.3331 13.4521 13.8407 14.9444 11.9998 14.9444ZM20.8887 2.72222C22.1109 2.72222 23.1109 3.72222 23.1109 4.94444V18.2778C23.1109 19.5 22.1109 20.5 20.8887 20.5H3.11089C1.88867 20.5 0.888672 19.5 0.888672 18.2778V4.94444C0.888672 3.72222 1.88867 2.72222 3.11089 2.72222H6.63312L7.99978 1.22222C8.422 0.766667 9.02201 0.5 9.64423 0.5H14.3553C14.9776 0.5 15.5776 0.766667 15.9887 1.22222L17.3664 2.72222H20.8887ZM11.9998 17.1667C15.0664 17.1667 17.5553 14.6778 17.5553 11.6111C17.5553 8.54445 15.0664 6.05556 11.9998 6.05556C8.93312 6.05556 6.44423 8.54445 6.44423 11.6111C6.44423 14.6778 8.93312 17.1667 11.9998 17.1667Z"
                        fill={getSvgColor("pricing")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_2405">
                        <rect
                          width="22.2222"
                          height="20"
                          fill={getSvgColor("pricing")}
                          transform="translate(0.888672 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
                Gallery
              </button>
              <button
                className={`flex justify-center border-2 rounded-md w-1/4 py-2 ${
                  activeButton === "booking"
                    ? "bg-sinopia text-white"
                    : "bg-white text-black"
                } hover:text-white hover:bg-sinopia`}
                onMouseEnter={() => handleMouseEnter("booking")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick("booking")}
              >
                <span className="mr-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill={getSvgColor("booking")}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_152_2455)">
                      <path
                        d="M7.08609 13.9C5.97656 14.7714 5.26228 16.1238 5.26228 17.6428V19.0714H2.40513C1.61466 19.0714 0.976562 18.4333 0.976562 17.6428V16.6904C0.976562 14.8476 2.46704 13.3571 4.3099 13.3571H5.26228C5.93847 13.3571 6.56228 13.5571 7.08609 13.9Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M16.2151 13.3571C17.3986 13.3571 18.358 12.3977 18.358 11.2143C18.358 10.0308 17.3986 9.07141 16.2151 9.07141C15.0317 9.07141 14.0723 10.0308 14.0723 11.2143C14.0723 12.3977 15.0317 13.3571 16.2151 13.3571Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M4.78544 13.3571C5.9689 13.3571 6.92829 12.3977 6.92829 11.2143C6.92829 10.0308 5.9689 9.07141 4.78544 9.07141C3.60197 9.07141 2.64258 10.0308 2.64258 11.2143C2.64258 12.3977 3.60197 13.3571 4.78544 13.3571Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M20.0236 16.6904V17.6428C20.0236 18.4333 19.3855 19.0714 18.595 19.0714H15.7379V17.6428C15.7379 16.1238 15.0236 14.7714 13.9141 13.9C14.4379 13.5571 15.0617 13.3571 15.7379 13.3571H16.6903C18.5331 13.3571 20.0236 14.8476 20.0236 16.6904Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M10.4999 13.8333C11.9464 13.8333 13.119 12.6607 13.119 11.2143C13.119 9.7678 11.9464 8.59521 10.4999 8.59521C9.05345 8.59521 7.88086 9.7678 7.88086 11.2143C7.88086 12.6607 9.05345 13.8333 10.4999 13.8333Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M10.9767 13.8333H10.0244C7.92389 13.8333 6.21484 15.5424 6.21484 17.6428V19.0714C6.21484 19.859 6.8558 20.5 7.64342 20.5H13.3577C14.1453 20.5 14.7863 19.859 14.7863 19.0714V17.6428C14.7863 15.5424 13.0772 13.8333 10.9767 13.8333Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M17.4043 7.01621L16.2552 7.42478C15.929 7.54049 15.5886 7.29335 15.5981 6.94716L15.6314 5.72811L14.8876 4.76144C14.6767 4.48716 14.8067 4.08668 15.1386 3.98859L16.3086 3.64383L16.9981 2.63763C17.1938 2.3524 17.6148 2.3524 17.8105 2.63763L18.5 3.64383L19.67 3.98859C20.0019 4.08621 20.1319 4.48716 19.9209 4.76144L19.1771 5.72811L19.2105 6.94716C19.22 7.29287 18.879 7.54049 18.5533 7.42478L17.4043 7.01621Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M3.59568 7.01621L2.44664 7.42478C2.12044 7.54049 1.77997 7.29335 1.78949 6.94716L1.82283 5.72811L1.07902 4.76144C0.868064 4.48716 0.998064 4.08668 1.32997 3.98859L2.49997 3.64383L3.18949 2.63763C3.38521 2.3524 3.80616 2.3524 4.00187 2.63763L4.6914 3.64383L5.8614 3.98859C6.1933 4.08621 6.3233 4.48716 6.11235 4.76144L5.36854 5.72811L5.40187 6.94716C5.4114 7.29287 5.07044 7.54049 4.74473 7.42478L3.59568 7.01621Z"
                        fill={getSvgColor("booking")}
                      />
                      <path
                        d="M10.4997 5.94475L9.13732 6.42903C8.75065 6.56665 8.34685 6.27284 8.35827 5.86284L8.3978 4.4176L7.51589 3.27141C7.26589 2.94618 7.42018 2.47141 7.81351 2.35522L9.20065 1.94618L10.0183 0.753318C10.2502 0.414747 10.7497 0.414747 10.9816 0.753318L11.7992 1.94618L13.1864 2.35522C13.5797 2.47141 13.734 2.94618 13.484 3.27141L12.6021 4.4176L12.6416 5.86284C12.653 6.27284 12.2487 6.56665 11.8626 6.42903L10.4997 5.94475Z"
                        fill={getSvgColor("booking")}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_2455">
                        <rect
                          width="19.0476"
                          height="20"
                          fill={getSvgColor("booking")}
                          transform="translate(0.976562 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
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
                {packageDetails.TourPlantext.map(
                  (
                    planText:
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
                    <div key={index}>
                      <div className="flex text-xl md:text-3xl gap-4 my-4">
                        <button className="text-white bg-sinopia px-3 rounded-md py-1">
                          {index + 1}
                        </button>
                        <h1>
                          Day <span className="mr-1">{index + 1}</span>:
                        </h1>
                        <h1>{planText}</h1>
                      </div>

                      <div className="mt-5 ml-[58px]">
                        {/* Check if there's a corresponding entry in TourText */}
                        {packageDetails.TourText[index] ? (
                          packageDetails.TourText[index].map(
                            (
                              text:
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
                              textIndex: any
                            ) => (
                              <p
                                key={textIndex}
                                className="flex my-auto gap-4 mt-2"
                              >
                                <i className="my-auto">
                                  <svg
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_157_2096)">
                                      <path
                                        d="M16 0.239598L6.66206 12.7746C6.46388 13.0266 6.16617 13.0766 5.9178 12.8755C5.86783 12.8255 5.86783 12.8255 5.81764 12.7746L0.0220205 5.0244C-0.0275257 4.97434 0.0220205 4.92428 0.0220205 4.92428C0.0713532 4.87422 0.120899 4.92428 0.120899 4.92428L6.17215 9.39789L15.7521 0.0378482C15.8014 -0.0128602 15.9009 -0.0128602 15.9503 0.0378482C16 0.0876899 16 0.188673 16 0.239598Z"
                                        fill="#D94C12"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_157_2096">
                                        <rect
                                          width="16"
                                          height="13"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </i>
                                {text}
                              </p>
                            )
                          )
                        ) : (
                          <p>No details available for this day.</p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === "pricing" && (
              <div>
                <h2 className="text-xl md:text-3xl">Make your own memories</h2>

                <div className="gallery grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-7 rounded-lg h-[220px] w-full overflow-hidden">
                    <img
                      className=""
                      src={packageDetails.GalleryImages[0]}
                      alt=""
                    />
                  </div>
                  <div className="md:col-span-5 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[1]} alt="" />
                  </div>
                  <div className="md:col-span-5 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[2]} alt="" />
                  </div>
                  <div className="md:col-span-7 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[3]} alt="" />
                  </div>
                  <div className="md:col-span-4 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[4]} alt="" />
                  </div>
                  <div className="md:col-span-4 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[5]} alt="" />
                  </div>
                  <div className="md:col-span-4 rounded-lg h-[220px] overflow-hidden">
                    <img src={packageDetails.GalleryImages[6]} alt="" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "booking" && (
              <div>
                <div className="p-8">
                  {/* Reviews Section */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">
                      Tour Reviews
                    </h2>

                    {/* Review Card */}
                    {packageDetails.RewProfile.map(
                      (profile: any, index: any) => (
                        <div className="mb-8 grid grid-cols-1 md:grid-cols-12 p-4 border rounded-lg shadow-lg">
                          <div className="flex md:col-span-3 items-start mb-4">
                            <div className="w-[116px] h-[116px] overflow-hidden">
                              <img
                                src={profile}
                                alt="Reviewer"
                                className="object-cover w-[116px] h-full rounded-md mr-4"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-9">
                            <div className="">
                              <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-sm text-gray-500">
                                  February 8, 2024 at 11:51 am
                                </p>
                              </div>
                            </div>
                            <p className="mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <Rating label="Accommodation" stars={5} />
                              <Rating label="Destination" stars={5} />
                              <Rating label="Meals" stars={5} />
                              <Rating label="Overall" stars={5} />
                              <Rating label="Transport" stars={5} />
                              <Rating label="Value for Money" stars={5} />
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    {/* Review Card - Repeat if needed */}
                    {/* Copy the Review Card above and paste here if you want to show multiple reviews */}
                  </div>

                  {/* Comment Form */}
                  <div className="p-4 border rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                      Put a Comment
                    </h3>
                    <form>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <RatingInput label="Accommodation" />
                        <RatingInput label="Destination" />
                        <RatingInput label="Meals" />
                        <RatingInput label="Overall" />
                        <RatingInput label="Transport" />
                        <RatingInput label="Value for Money" />
                      </div>
                      <div className="flex gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Full Name *"
                          className="w-1/2 p-2 border rounded-lg"
                          required
                        />
                        <input
                          type="email"
                          placeholder="E-mail *"
                          className="w-1/2 p-2 border rounded-lg"
                          required
                        />
                      </div>
                      <textarea
                        placeholder="Your Comment ..."
                        className="w-full p-2 border rounded-lg mb-4"
                        rows={4}
                      ></textarea>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Card>
          <div className="space-y-8  md:mt-[-200px] z-20  md:col-span-4">
            <Card className="">
              <h2 className="text-center text-xl font-normal text-[#006362]">
                BOOK THIS TOUR
              </h2>
              <div className="flex justify-center my-1">
                <img
                  className="w-[231px] flex justify-center mx-auto mb-5"
                  src="/undeline.svg"
                  alt=""
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
            </Card>
            <Card className="mt-6 p-4 bg-[#F7F3EE] rounded-md text-center">
              <h3 className="text-lg font-semibold ">ANY QUESTION?</h3>
              <div className="flex justify-center my-2">
                <img
                  className="w-[231px] flex justify-center mx-auto mb-5"
                  src="/undeline.svg"
                  alt=""
                />
              </div>
              <p className="text-gray-700">
                Do not hesitate to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <div className="mt-4">
                <p className="flex items-center justify-center">
                  <i className="fas fa-envelope text-orange-500 mr-2">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_157_1602)">
                        <path
                          d="M11.666 10.6667L23.166 3C22.666 1.25 21.0827 0 19.166 0H4.16602C2.24935 0 0.666016 1.25 0.166016 3L11.666 10.6667Z"
                          fill="#D94C12"
                          fill-opacity="0.8"
                        />
                        <path
                          d="M12.1667 12.3333C12 12.4166 11.8333 12.5 11.6667 12.5C11.5 12.5 11.3333 12.4166 11.1667 12.3333L0 4.91663V15.8333C0 18.1666 1.83333 20 4.16667 20H19.1667C21.5 20 23.3333 18.1666 23.3333 15.8333V4.91663L12.1667 12.3333Z"
                          fill="#D94C12"
                          fill-opacity="0.8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_157_1602">
                          <rect width="23.3333" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  taproscapes@gmail.com
                </p>
                <p className="flex items-center justify-center mt-2">
                  <i className="fas fa-phone text-orange-500 mr-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.98972 8.26977C6.65882 9.52068 7.48475 10.6811 8.44752 11.723C9.57393 12.9013 10.8948 13.8768 12.3523 14.6067C12.4056 14.6305 12.4633 14.6428 12.5216 14.6428C12.58 14.6428 12.6377 14.6305 12.691 14.6067C12.8699 14.5274 13.0306 14.4121 13.163 14.2681C13.3149 14.1055 13.4571 13.9342 13.5889 13.7549C14.22 12.9288 14.9948 11.9077 16.0929 12.4208L16.1596 12.4516L19.8181 14.5554H19.8489C20.0734 14.7169 20.2539 14.932 20.374 15.1812C20.4941 15.4303 20.55 15.7056 20.5364 15.9818C20.5182 16.6188 20.3419 17.2412 20.0233 17.7931C19.6182 18.4828 19.0008 19.0228 18.2633 19.3325C17.5718 19.6319 16.8409 19.8306 16.0929 19.9225C14.9817 20.0846 13.8481 19.9916 12.7782 19.6506C11.6051 19.255 10.4863 18.7138 9.44809 18.0394L9.36086 17.983C8.81696 17.6443 8.23202 17.2851 7.65733 16.8593C5.36496 15.1275 3.4453 12.9513 2.0131 10.4608C0.848338 8.34674 0.206949 6.06339 0.555865 3.88267C0.700335 2.72158 1.27085 1.65552 2.15677 0.891228C2.60367 0.544669 3.11525 0.290816 3.66153 0.144554C4.20781 -0.00170837 4.7778 -0.0374372 5.33807 0.0394626C5.41426 0.0455602 5.48779 0.0702707 5.55221 0.111425C5.61662 0.152579 5.66995 0.208917 5.70751 0.275494L8.05243 4.24185C8.20952 4.42103 8.31149 4.64178 8.34608 4.87755C8.38067 5.11331 8.34641 5.35405 8.24741 5.57081C8.04615 5.98762 7.73587 6.34222 7.34946 6.59703C7.22632 6.70478 7.07751 6.81254 6.91845 6.92542C6.40534 7.30512 5.79473 7.7464 5.99998 8.26464L5.98972 8.26977Z"
                        fill="#D94C12"
                        fill-opacity="0.8"
                      />
                    </svg>
                  </i>
                  +94 76 123 456 9845
                </p>
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

      {/* <div className="max-w-6xl mx-auto">
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
      </div> */}
    </div>
  );
};

const Rating: React.FC<{ label: string; stars: number }> = ({
  label,
  stars,
}) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      {[...Array(stars)].map((_, i) => (
        <span key={i} className="text-orange-500">
          &#9733;
        </span>
      ))}
    </div>
  );
};

const RatingInput: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 w-1/3">{label}</span>
      <div className="flex-1 flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-orange-500">
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;

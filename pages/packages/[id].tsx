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
import CommentForm from "@/components/CommentForm";

// Simulated data for demonstration purposes
const travelPackages = [
  {
    id: 1,
    title: "Honeymoon Tours",
    imageUrlh: "/Tourpackage/1.png",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
    descriptionhid:"inline",  
    itinerary: [
      "6-Night Honeymoon Itinerary: Colombo, Kandy, Nuwara Eliya, Bentota",
      "9-Night Honeymoon Itinerary: Colombo, Sigiriya, Kandy, Nuwara Eliya, Bentota",
      "13-Night Honeymoon Itinerary: Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Bentota",
    ],
    infotext: [
      [
        "Experience the captivating beauty and rich cultural heritage of Sri Lanka with our meticulously crafted honeymoon itinerary.",
        "Indulge in the enchanting allure of Sri Lanka with our meticulously crafted honeymoon tours. From pristine beaches to lush tea plantations and ancient cultural treasures, embark on a journey of romance and discovery in this tropical paradise. Picture yourself strolling hand in hand along golden shores, savoring intimate candlelit dinners, and creating timeless memories amidst breathtaking landscapes. Let us curate the perfect honeymoon experience where every moment is imbued with love, luxury, and unparalleled beauty.",
      ],
      [
        "Discover the diverse beauty of Sri Lanka with our 9-night honeymoon itinerary. From the historical marvels of Sigiriya to the serene tea country of Nuwara Eliya, and the golden beaches of Bentota, this tour promises a romantic and adventurous escape. Enjoy luxurious accommodations, breathtaking scenery, and immersive cultural experiences.",
      ],
      [
        "Experience the ultimate romantic adventure with our 13-night honeymoon itinerary. This journey takes you through Sri Lanka's most iconic destinations, from ancient cultural sites to lush tea plantations and thrilling safaris, culminating in a relaxing beach escape.",
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["5 Star Accommodation", "All transportation in destination location",],
      [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      ["5 Star Accommodation", "All transportation in destination location"],
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
        "Arrival Colombo",
        "Transfer to Kandy",
        "Explore Kandy",
        "Scenic Train Ride to Nuwara Eliya",
        "Explore Nuwara Eliya",
        "Transfer to Bentota",
        "Departure from Colombo",
      ],
      [
        "Arrival Colombo",
        "Transfer to Sigiriya",
        " Explore Sigiriya",
        "Transfer to Kandy",
        "Explore Kandy",
        "Scenic Train Ride to Nuwara Eliya",
        " Explore Nuwara Eliya",
        " Transfer to Bentota",
        "Leisure Day in Bentota",
        "Departure from Colombo",
      ],
      [
        "Arrival Colombo",
        "Transfer to Sigiriya",
        " Explore Sigiriya",
        "Transfer to Kandy",
        "Explore Kandy",
        "Scenic Train Ride to Nuwara Eliya",
        " Explore Nuwara Eliya",
        " Transfer to Ella",
        "Explore Ella",
        "Transfer to Yala",
        "Safari in Yala",
        " Transfer to Bentota",
        "Leisure Day in Bentota",
        "Departure from Colombo",
      ],
    ],
    TourText: [
      [
        [
          "Upon arrival at Bandaranaike International Airport, you will be transferred to Negombo, a beachside town near Colombo. Relax and unwind at your hotel, enjoying a romantic dinner by the beach. Colombo, the bustling capital city, offers a mix of modern attractions and historical landmarks. Explore the vibrant Galle Face Green, visit the iconic Lotus Tower for panoramic views, and immerse yourself in the colonial charm of the Dutch Hospital shopping precinct​.",
        ],
        [
          "In the morning, transfer to Kandy, stopping at the Pinnawala Elephant Orphanage en route. Once in Kandy, check-in at a luxury hotel and visit the sacred Temple of the Tooth, a UNESCO World Heritage site. Kandy is renowned for its lush landscapes and vibrant cultural heritage, making it a must-visit destination for couples seeking both adventure and tranquility​.",
        ],
        [
          "Spend the day exploring Kandy's scenic attractions, including the Royal Botanical Gardens and a couple's spa treatment. In the evening, enjoy a traditional cultural show, showcasing the rich dance and music heritage of Sri Lanka.",
        ],
        [
          "Embark on a picturesque train ride to Nuwara Eliya, known for its cool climate and colonial charm. Check-in at a colonial-style hotel and visit a tea plantation and factory to learn about the island's famous Ceylon tea. Enjoy the serene beauty of Gregory Lake and the Hakgala Botanical Gardens​​.",
        ],
        [
          "Continue your exploration of Nuwara Eliya, taking a romantic boat ride on Gregory Lake and enjoying the lush surroundings. This day offers a perfect blend of relaxation and exploration in one of Sri Lanka's most picturesque towns​ .",
        ],
        [
          "In the morning, transfer to Bentota, a coastal town known for its stunning beaches and luxury resorts. Check-in at a beach resort and indulge in water sports or simply relax on the beach. Conclude your day with a private beach dinner, creating unforgettable memories under the stars​ .",
        ],
        [
          "Spend your final morning at leisure in Bentota, then transfer back to Colombo for last-minute shopping or sightseeing. In the evening, depart from Bandaranaike International Airport, bringing your romantic honeymoon to a close​ ​.",
        ],
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Negombo. Unwind at the hotel with a romantic beachside dinner.",
        ],
        [
          "Head to Sigiriya and check-in at a luxury resort. In the evening, visit Pidurangala Rock for stunning sunset views.",
        ],
        [
          "Explore the iconic Sigiriya Rock Fortress and the nearby Dambulla Cave Temple, renowned for its ancient Buddhist murals and statues.",
        ],
        [
          "Travel to Kandy, stopping at the Spice Garden in Matale. Check-in at a luxury hotel and visit the Temple of the Tooth.",
        ],
        [
          "Visit the Peradeniya Botanical Gardens and enjoy a couple's spa treatment. In the evening, attend a cultural show.",
        ],
        [
          "Take a scenic train ride to Nuwara Eliya. Visit a tea plantation and factory, then relax at your colonial-style hotel.",
        ],
        [
          "Spend the day exploring Gregory Lake and Hakgala Botanical Gardens. Enjoy a romantic evening with a boat ride on Gregory Lake.",
        ],
        [
          "Travel to Bentota and check-in at a luxury beach resort. Spend the afternoon enjoying water sports or relaxing on the beach.",
        ],
        [
          "Relax on the beach and indulge in a private beach dinner in the evening.",
        ],
        [
          "Enjoy leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport.",
        ],
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Negombo. Unwind at the hotel with a romantic beachside dinner.",
        ],
        [
          "Head to Sigiriya and check-in at a luxury resort. In the evening, visit Pidurangala Rock for stunning sunset views.",
        ],
        [
          "Explore the iconic Sigiriya Rock Fortress and the nearby Dambulla Cave Temple, renowned for its ancient Buddhist murals and statues.",
        ],
        [
          "Travel to Kandy, stopping at the Spice Garden in Matale. Check-in at a luxury hotel and visit the Temple of the Tooth.",
        ],
        [
          "Visit the Peradeniya Botanical Gardens and enjoy a couple's spa treatment. In the evening, attend a cultural show.",
        ],
        [
          "Take a scenic train ride to Nuwara Eliya. Visit a tea plantation and factory, then relax at your colonial-style hotel.",
        ],
        [
          "Spend the day exploring Gregory Lake and Hakgala Botanical Gardens. Enjoy a romantic evening with a boat ride on Gregory Lake.",
        ],
        [
          "Travel to Ella and check-in at a boutique hotel. Visit Nine Arches Bridge. Relax at the hotel in the evening.",
        ],
        [
          "Visit Little Adam's Peak and Ravana Falls. Return to the hotel in the evening.",
        ],
        [
          "Travel to Yala and check-in at a luxury safari lodge. Enjoy a sunset safari drive.",
        ],
        [
          "Full-day safari in Yala National Park with a picnic lunch in the park. Return to the lodge for dinner in the evening.",
        ],
        [
          "Travel to Bentota and check-in at a luxury beach resort. Spend the afternoon enjoying water sports or relaxing on the beach.",
        ],
        [
          "Relax on the beach and indulge in a private beach dinner in the evening.",
        ],
        [
          "Enjoy leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport.",
        ],
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
    imageUrlh: "/Tourpackage/2.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
    descriptionhid:"hidden",
    itinerary: [
      "6-Night Luxury Itinerary: Colombo, Kandy, Hatton, Yala, Thalp",
      "9-Night Luxury Itinerary: Colombo, Wilpattu, Anuradhapura, Kandy, Nuwara Eliya, Negombo",
      "13-Night Luxury Itinerary: Colombo, Wilpattu, Anuradhapura, Kandy, Nuwara Eliya, Bentota" 
    ],
    infotext: [
      [
        "Experience the epitome of opulence and refinement with our bespoke 6-night luxury tour in Sri Lanka. Immerse yourself in lavish comforts, indulge in gourmet cuisine, and embark on exclusive experiences tailored to your discerning tastes. From private safaris in untamed wilderness to serene spa retreats and cultural immersion in ancient cities, our luxury tour promises a journey of indulgence and sophistication where every detail is meticulously curated to exceed your expectations.",
      ],
      [
    "Embark on a luxurious journey through Sri Lanka with our 9-night luxury itinerary. This tour combines the rich cultural heritage of ancient cities, the serene beauty of tea plantations, and the tranquility of pristine beaches. Indulge in the finest accommodations, gourmet dining, and exclusive experiences tailored to create unforgettable memories."
      ],
      [
     "Immerse yourself in the lavish comforts and exclusive experiences of our 13-night luxury tour in Sri Lanka. From ancient cultural landmarks and lush tea estates to thrilling wildlife safaris and idyllic beach retreats, this tour offers a comprehensive and luxurious exploration of the island’s most captivating destinations. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["5 Star Accommodation", "All transportation in destination location", " Fine dining and private dinners"],
      [
        "5 Star Accommodation",
        "All transportation in destination location",
         " Fine dining and private dinners"
      ],
      ["5 Star Accommodation", "All transportation in destination location"," Fine dining and private dinners"],
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
        "Arrival Colombo",
        "Colombo to Kandy",
        "Kandy to Hatton",
        " Hatton to Yala",
        "Yala Safari",
        "Yala to Thalpe",
        " Departure from Colombo",
      ],
      [
        "Arrival Colombo",
        "Colombo to Wilpattu",
        "Wilpattu Safari",
        "Wilpattu to Anuradhapura",
        "Anuradhapura to Kandy",
        " Kandy to Nuwara Eliya",
        " Explore Nuwara Eliya",
        " Nuwara Eliya to Negombo",
        "Negombo to Colombo",
        
      ],
      [
        "Arrival Colombo",
        " Colombo to Wilpattu",
        "Wilpattu Safari",
        "Wilpattu to Anuradhapura",
        " Explore Anuradhapura",
        "Anuradhapura to Kandy",
        "Explore Kandy",
        " Kandy to Nuwara Eliya",
        
        "Explore Nuwara Eliya",
        "Nuwara Eliya to Bentota",
        "Leisure Day in Bentota",
        " Explore Bentota",
        " Bentota to Colombo",
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, enjoy fine dining at a renowned restaurant and explore the vibrant nightlife.",
        ],
        [
          "Transfer to Kandy in a private car, visiting the Pinnawala Elephant Orphanage en route. Check-in at a luxury hotel and visit the Temple of the Tooth. Enjoy a private dinner overlooking Kandy Lake in the evening.",
        ],
        [
          "Take a scenic train ride or private transfer to Hatton. Check-in at a luxury tea estate, followed by a tea estate tour and tasting. Relax and enjoy the amenities of the estate in the evening.",
        ],
        [
          "Transfer to Yala and check-in at a luxury safari lodge. Enjoy leisure time at the lodge in the afternoon, followed by a sunset safari drive.",
        ],
        [
          "Spend the entire day on a safari in Yala National Park, spotting leopards, elephants, and other wildlife. Enjoy a picnic lunch in the park and return to the lodge for dinner in the evening",
        ],
        [
          "Transfer to Thalpe and check-in at a luxury beach villa. Spend the afternoon relaxing on the beach or enjoying water activities. In the evening, indulge in a private beachside dinner.",
        ],
        [
          "Enjoy leisure time at the villa before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport.",
        ],
      ],
      [
        [
     "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, enjoy fine dining at a renowned restaurant."
        ],
        [
    "Transfer to Wilpattu and check-in at a luxury safari camp. Enjoy an afternoon safari drive and dinner at the camp."
        ],
        [
   "Spend the day on a full-day safari in Wilpattu National Park. Enjoy a picnic lunch in the park and return to the camp for dinner in the evening."
        ],
        [
   "Transfer to Anuradhapura and check-in at a luxury hotel. Explore the ancient city of Anuradhapura in the afternoon and enjoy dinner at the hotel in the evening."
        ],
        [
   "Transfer to Kandy and check-in at a luxury hotel. Visit the Temple of the Tooth and explore Kandy city. Enjoy a private dinner overlooking Kandy Lake in the evening."
        ],
        [
   "Take a scenic train ride or private transfer to Nuwara Eliya. Check-in at a luxury colonial-style hotel. Tour a tea plantation and enjoy a private tea tasting. Relax at the hotel in the evening."
        ],
        [
    "Spend the day exploring Gregory Lake and Hakgala Botanical Gardens. Enjoy a private boat ride on Gregory Lake in the evening."
        ],
        [
    "Transfer to Negombo and check-in at a luxury beach resort. Relax on the beach or enjoy a spa treatment in the afternoon. Indulge in a private beachside dinner in the evening."
        ],
        [
      "Enjoy leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ],
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, enjoy fine dining at a renowned restaurant. "
        ],
        [
          "Transfer to Wilpattu and check-in at a luxury safari camp. Enjoy a safari drive and dinner at the camp in the evening "
        ],
        [
          "Spend the day on a full-day safari in Wilpattu National Park. Enjoy a picnic lunch in the park and return to the camp for dinner in the evening. "
        ],
        [
          "Transfer to Anuradhapura and check-in at a luxury hotel. Explore the ancient city of Anuradhapura in the afternoon and enjoy dinner at the hotel in the evening. "
        ],
        [
          "Continue exploring the ancient city of Anuradhapura and its surroundings. Enjoy dinner at the hotel in the evening. "
        ],
        [
          "Transfer to Kandy, visiting the Spice Garden in Matale en route. Check-in at a luxury hotel and enjoy a private dinner overlooking Kandy Lake in the evening. "
        ],
        [
          "Visit the Temple of the Tooth, Peradeniya Botanical Gardens, and enjoy a couple's spa treatment. Attend a cultural show in the evening. "
        ],
        [
          "Take a scenic train ride or private transfer to Nuwara Eliya. Check-in at a luxury colonial-style hotel. Tour a tea plantation and enjoy a private tea tasting. Relax at the hotel in the evening. "
        ],
        [
          "Spend the day exploring Gregory Lake and Hakgala Botanical Gardens. Enjoy a private boat ride on Gregory Lake in the evening. "
        ],
        [
          "Transfer to Bentota and check-in at a luxury beach resort. Relax and enjoy the amenities of the resort in the evening. "
        ],
        [
          "Spend the day enjoying the beach and optional water sports. Indulge in a private beach dinner in the evening. "
        ],
        [
          "Visit nearby attractions like the Brief Garden and enjoy a sunset cruise. Return to the resort for a relaxing evening. "
        ],
        [
          "Enjoy leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport "
        ],
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
    imageUrlh: "/Tourpackage/3.png",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
    descriptionhid:"hidden",
      itinerary: [
      "6-Night Ramayana Tour Itinerary: Colombo, Chilaw, Kandy, Nuwara Eliya, Ella, Kataragama",
      "9-Night Ramayana Tour Itinerary: Colombo, Chilaw, Kandy, Nuwara Eliya, Ella, Kataragama, Yala",
      "13-Night Ramayana Tour Itinerary: Colombo, Chilaw, Kandy, Nuwara Eliya, Ella, Kataragama, Yala, Bentota",
    ],
    infotext: [
      [
        "Delve into the rich tapestry of Sri Lanka's spiritual heritage with our immersive 6-night Ramayana tour. Follow in the footsteps of ancient legends as you visit sacred temples, mythical caves, and hallowed sites steeped in mythology. Trace the epic saga of Lord Rama and Goddess Sita, exploring ancient kingdoms, revered shrines, and enchanting landscapes that echo with tales of devotion and valor. Let our expert guides unveil the timeless wonders of Ramayana, offering a profound journey of enlightenment and discovery. "
      ],
      [
        "Embark on an enlightening journey through Sri Lanka with our 9-night Ramayana tour. This itinerary takes you to sacred temples, enchanting landscapes, and mythical sites, unraveling the epic tale of Lord Rama and Goddess Sita. Enjoy luxurious accommodations and expert-guided tours, creating a profound and spiritual experience. "
      ],
      [
        "Immerse yourself in the spiritual and cultural wonders of Sri Lanka with our 13-night Ramayana tour. This extensive itinerary covers all significant Ramayana sites, providing a comprehensive and enriching experience. Enjoy luxurious accommodations, expert-guided tours, and exclusive experiences, making this journey truly unforgettable. "
      ],
    
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["5 Star Accommodation", "All transportation in destination location", " Visits to temples and sacred sites, Safari in Yala National Park"],
      [
        "5 Star Accommodation",
        "All transportation in destination location",
         "Visits to temples and sacred sites, Safari in Yala National Park",
      ],
      ["5 Star Accommodation", "All transportation in destination location"," Visits to temples and sacred sites, Safari in Yala National Park"],
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
        "Arrival Colombo",
        " Colombo to Chilaw to Kandy",
        " Kandy to Nuwara Eliya",
        " Nuwara Eliya to Ella",
        "Ella to Kataragama",
        "Kataragama to Colombo",
        "Departure from Colombo",
      
      ],
      [
        "Arrival Colombo",
        " Colombo to Chilaw to Kandy ",
        "Explore Kandy ",
        " Kandy to Nuwara Eliya ",
        " Nuwara Eliya to Ella",
        " Ella to Kataragama",
        "  Kataragama to Yala",
        "Safari in Yala ",
        "Yala to Colombo ",
        "Departure from Colombo ",
        
      ],
      [
        "Arrival Colombo",
        " Colombo to Chilaw to Kandy ",
        "Explore Kandy ",
        " Kandy to Nuwara Eliya ",
        " Explore Nuwara Eliya",
        " Nuwara Eliya to Ella",
        "Explore Ella",
        " Ella to Kataragama",
        "  Kataragama to Yala",
        "Safari in Yala ",
        "Yala to Galle to Bentota ",
        " Leisure Day in Bentota ",
        "Bentota to Colombo",
        "Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
       [
        "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, visit Munneswaram Temple and Manavari Temple. "
      ],
       [
        "Visit Munneswaram Temple in the morning, then proceed to Manavari Temple. In the afternoon, transfer to Kandy. Check-in at a luxury hotel and visit the Temple of the Tooth in the evening. "
      ],
       [
        "Visit the Botanical Gardens at Peradeniya in the morning. Take a scenic train ride or private transfer to Nuwara Eliya in the afternoon. Check-in at a colonial-style luxury hotel and visit Sita Amman Temple in the evening "
      ],
       [
        "Visit Divurumpola Temple in the morning. Transfer to Ella in the afternoon and check-in at a boutique hotel. Visit Ravana Ella Falls in the evening. "
      ],
       [
        "isit Ravana Cave in the morning. Transfer to Kataragama in the afternoon and check-in at a luxury hotel. Visit Kataragama Temple in the evening. "
      ],
       [
        "Visit Ussangoda in the morning. Transfer to Colombo in the afternoon and check-in at a five-star hotel. Enjoy last-minute shopping or sightseeing in Colombo in the evening "
      ],
       [
        "Enjoy leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
      ],
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, visit Munneswaram Temple and Manavari Temple."
        ],
        [
          "Visit Munneswaram Temple in the morning, then proceed to Manavari Temple. Transfer to Kandy in the afternoon, check-in at a luxury hotel, and visit the Temple of the Tooth in the evening."
        ],
        [
          "Visit Hanuman Temple at Ramboda in the morning and the Botanical Gardens at Peradeniya in the afternoon. Return to the hotel for a traditional cultural show in the evening."
        ],
        [
          "Take a scenic train ride or private transfer to Nuwara Eliya in the morning. Check-in at a colonial-style luxury hotel and visit Sita Amman Temple and Hakgala Botanical Gardens in the afternoon."
        ],
        [
          "Visit Divurumpola Temple in the morning. Transfer to Ella in the afternoon and check-in at a boutique hotel. Visit Ravana Ella Falls in the evening."
        ],
        [
          "Visit Ravana Cave in the morning. Transfer to Kataragama in the afternoon and check-in at a luxury hotel. Visit Kataragama Temple in the evening."
        ],
        [
          "Visit Ussangoda in the morning. Transfer to Yala in the afternoon and check-in at a luxury safari lodge. Enjoy a sunset safari drive in Yala National Park."
        ],
        [
          "Spend the day on a full-day safari in Yala National Park, spotting leopards, elephants, and other wildlife. Enjoy a picnic lunch in the park and return to the lodge for dinner in the evening."
        ],
        [
          "Transfer to Colombo in the morning and check-in at a five-star hotel. Enjoy last-minute shopping or sightseeing in Colombo in the afternoon. Have a farewell dinner at a renowned restaurant in the evening."
        ],
        [
          "Enjoy leisure time at the hotel before transferring to Bandaranaike International Airport for departure."
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a five-star hotel. In the evening, visit Munneswaram Temple and Manavari Temple."
       ],
        [
          "Visit Munneswaram Temple in the morning, then proceed to Manavari Temple. Transfer to Kandy in the afternoon, check-in at a luxury hotel, and visit the Temple of the Tooth in the evening."
       ],
        [
          "Visit Hanuman Temple at Ramboda in the morning and the Botanical Gardens at Peradeniya in the afternoon. Return to the hotel for a traditional cultural show in the evening."
       ],
        [
          "Take a scenic train ride or private transfer to Nuwara Eliya in the morning. Check-in at a colonial-style luxury hotel and visit Sita Amman Temple and Hakgala Botanical Gardens in the afternoon."
       ],
        [
          "Visit Divurumpola Temple in the morning. Explore the beautiful landscapes of Nuwara Eliya in the afternoon. Return to the hotel for dinner in the evening."
       ],
        [
          "Take a scenic train ride to Ella in the morning. Check-in at a boutique hotel. Visit Ravana Ella Falls in the afternoon and relax at the hotel in the evening."
       ],
        [
          "Visit Ravana Cave in the morning. Explore Little Adam's Peak in the afternoon. Return to the hotel for a relaxing evening."
       ],
        [
          "Transfer to Kataragama in the morning. Check-in at a luxury hotel. Visit Ussangoda in the afternoon and Kataragama Temple in the evening."
       ],
        [
          "Transfer to Yala in the morning. Check-in at a luxury safari lodge. Enjoy a sunset safari drive in Yala National Park in the afternoon."
       ],
        [
          "Spend the day on a full-day safari in Yala National Park, spotting leopards, elephants, and other wildlife. Enjoy a picnic lunch in the park and return to the lodge for dinner in the evening."
       ],
        [
          "Transfer to Galle in the morning and visit the historic Galle Fort. Continue to Bentota in the afternoon and check-in at a luxury beach resort. Relax on the beach in the evening."
       ],
        [
          "Spend the day enjoying water sports or a spa treatment. Visit Brief Garden or take a boat ride on the Madu River in the afternoon. Indulge in a private beachside dinner in the evening."
       ],
        [
          "Enjoy leisure time at the resort in the morning. Transfer to Colombo for last-minute shopping or sightseeing in the afternoon. Have a farewell dinner at a renowned restaurant in the evening."
       ],
        [
          "Enjoy leisure time at the hotel before transferring to Bandaranaike International Airport for departure."
       ],
    
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
    imageUrlh: "/Tourpackage/4.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "7-Night Wellness Tour Itinerary: Colombo, Negombo, Kandy, Nuwara Eliya ", 
       "14-Night Wellness Tour Itinerary: Negombo, Kandy, Nuwara Eliya, Ella, Colombo ", 
       "21-Night Wellness Tour Itinerary: Negombo, Kandy, Nuwara Eliya, Ella, Colombo ", 
    ],
    infotext: [
     [
       " Embark on a transformative journey of rejuvenation and well-being with our serene 7-night wellness tour in Sri Lanka. Escape the stresses of modern life and reconnect with your inner harmony amidst the tranquil beauty of nature. Immerse yourself in holistic wellness practices, from Ayurvedic treatments and yoga retreats to meditation sessions and organic cuisine. Surrender to the healing rhythms of the island, where ancient traditions and natural therapies converge to revitalize your body, mind, and spirit. Experience a profound sense of renewal and vitality as you embark on a wellness journey like no other."
      ],
     [
       "Immerse yourself in a comprehensive wellness journey with our 14-night wellness tour in Sri Lanka. This itinerary combines the best of Ayurvedic treatments, yoga sessions, meditation practices, and holistic wellness experiences. From the beaches of Negombo to the lush hills of Kandy and Nuwara Eliya, and the scenic beauty of Ella, this tour offers the perfect setting for rejuvenation and relaxation. "
      ],
     [
       "Embark on an extended wellness journey with our 21-night wellness tour in Sri Lanka. This extensive itinerary offers a deep and transformative experience, combining Ayurvedic treatments, yoga and meditation practices, and holistic wellness activities across the most serene and beautiful locations in Sri Lanka. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Wellness resort accommodations", "All transportation in destination location", "  Daily Ayurvedic treatments", "Yoga and meditation sessions" , "Ayurvedic consultation and cooking class"],
     
      ["Wellness resort accommodations", "All transportation in destination location", "  Daily Ayurvedic treatments", "Yoga and meditation sessions" , "Ayurvedic consultation and cooking class"],
     
      ["Wellness resort accommodations", "All transportation in destination location", "  Daily Ayurvedic treatments", "Yoga and meditation sessions" , "Ayurvedic consultation and cooking class"],
     
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       " Day 1: Arrival in Colombo",
       " Day 2-3: Wellness Program in Negombo",
       " Day 4-5: Wellness Retreat in Kandy",
       " Day 6: Scenic Drive to Nuwara Eliya ",
       " Day 7: Final Wellness Activities and Relaxation",
       
      
      
      ],
      [

       " Day 1-7: Wellness Retreat in Negombo ",
       "Day 8-10: Wellness Experiences in Kandy",
       "Day 11-14: Serenity in Nuwara Eliya ",
       "Day 15: Transfer to Ella",
       " Day 16-17: Wellness Activities in Ella ",
       "Day 18: Final Wellness Activities in Colombo ",
      
        
      ],
      [
        "Day 1-10: Comprehensive Wellness in Negombo",
        "Day 11-14: Continued Wellness in Kandy ",
        "Day 15-18: Deep Relaxation in Nuwara Eliya ",
        "Day 19: Tranquility in Ella ",
        "Day 22: Final Wellness Activities in Colombo ",
        
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Negombo. Check-in at a wellness resort and relax and unwind at the resort. Enjoy a welcome Ayurvedic consultation. "
        ],
        [
          "Begin your wellness program with daily Ayurvedic treatments and therapies. Participate in morning yoga sessions, Ayurvedic massages, and herbal baths. Continue with personalized wellness activities and treatments, including meditation and pranayama sessions, as well as an Ayurvedic cooking class. "
        ],
        [
          "Transfer to Kandy and check-in at a wellness retreat. Immerse yourself in holistic wellness experiences, including yoga and mindfulness sessions amidst nature, detoxifying spa treatments, and wellness consultations. "
        ],
        [
          "Enjoy a scenic drive to Nuwara Eliya and check-in at a wellness hotel. Relax with a cup of Ceylon tea and enjoy the serene ambiance of the tea country. "
        ],
        [
          "Transfer back to Colombo in the morning. Participate in final wellness activities and relaxation in the afternoon. Departure from Bandaranaike International Airport feeling rejuvenated and refreshed. "
        ],
       
      ],
      [
        [
          "Check-in at a wellness resort in Negombo for the first seven days. Enjoy daily Ayurvedic treatments, including massages, herbal therapies, and detoxification. Participate in yoga and meditation sessions to promote relaxation and inner balance. Receive nutritional counseling and participate in Ayurvedic cooking classes. Leisure time allows you to enjoy the beach and serene surroundings. "
        ],
        [
          "Transfer to Kandy and check-in at a wellness retreat. Continue your wellness program with personalized treatments and activities, including yoga and mindfulness sessions, detoxifying spa treatments, and wellness consultations. "
        ],
        [
          "Enjoy a scenic drive to Nuwara Eliya and check-in at a wellness hotel. Embrace the tranquility of the tea country with daily yoga and meditation sessions. Indulge in therapeutic spa treatments amidst the lush greenery. Participate in nature walks and wellness workshops. "
        ],
        [
          "Transfer to Ella in the morning and check-in at a wellness resort. Relax and unwind amidst the picturesque landscapes of Ella in the afternoon. "
        ],
        [
          "Immerse yourself in wellness activities, including yoga sessions overlooking the mountains and nature walks to scenic viewpoints. Enjoy holistic healing therapies and relaxation in the serene surroundings. "
        ],
        [
          "Transfer back to Colombo in the morning. Participate in final wellness rituals and relaxation in the afternoon. Departure from Bandaranaike International Airport feeling revitalized and balanced. "
        ],
        
       
      ],
      [
        [
          "Check-in at a wellness resort in Negombo for the first ten days. Receive comprehensive Ayurvedic treatments focusing on rejuvenation and detoxification. Participate in daily yoga, meditation, and pranayama sessions for holistic well-being. Engage in nutritional counseling and cooking workshops to promote healthy eating habits. Enjoy leisure time to explore the beach and engage in recreational activities. "
        ],
        [
          "Transfer to Kandy and check-in at a wellness retreat. Continue your wellness journey with specialized treatments and therapies, including yoga and mindfulness sessions, detoxifying spa treatments, and wellness consultations. "
        ],
        [
          "Enjoy a scenic drive to Nuwara Eliya and check-in at a wellness hotel. Deepen your relaxation with daily yoga, meditation, and nature walks. Indulge in luxurious spa experiences amidst the serene tea plantations. "
        ],
        [
          "Transfer to Ella in the morning and check-in at a wellness resort. Relax and rejuvenate amidst the tranquil surroundings of Ella in the afternoon. "
        ],
        [
          "Continue your wellness journey in Ella with yoga sessions amidst nature's beauty, wellness workshops, and holistic healing therapies. Participate in nature walks and enjoy the serene landscapes. "
        ],
        [
          "Transfer back to Colombo in the morning. Participate in final wellness activities and relaxation in the afternoon. Departure from Bandaranaike International Airport feeling completely renewed and invigorated. "
        ],
       
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
    hiddenText:"hidden"
  },
  {
    id: 5,
    title: "Family Tours",
    imageUrlh: "/Tourpackage/5.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Family Tour Itinerary: Colombo, Pinnawala, Kandy, Nuwara Eliya, Bentota ", 
       "9-Night Family Tour Itinerary: Colombo, Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota ", 
       " 13-Night Family Tour Itinerary: Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Bentota", 
    ],
    infotext: [
     [
       "Embark on a family-friendly adventure through Sri Lanka with our 6-night family tour. This itinerary is designed to provide a perfect blend of cultural exploration, scenic beauty, and fun activities for all ages. Enjoy quality time with your loved ones while discovering the wonders of Sri Lanka. "
      ],
     [
       "Enjoy a memorable family holiday in Sri Lanka with our 9-night family tour. This itinerary is filled with engaging activities and visits to iconic destinations, ensuring a fun and enriching experience for all family members."
      ],
     [
       "Experience the ultimate family adventure in Sri Lanka with our 13-night family tour. This extensive itinerary covers a wide range of attractions and activities, ensuring a fun-filled and educational journey for all ages. From historical sites and cultural experiences to wildlife safaris and beach relaxation, this tour offers something for every member of the family. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Family-friendly accommodations", "All transportation in destination location", " Activities and excursions as per itinerary "],
    
      ["Family-friendly accommodations", "All transportation in destination location", " Activities and excursions as per itinerary "],
    
      ["Family-friendly accommodations", "All transportation in destination location", " Activities and excursions as per itinerary "],
    
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
        "Arrival Colombo",
        "Colombo to Pinnawala to Kandy ",
        "Explore Kandy ",
        "Scenic Train Ride to Nuwara Eliya ",
        " Explore Nuwara Eliya",
        " Transfer to Bentota ",
        " Departure from Colombo",
      
       
      ],
      [
       "Arrival in Colombo ",
       
       " Colombo to Sigiriya ",
       " Explore Sigiriya and Dambulla ",
       "Sigiriya to Kandy ",
       " Explore Kandy",
       "Scenic Train Ride to Nuwara Eliya",
       "Nuwara Eliya to Yala ",
       "Yala to Bentota ",
       "Leisure Day in Bentota ",
       "Departure from Colombo ",
       
        
      ],
      [
        "Arrival in Colombo",
        "Colombo to Sigiriya ",
        "Sigiriya to Kandy ",
        "Explore Kandy ",
        " Scenic Train Ride to Nuwara Eliya ",
        " Explore Nuwara Eliya ",
        " Nuwara Eliya to Ella ",
        "Explore Ella ",
        "Ella to Yala ",
        "Yala to Bentota ",
        " Leisure Day in Bentota ",
        "Explore Bentota ",
        "Departure from Colombo ",
       
       ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a family-friendly hotel. Spend the afternoon exploring Colombo's key attractions, including Galle Face Green, and enjoy a family dinner at a local restaurant. "
        ],
        [
          "Travel to Pinnawala to visit the Elephant Orphanage and witness feeding and bathing times. Continue to Kandy and check-in at a family-friendly hotel. Visit the Temple of the Tooth and enjoy an evening cultural show. "
        ],
        [
          "Explore the Royal Botanical Gardens in the morning, perfect for a family picnic. Visit the Kandy Lake and surrounding areas. Spend the afternoon at leisure exploring local markets and shops. "
        ],
        [
          "Take a scenic train ride to Nuwara Eliya, an enjoyable experience for the whole family. Check-in at a family-friendly hotel. Visit a tea plantation and factory, then explore Victoria Park. "
        ],
        [
          "Visit Gregory Lake, where you can enjoy boating and other activities. Explore Hakgala Botanical Gardens and take in the beautiful surroundings. Spend the evening at leisure at the hotel. "
        ],
        [
          "Travel to Bentota and check-in at a beach resort. Spend the afternoon enjoying water sports or relaxing on the beach. Enjoy a family beachside dinner in the evening. "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."

        ]
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a family-friendly hotel. Explore Colombo's main attractions and enjoy a family dinner at a local restaurant. "
        ],
        [
          "Travel to Sigiriya and check-in at a family-friendly resort. Visit the Sigiriya Rock Fortress and explore the surrounding gardens. Enjoy a family dinner at the resort. "
        ],
        [
          "Visit the Dambulla Cave Temple in the morning, known for its impressive Buddha statues and murals. Spend the afternoon at the Minneriya National Park for a safari, spotting elephants and other wildlife "
        ],
        [
          "Travel to Kandy, stopping at the Spice Garden in Matale. Check-in at a family-friendly hotel. Visit the Temple of the Tooth and enjoy an evening cultural show. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. Visit local markets and shops. Spend the afternoon at leisure, enjoying the hotel amenities. "
        ],
        [
          "Take a scenic train ride to Nuwara Eliya, an enjoyable experience for the whole family. Check-in at a family-friendly hotel. Visit a tea plantation and factory, then explore Victoria Park. "
        ],
        [
          "Travel to Yala and check-in at a safari lodge. Enjoy an evening safari in Yala National Park, spotting leopards, elephants, and other wildlife. "
        ],
        [
          "Travel to Bentota and check-in at a beach resort. Spend the afternoon enjoying water sports or relaxing on the beach. Enjoy a family beachside dinner in the evening. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Take a boat ride on the Madu River or visit the Turtle Hatchery. Enjoy a farewell dinner at the resort. "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a family-friendly hotel. Spend the afternoon exploring Colombo's key attractions and enjoy a family dinner at a local restaurant. "
        ],
        [
          "Travel to Sigiriya and check-in at a family-friendly resort. Visit the Sigiriya Rock Fortress and explore the surrounding gardens. Enjoy a family dinner at the resort. "
        ],
        [
          "Visit the Dambulla Cave Temple in the morning, known for its impressive Buddha statues and murals. Spend the afternoon at the Minneriya National Park for a safari, spotting elephants and other wildlife. "
        ],
        [
          "Travel to Kandy, stopping at the Spice Garden in Matale. Check-in at a family-friendly hotel. Visit the Temple of the Tooth and enjoy an evening cultural show. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. Visit local markets and shops. Spend the afternoon at leisure, enjoying the hotel amenities. "
        ],
        [
          "Take a scenic train ride to Nuwara Eliya, an enjoyable experience for the whole family. Check-in at a family-friendly hotel. Visit a tea plantation and factory, then explore Victoria Park. "
        ],
        [
          "Visit Gregory Lake, where you can enjoy boating and other activities. Explore Hakgala Botanical Gardens and take in the beautiful surroundings. Spend the evening at leisure at the hotel. "
        ],
        [
          "Travel to Ella and check-in at a boutique hotel. Visit Nine Arches Bridge and Little Adam's Peak. Relax at the hotel in the evening. "
        ],
        [
          "Visit Ravana Falls and Ravana Cave. Enjoy a family hike and explore the scenic beauty of Ella. "
        ],
        [
          "Travel to Yala and check-in at a safari lodge. Enjoy an evening safari in Yala National Park, spotting leopards, elephants, and other wildlife. "
        ],
        [
          "Travel to Bentota and check-in at a beach resort. Spend the afternoon enjoying water sports or relaxing on the beach. Enjoy a family beachside dinner in the evening. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Take a boat ride on the Madu River or visit the Turtle Hatchery. Enjoy a farewell dinner at the resort. "
        ],
        [
          "Visit nearby attractions like Brief Garden and enjoy a sunset cruise. Return to the resort for a relaxing evening. "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
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
    imageUrlh: "/Tourpackage/6.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Adventure Tour Itinerary: Colombo, Kitulgala, Kandy, Nuwara Eliya, Yala ", 
       "9-Night Adventure Tour Itinerary: Colombo, Kitulgala, Kandy, Knuckles Range, Ella, Yala ", 
       "13-Night Adventure Tour Itinerary: Colombo, Kitulgala, Kandy, Knuckles Range, Nuwara Eliya, Ella, Yala, Mirissa ", 
    ],
    infotext: [
     [
       "Embark on an exhilarating adventure through Sri Lanka with our 6-night adventure tour. This itinerary is designed for thrill-seekers and nature enthusiasts, offering a mix of adrenaline-pumping activities and breathtaking landscapes. From white-water rafting to wildlife safaris, this tour promises an unforgettable adventure experience "
      ],
     [
       "Experience the thrill of adventure in Sri Lanka with our 9-night adventure tour. This itinerary combines adrenaline-pumping activities with stunning natural landscapes, offering an unforgettable experience for adventure enthusiasts. "
      ],
     [
       "Embark on the ultimate adventure tour through Sri Lanka with our 13-night itinerary. This comprehensive tour offers a mix of thrilling activities and breathtaking landscapes, providing an unforgettable adventure experience for all ages. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Adventure-friendly accommodations", "All transportation in destination location", " White-water rafting, Canyoning, Hiking, Safari "],
      ["Adventure-friendly accommodations", "All transportation in destination location", " White-water rafting, Canyoning, Hiking, Safari,Safari Trekking in Knuckles Range  "],
      ["Adventure-friendly accommodations", "All transportation in destination location", " White-water rafting, Canyoning, Hiking, Whale watching ",""],
     
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
        "Arrival in Colombo ",
        "Colombo to Kitulgala ",
        "Kitulgala to Kandy ",
        "Explore Kandy ",
        "Kandy to Nuwara Eliya ",
        "Nuwara Eliya to Yala ",
        "Departure from Colombo ",
       
         
       ],
      [
       "Arrival in Colombo ",
       "Colombo to Kitulgala ",
       "Kitulgala to Kandy ",
       "Explore Kandy ",
       "Kandy to Knuckles Range ",
       "  Knuckles Range to Ella",
       "Explore Ella ",
       "Ella to Yala ",
       "Yala to Colombo",
       "Departure from Colombo ",
        
      ],
      [
        "Arrival Colombo",
        "  Colombo to Kitulgala",
        " Kitulgala to Kandy ",
        " Explore Kandy ",
        " Kandy to Knuckles Range",
        "  Knuckles Range to Nuwara Eliya",
        " Explore Nuwara Eliya ",
        "  Nuwara Eliya to Ella",
        "Explore Ella ",
        "Ella to Yala ",
        "Yala to Mirissa ",
        "Whale Watching in Mirissa ",
        "Leisure Day in Mirissa ",
        "Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an adventure-friendly hotel. Spend the afternoon exploring Colombo's key attractions, including Galle Face Green, and enjoy a welcome dinner. "
        ],
        [
          "Travel to Kitulgala, the adventure capital of Sri Lanka. Check-in at an adventure camp. Spend the afternoon white-water rafting on the Kelani River, followed by a nature walk through the surrounding jungle. "
        ],
        [
          "In the morning, go canyoning and rock sliding in Kitulgala. Transfer to Kandy in the afternoon and check-in at an adventure-friendly hotel. Visit the Temple of the Tooth in the evening. "
        ],
        [
          " Explore the Royal Botanical Gardens and Kandy Lake. In the afternoon, hike up to the Bahirawakanda Temple for panoramic views of Kandy. Spend the evening at leisure, exploring local markets and shops."
        ],
        [
          "Take a scenic train ride to Nuwara Eliya, an experience filled with breathtaking views. Check-in at an adventure-friendly hotel. Visit a tea plantation and factory, then explore the town of Nuwara Eliya. "
        ],
        [
          "Travel to Yala and check-in at a safari lodge. Enjoy an evening safari in Yala National Park, spotting leopards, elephants, and other wildlife. "
        ],
        [
          "Leisure time at the lodge before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          " Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an adventure-friendly hotel. Spend the afternoon exploring Colombo's key attractions and enjoy a welcome dinner."
        ],
        [
          "Travel to Kitulgala and check-in at an adventure camp. Spend the afternoon white-water rafting on the Kelani River, followed by a nature walk through the jungle. "
        ],
        [
          "in the morning, go canyoning and rock sliding in Kitulgala. Transfer to Kandy in the afternoon and check-in at an adventure-friendly hotel. Visit the Temple of the Tooth in the evening. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. In the afternoon, hike up to the Bahirawakanda Temple for panoramic views of Kandy. Spend the evening at leisure, exploring local markets and shops. "
        ],
        [
          "Travel to the Knuckles Mountain Range for a day of trekking. Explore the diverse flora and fauna of this UNESCO World Heritage site. Check-in at an eco-lodge in the Knuckles Range. "
        ],
        [
          "Take a scenic drive to Ella, known for its stunning landscapes. Check-in at an adventure-friendly hotel. Visit Nine Arches Bridge and Little Adam's Peak in the afternoon. "
        ],
        [
          "Spend the day exploring Ella, including a hike to Ella Rock and a visit to Ravana Falls. Enjoy the scenic beauty and local attractions. "
        ],
        [
          "Travel to Yala and check-in at a safari lodge. Enjoy an evening safari in Yala National Park, spotting leopards, elephants, and other wildlife. "
        ],
        [
          "Transfer to Colombo in the morning. Check-in at a hotel and spend the afternoon exploring the city. Enjoy a farewell dinner in the evening. "
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
        ],
     
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an adventure-friendly hotel. Spend the afternoon exploring Colombo's key attractions and enjoy a welcome dinner. "
        ],
        [
          "Travel to Kitulgala and check-in at an adventure camp. Spend the afternoon white-water rafting on the Kelani River, followed by a nature walk through the jungle. "
        ],
        [
          "In the morning, go canyoning and rock sliding in Kitulgala. Transfer to Kandy in the afternoon and check-in at an adventure-friendly hotel. Visit the Temple of the Tooth in the evening. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. In the afternoon, hike up to the Bahirawakanda Temple for panoramic views of Kandy. Spend the evening at leisure, exploring local markets and shops. "
        ],
        [
          "Travel to the Knuckles Mountain Range for a day of trekking. Explore the diverse flora and fauna of this UNESCO World Heritage site. Check-in at an eco-lodge in the Knuckles Range. "
        ],
        [
          "Take a scenic drive to Nuwara Eliya and check-in at an adventure-friendly hotel. Visit a tea plantation and factory, then explore the town of Nuwara Eliya. "
        ],
        [
          "Spend the day exploring Gregory Lake, where you can enjoy boating and other activities. Visit Hakgala Botanical Gardens and take in the beautiful surroundings. Spend the evening at leisure at the hotel. "
        ],
        [
          "Travel to Ella and check-in at a boutique hotel. Visit Nine Arches Bridge and Little Adam's Peak. Relax at the hotel in the evening. "
        ],
        [
          "Visit Ravana Falls and Ravana Cave. Enjoy a family hike and explore the scenic beauty of Ella. "
        ],
        [
          "Travel to Yala and check-in at a safari lodge. Enjoy an evening safari in Yala National Park, spotting leopards, elephants, and other wildlife. "
        ],
        [
          "Travel to Mirissa and check-in at a beach resort. Spend the afternoon enjoying water sports or relaxing on the beach. Enjoy a family beachside dinner in the evening. "
        ],
        [
          "Spend the day on a whale-watching tour, a thrilling experience for the entire family. Return to the resort in the afternoon and relax on the beach. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Take a boat ride on the Madu River or visit the Turtle Hatchery. Enjoy a farewell dinner at the resort "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
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
    imageUrlh: "/Tourpackage/7.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Cultural Tour Itinerary: Colombo, Anuradhapura, Polonnaruwa, Sigiriya, Kandy ", 
       "9-Night Cultural Tour Itinerary: Colombo, Anuradhapura, Polonnaruwa, Sigiriya, Kandy, Dambulla ", 
       "13-Night Cultural Tour Itinerary: Colombo, Anuradhapura, Polonnaruwa, Sigiriya, Kandy, Nuwara Eliya, Galle ", 
    ],
    infotext: [
     [
       "Immerse yourself in the rich cultural heritage of Sri Lanka with our 6-night cultural tour. Explore ancient cities, magnificent temples, and historical landmarks that tell the story of the island's fascinating past. This tour is perfect for history enthusiasts and those looking to experience Sri Lanka's vibrant culture. "
      ],
     [
       "Discover the cultural treasures of Sri Lanka with our 9-night cultural tour. This itinerary takes you to the island's most significant historical sites and offers a deep dive into its rich heritage and traditions. Perfect for history buffs and cultural enthusiasts, this tour combines educational experiences with immersive cultural activities. "
      ],
     [
       "Experience the full spectrum of Sri Lanka's cultural heritage with our 13-night cultural tour. This extensive itinerary covers the island's most iconic historical and cultural sites, providing a comprehensive and immersive cultural experience. From ancient ruins to colonial architecture, this tour offers a deep dive into Sri Lanka's rich history and diverse traditions. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to cultural sites, Guided tours"],
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to cultural sites, Guided tours"],
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to cultural sites, Guided tours"," Cultural performances"],
     
    ],
    infoNotPriceIncluded: [
      [
       
        "Meals and beverages not specified in the itinerary",
      ],
      [
       
        "Meals and beverages not specified in the itinerary",
      ],
      [
        
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       "Arrival in Colombo ",
       "Colombo to Anuradhapura ",
       " Anuradhapura to Polonnaruwa ",
       " Polonnaruwa to Sigiriya ",
       "Sigiriya to Kandy ",
       " Explore Kandy ",
       "Departure from Colombo",
      
      ],
      [
       "Arrival in Colombo ",
       "Colombo to Anuradhapura ",
       " Anuradhapura to Polonnaruwa ",
       "Explore Polonnaruwa ",
       "Polonnaruwa to Sigiriya ",
       "Sigiriya to Dambulla ",
       "Dambulla to Kandy ",
       "Explore Kandy",
       "Kandy to Colombo ",
       " Departure from Colombo ",
        
      ],
      [
        "Arrival Colombo",
        "Colombo to Anuradhapura ",
        " Explore Anuradhapura ",
        " Anuradhapura to Polonnaruwa ",
        "Explore Polonnaruwa ",
        " Polonnaruwa to Sigiriya ",
        " Sigiriya to Dambulla ",
        "Dambulla to Kandy ",
        "Explore Kandy ",
        "Kandy to Nuwara Eliya ",
        " Nuwara Eliya to Galle ",
        "Explore Galle ",
        " Galle to Colombo ",
        " Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's cultural landmarks, including the National Museum and Gangaramaya Temple. Enjoy a welcome dinner at a local restaurant. "
        ],
        [
          "Travel to Anuradhapura, an ancient city and UNESCO World Heritage site. Check-in at a hotel. Visit key historical sites such as the sacred Bodhi Tree, Ruwanwelisaya Stupa, and the Twin Ponds. "
        ],
        [
          "Transfer to Polonnaruwa and check-in at a hotel. Explore the ancient city of Polonnaruwa, another UNESCO World Heritage site. Visit the Royal Palace, Gal Vihara, and the Lotus Bath. "
        ],
        [
          "Travel to Sigiriya and check-in at a hotel. In the afternoon, visit the Sigiriya Rock Fortress, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          "Transfer to Kandy, stopping at the Dambulla Cave Temple en route. Check-in at a hotel. Visit the Temple of the Tooth in the evening, followed by a cultural show featuring traditional Kandyan dance. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. Visit the Gadaladeniya Temple and Lankatilaka Temple, two important cultural landmarks. Spend the afternoon at leisure, exploring local markets and shops. "
        ],
        [
          "Leisure time at the hotel before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          " Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's cultural landmarks, including the National Museum and Gangaramaya Temple. Enjoy a welcome dinner at a local restaurant."
        ],
        [
          "Travel to Anuradhapura, an ancient city and UNESCO World Heritage site. Check-in at a hotel. Visit key historical sites such as the sacred Bodhi Tree, Ruwanwelisaya Stupa, and the Twin Ponds. "
        ],
        [
          "Transfer to Polonnaruwa and check-in at a hotel. Explore the ancient city of Polonnaruwa, another UNESCO World Heritage site. Visit the Royal Palace, Gal Vihara, and the Lotus Bath. "
        ],
        [
          "Continue exploring Polonnaruwa with visits to the Parakrama Samudra reservoir and the Shiva Devale temples. Enjoy a local cultural performance in the evening. "
        ],
        [
          "Travel to Sigiriya and check-in at a hotel. In the afternoon, visit the Sigiriya Rock Fortress, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          " Transfer to Dambulla and check-in at a hotel. Visit the Dambulla Cave Temple, a UNESCO World Heritage site known for its impressive cave paintings and statues."
        ],
        [
          " Travel to Kandy, stopping at the Matale Spice Garden en route. Check-in at a hotel. Visit the Temple of the Tooth in the evening, followed by a cultural show featuring traditional Kandyan dance."
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. Visit the Gadaladeniya Temple and Lankatilaka Temple, two important cultural landmarks. Spend the afternoon at leisure, exploring local markets and shops. "
        ],
        [
          "Travel back to Colombo and check-in at a hotel. Spend the afternoon exploring Colombo’s Pettah Market and Dutch Hospital Shopping Precinct. Enjoy a farewell dinner at a renowned restaurant. "
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's cultural landmarks, including the National Museum and Gangaramaya Temple. Enjoy a welcome dinner at a local restaurant. "
        ],
        [
          "Travel to Anuradhapura, an ancient city and UNESCO World Heritage site. Check-in at a hotel. Visit key historical sites such as the sacred Bodhi Tree, Ruwanwelisaya Stupa, and the Twin Ponds. "
        ],
        [
          "Continue exploring Anuradhapura with visits to Mihintale, the birthplace of Buddhism in Sri Lanka, and the Abhayagiri Monastery. "
        ],
        [
          "Transfer to Polonnaruwa and check-in at a hotel. Explore the ancient city of Polonnaruwa, another UNESCO World Heritage site. Visit the Royal Palace, Gal Vihara, and the Lotus Bath "
        ],
        [
          "Continue exploring Polonnaruwa with visits to the Parakrama Samudra reservoir and the Shiva Devale temples. Enjoy a local cultural performance in the evening. "
        ],
        [
          "Travel to Sigiriya and check-in at a hotel. In the afternoon, visit the Sigiriya Rock Fortress, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          "Transfer to Dambulla and check-in at a hotel. Visit the Dambulla Cave Temple, a UNESCO World Heritage site known for its impressive cave paintings and statues. "
        ],
        [
          "Travel to Kandy, stopping at the Matale Spice Garden en route. Check-in at a hotel. Visit the Temple of the Tooth in the evening, followed by a cultural show featuring traditional Kandyan dance. "
        ],
        [
          "Explore the Royal Botanical Gardens and Kandy Lake. Visit the Gadaladeniya Temple and Lankatilaka Temple, two important cultural landmarks. Spend the afternoon at leisure, exploring local markets and shops. "
        ],
        [
          "Take a scenic train ride to Nuwara Eliya, known for its colonial architecture and tea plantations. Check-in at a hotel and explore the town, visiting Victoria Park and the Nuwara Eliya Post Office. "
        ],
        [
          "Travel to Galle and check-in at a hotel. Explore the Galle Fort, a UNESCO World Heritage site, known for its well-preserved colonial architecture and historical significance. "
        ],
        [
          "Continue exploring Galle with visits to the Maritime Museum, Dutch Reformed Church, and the Lighthouse. Spend the afternoon at leisure, enjoying the coastal scenery and local shops. "
        ],
        [
          "Travel back to Colombo and check-in at a hotel. Spend the afternoon exploring Colombo’s Pettah Market and Dutch Hospital Shopping Precinct. Enjoy a farewell dinner at a renowned restaurant. "
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
        ],
    
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
    imageUrlh: "/Tourpackage/8.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Nature & Wildlife Tour Itinerary: Colombo, Wilpattu, Sigiriya, Minneriya, Kandy", 
       "9-Night Nature & Wildlife Tour Itinerary: Colombo, Wilpattu, Sigiriya, Minneriya, Kandy, Yala ", 
       "13-Night Nature & Wildlife Tour Itinerary: Colombo, Wilpattu, Sigiriya, Minneriya, Kandy, Horton Plains, Yala, Mirissa ", 
    ],
    infotext: [
     [
       "Immerse yourself in the natural beauty and wildlife of Sri Lanka with our 6-night nature and wildlife tour. This itinerary is perfect for nature lovers and wildlife enthusiasts, offering a blend of safaris, scenic landscapes, and encounters with diverse flora and fauna. "
      ],
     [
       "Explore the natural wonders and wildlife of Sri Lanka with our 9-night nature and wildlife tour. This itinerary takes you to some of the island's most renowned national parks and scenic landscapes, offering unforgettable wildlife encounters and natural beauty. "
      ],
     [
       "Experience the ultimate nature and wildlife adventure in Sri Lanka with our 13-night tour. This extensive itinerary covers the island's most spectacular national parks and scenic landscapes, providing ample opportunities for wildlife spotting and nature exploration. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to national parks ","Jeep safaris", " Guided tours"],
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to national parks ","Jeep safaris", " Guided tours"],
      ["Hotel accommodations", "All transportation in destination location", " Entrance fees to national parks ","Jeep safaris", " Guided tours","Whale watching"],
     
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       " Arrival in Colombo ",
       "Colombo to Wilpattu ",
       " Wilpattu to Sigiriya ",
       " Sigiriya to Minneriya ",
       " Sigiriya to Kandy ",
       "Explore Kandy ",
       "Departure from Colombo ",
      
      ],
      [
       "Arrival in Colombo ",
       " Colombo to Wilpattu ",
       " Wilpattu to Sigiriya ",
       " Sigiriya to Minneriya ",
       "Sigiriya to Kandy ",
       "Explore Kandy ",
       " Kandy to Yala",
       "Full-Day Safari in Yala ",
       "Yala to Colombo ",
       "Departure from Colombo ",
      
        
      ],
      [
        "Arrival Colombo",
        " Colombo to Wilpattu ",
        " Wilpattu to Sigiriya ",
        "Sigiriya to Minneriya ",
        " Sigiriya to Kandy ",
        "Explore Kandy ",
        "Kandy to Horton Plains ",
        "Explore Nuwara Eliya ",
        " Nuwara Eliya to Yala",
        "Full-Day Safari in Yala ",
        "  Yala to Mirissa",
        "Whale Watching in Mirissa ",
        "Leisure Day in Mirissa ",
        "Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's key attractions, including the National Museum and Galle Face Green. Enjoy a welcome dinner at a local restaurant. "
        ],
        [
          "Travel to Wilpattu National Park and check-in at a safari lodge. In the afternoon, enjoy a jeep safari through the park, spotting leopards, elephants, and a variety of bird species. Return to the lodge for dinner. "
        ],
        [
          "Transfer to Sigiriya and check-in at a hotel. Visit the Sigiriya Rock Fortress in the afternoon, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          "Travel to Minneriya National Park for an afternoon safari, famous for its large gatherings of wild elephants. Return to Sigiriya for the evening and enjoy a local dinner. "
        ],
        [
          "Travel to Kandy, stopping at the Dambulla Cave Temple en route. Check-in at a hotel. Visit the Royal Botanical Gardens and the Temple of the Tooth in the evening. "
        ],
        [
          "Spend the day exploring Kandy, including a visit to the Udawattakele Forest Reserve, a sanctuary for birds and other wildlife. Enjoy the scenic beauty and tranquility of the area. Spend the evening at leisure, exploring local markets and shops. "
        ],
        [
          "eisure time at the hotel before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's key attractions, including the National Museum and Galle Face Green. Enjoy a welcome dinner at a local restaurant. "
        ],
        [
          "Travel to Wilpattu National Park and check-in at a safari lodge. In the afternoon, enjoy a jeep safari through the park, spotting leopards, elephants, and a variety of bird species. Return to the lodge for dinner. "
        ],
        [
          "Transfer to Sigiriya and check-in at a hotel. Visit the Sigiriya Rock Fortress in the afternoon, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          "Travel to Minneriya National Park for an afternoon safari, famous for its large gatherings of wild elephants. Return to Sigiriya for the evening and enjoy a local dinner. "
        ],
        [
          "Travel to Kandy, stopping at the Dambulla Cave Temple en route. Check-in at a hotel. Visit the Royal Botanical Gardens and the Temple of the Tooth in the evening. "
        ],
        [
          "Spend the day exploring Kandy, including a visit to the Udawattakele Forest Reserve, a sanctuary for birds and other wildlife. Enjoy the scenic beauty and tranquility of the area. Spend the evening at leisure, exploring local markets and shops "
        ],
        [
          " Travel to Yala National Park and check-in at a safari lodge. Enjoy an evening jeep safari in the park, known for its high density of leopards and diverse wildlife."
        ],
        [
          "Spend the day on a full-day safari in Yala National Park, spotting leopards, elephants, crocodiles, and a variety of bird species. Enjoy a picnic lunch in the park and return to the lodge for dinner in the evening. "
        ],
        [
          "Travel back to Colombo and check-in at a hotel. Spend the afternoon exploring Colombo’s Pettah Market and Dutch Hospital Shopping Precinct. Enjoy a farewell dinner at a renowned restaurant. "
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo's key attractions, including the National Museum and Galle Face Green. Enjoy a welcome dinner at a local restaurant. "
        ],
        [
          "Travel to Wilpattu National Park and check-in at a safari lodge. In the afternoon, enjoy a jeep safari through the park, spotting leopards, elephants, and a variety of bird species. Return to the lodge for dinner. "
        ],
        [
          "Transfer to Sigiriya and check-in at a hotel. Visit the Sigiriya Rock Fortress in the afternoon, known for its ancient frescoes and stunning views. Explore the surrounding gardens and water features. "
        ],
        [
          "Travel to Minneriya National Park for an afternoon safari, famous for its large gatherings of wild elephants. Return to Sigiriya for the evening and enjoy a local dinner. "
        ],
        [
          "Travel to Kandy, stopping at the Dambulla Cave Temple en route. Check-in at a hotel. Visit the Royal Botanical Gardens and the Temple of the Tooth in the evening. "
        ],
        [
          "Spend the day exploring Kandy, including a visit to the Udawattakele Forest Reserve, a sanctuary for birds and other wildlife. Enjoy the scenic beauty and tranquility of the area. Spend the evening at leisure, exploring local markets and shops. "
        ],
        [
          "Travel to Horton Plains National Park for a day of trekking and exploring the park's unique landscape, including World's End and Baker's Falls. Check-in at a hotel in Nuwara Eliya. "
        ],
        [
          "Spend the day exploring Nuwara Eliya, including a visit to Gregory Lake and Hakgala Botanical Gardens. Enjoy the town's colonial charm and tea plantations. "
        ],
        [
          "Travel to Yala National Park and check-in at a safari lodge. Enjoy an evening jeep safari in the park, known for its high density of leopards and diverse wildlife. "
        ],
        [
          "Spend the day on a full-day safari in Yala National Park, spotting leopards, elephants, crocodiles, and a variety of bird species. Enjoy a picnic lunch in the park and return to the lodge for dinner in the evening. "
        ],
        [
          "Travel to Mirissa and check-in at a beach resort. Spend the afternoon relaxing on the beach or enjoying water sports. Enjoy a seafood dinner in the evening. "
        ],
        [
          "Spend the day on a whale-watching tour, a thrilling experience for the entire family. Return to the resort in the afternoon and relax on the beach. "
        ],
        [
          " Spend the day at leisure, enjoying beach activities and resort amenities. Visit the Turtle Hatchery or take a boat ride on the Madu River. Enjoy a farewell dinner at the resort"
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
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
    imageUrlh: "/Tourpackage/9.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Beach Tour Itinerary: Colombo, Bentota, Galle, Mirissa ", 
       "9-Night Beach Tour Itinerary: Colombo, Negombo, Bentota, Galle, Tangalle ", 
       "13-Night Beach Tour Itinerary: Colombo, Negombo, Bentota, Galle, Mirissa, Tangalle, Arugam Bay ", 
    ],
    infotext: [
     [
       "Relax and unwind with our 6-night beach tour in Sri Lanka. This itinerary offers a perfect escape to the island's most beautiful beaches, allowing you to soak up the sun, enjoy water sports, and explore coastal towns. Ideal for beach lovers and those looking for a serene getaway. "
      ],
     [
       "Enjoy the ultimate beach vacation with our 9-night beach tour in Sri Lanka. This itinerary covers the island's most stunning coastal destinations, offering a mix of relaxation, water activities, and exploration of charming coastal towns."
      ],
     [
       "Discover the best of Sri Lanka's beaches with our 13-night beach tour. This extensive itinerary takes you to the island's most beautiful coastal destinations, offering plenty of opportunities for relaxation, water activities, and exploration of charming seaside towns. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Beachfront accommodations", "All transportation in destination location", ", Whale watching tour, Water sports "],
      ["Beachfront accommodations", "All transportation in destination location", ", Whale watching tour, Water sports "],
      ["Beachfront accommodations", "All transportation in destination location", ", Whale watching tour, Water sports "],
    
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       "Arrival in Colombo ",
       " Colombo to Bentota ",
       "  Explore Bentota",
       "Bentota to Galle ",
       "Galle to Mirissa ",
       "  Whale Watching in Mirissa",
       " Departure from Colombo",
     
      
      ],
      [
      "Arrival in Colombo ",
       "Explore Negombo ",
       "Negombo to Bentota ",
       "Explore Bentota",
       "Bentota to Galle ",
       "Explore Galle ",
       "Galle to Tangalle",
       " Explore Tangalle ",
       " Leisure Day in Tangalle ",
       "Departure from Colombo ",
       
        
      ],
      [
        "Arrival Colombo",
        "Explore Negombo ",
        "Negombo to Bentota ",
        "Explore Bentota ",
        "Bentota to Galle ",
        "Explore Galle ",
        "Galle to Mirissa ",
        "Whale Watching in Mirissa ",
        " Mirissa to Tangalle ",
        "Explore Tangalle ",
        " Tangalle to Arugam Bay ",
        "Explore Arugam Bay ",
        " Leisure Day in Arugam Bay",
        "Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a beachside hotel. Spend the afternoon exploring Colombo's coastal attractions and enjoy a welcome dinner by the beach. "
        ],
        [
          " Travel to Bentota and check-in at a beach resort. Spend the day relaxing on the golden sands of Bentota Beach, swimming in the warm waters, or enjoying water sports like jet skiing and windsurfing. Enjoy a beachside dinner in the evening."
        ],
        [
          "Visit the Brief Garden, a beautifully landscaped garden by Bevis Bawa. In the afternoon, take a boat ride on the Madu River, exploring its mangrove forests and small islands. Return to the beach for a sunset stroll and dinner. "
        ],
        [
          "Travel to Galle and check-in at a hotel near the beach. Explore the historic Galle Fort, a UNESCO World Heritage site, with its colonial architecture and charming streets. Spend the evening relaxing on Unawatuna Beach. "
        ],
        [
          "Travel to Mirissa and check-in at a beachfront hotel. Spend the day relaxing on Mirissa Beach, known for its stunning sunsets and vibrant atmosphere. Enjoy a seafood dinner by the beach. "
        ],
        [
          "Embark on a whale-watching tour in the morning, where you might spot blue whales, dolphins, and other marine life. Spend the afternoon at leisure on the beach or exploring local shops and cafes. "
        ],
        [
          "Leisure time at the hotel before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Negombo. Check-in at a beachfront hotel. Spend the afternoon relaxing on Negombo Beach and enjoy a welcome dinner by the sea. "
        ],
        [
          " Spend the day exploring Negombo, including a visit to the Negombo Fish Market and the Dutch Canal. Enjoy water sports or relax on the beach. Dine at a beachside restaurant in the evening."
        ],
        [
          "Travel to Bentota and check-in at a beach resort. Spend the day relaxing on Bentota Beach, swimming, or enjoying water sports. Take a boat ride on the Madu River in the afternoon. Enjoy a beachside dinner in the evening. "
        ],
        [
          "Visit the Kosgoda Turtle Hatchery, where you can learn about sea turtle conservation and see baby turtles. Spend the rest of the day at leisure on the beach. "
        ],
        [
          "Travel to Galle and check-in at a hotel near the beach. Explore the historic Galle Fort, a UNESCO World Heritage site, with its colonial architecture and charming streets. Spend the evening relaxing on Unawatuna Beach. "
        ],
        [
          "Spend the day exploring Galle's beaches, such as Jungle Beach and Dalawella Beach. Enjoy snorkeling or simply relax on the sandy shores. Return to the hotel for a beachside dinner. "
        ],
        [
          "Travel to Tangalle and check-in at a beachfront hotel. Spend the day relaxing on Tangalle Beach, known for its tranquil atmosphere and beautiful scenery. "
        ],
        [
          "Visit the nearby Mulkirigala Rock Temple in the morning. Spend the afternoon at leisure on the beach or exploring the local area. Enjoy a seafood dinner by the beach in the evening. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Take a boat ride to the Rekawa Lagoon or visit the nearby Turtle Conservation Project. Enjoy a farewell dinner at the resort. "
        ],
        [
          " Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ],
    
       
      ],
      [
        
        [
          "Arrive at Bandaranaike International Airport and transfer to Negombo. Check-in at a beachfront hotel. Spend the afternoon relaxing on Negombo Beach and enjoy a welcome dinner by the sea. "
        ],
        [
          "Spend the day exploring Negombo, including a visit to the Negombo Fish Market and the Dutch Canal. Enjoy water sports or relax on the beach. Dine at a beachside restaurant in the evening. "
        ],
        [
          "Travel to Bentota and check-in at a beach resort. Spend the day relaxing on Bentota Beach, swimming, or enjoying water sports. Take a boat ride on the Madu River in the afternoon. Enjoy a beachside dinner in the evening. "
        ],
        [
          "Visit the Kosgoda Turtle Hatchery, where you can learn about sea turtle conservation and see baby turtles. Spend the rest of the day at leisure on the beach. "
        ],
        [
          "Travel to Galle and check-in at a hotel near the beach. Explore the historic Galle Fort, a UNESCO World Heritage site, with its colonial architecture and charming streets. Spend the evening relaxing on Unawatuna Beach. "
        ],
        [
          "Spend the day exploring Galle's beaches, such as Jungle Beach and Dalawella Beach. Enjoy snorkeling or simply relax on the sandy shores. Return to the hotel for a beachside dinner "
        ],
        [
          "Travel to Mirissa and check-in at a beachfront hotel. Spend the day relaxing on Mirissa Beach, known for its stunning sunsets and vibrant atmosphere. Enjoy a seafood dinner by the beach. "
        ],
        [
          "Embark on a whale-watching tour in the morning, where you might spot blue whales, dolphins, and other marine life. Spend the afternoon at leisure on the beach or exploring local shops and cafes. "
        ],
        [
          "Travel to Tangalle and check-in at a beachfront hotel. Spend the day relaxing on Tangalle Beach, known for its tranquil atmosphere and beautiful scenery. "
        ],
        [
          "Visit the nearby Mulkirigala Rock Temple in the morning. Spend the afternoon at leisure on the beach or exploring the local area. Enjoy a seafood dinner by the beach in the evening. "
        ],
        [
          "Travel to Arugam Bay, a popular surf destination, and check-in at a beachfront hotel. Spend the afternoon relaxing on the beach or trying out surfing. Enjoy a beachside dinner in the evening "
        ],
        [
          "Spend the day at leisure on Arugam Bay Beach. Take a surfing lesson, explore the local area, or visit the nearby Kumana National Park for a wildlife safari. Enjoy a farewell dinner at the beach. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Relax on the beach or explore the nearby attractions. Enjoy a final dinner by the beach. "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
    
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
    imageUrlh: "/Tourpackage/10.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Eco Tour Itinerary: Colombo, Sinharaja, Ella, Udawalawe ", 
       "9-Night Eco Tour Itinerary: Colombo, Kitulgala, Knuckles Range, Ella, Yala ", 
       "13-Night Eco Tour Itinerary: Colombo, Sinharaja, Kitulgala, Knuckles Range, Ella, Yala, Mirissa ", 
    ],
    infotext: [
     [
       "Embark on a sustainable journey through Sri Lanka with our 6-night eco tour. This itinerary is designed for eco-conscious travelers who wish to explore the natural beauty and biodiversity of the island while minimizing their environmental impact. Discover lush rainforests, pristine landscapes, and diverse wildlife in an eco-friendly manner."
      ],
     [
       "Experience the natural beauty and biodiversity of Sri Lanka with our 9-night eco tour. This itinerary offers a mix of adventure, conservation, and sustainable travel experiences, perfect for eco-conscious travelers who want to explore the island responsibly. "
      ],
     [
       "Discover the pristine natural beauty of Sri Lanka with our 13-night eco tour. This extensive itinerary combines adventure, conservation, and sustainable travel practices, offering a comprehensive and responsible exploration of the island’s diverse ecosystems. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Eco-friendly accommodations", "All transportation in destination location", "Guided nature walks and hikes ","Udawalawe safari","Organic meals"],
      ["Eco-friendly accommodations", "All transportation in destination location", "Guided nature walks and hikes ","safaris","Organic meals","White-water rafting","Organic meals"],
      ["Eco-friendly accommodations", "All transportation in destination location", "Guided nature walks and hikes ","Udawalawe safari","Organic meals","White-water rafting","Organic meals"],
     
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       " Arrival in Colombo ",
       "Colombo to Sinharaja ",
       "Explore Sinharaja ",
       "Sinharaja to Ella ",
       " Ella to Udawalawe ",
       "Safari in Udawalawe ",
       "  Departure from Colombo",
      
      ],
      [
       "Arrival in Colombo ",
       "Colombo to Kitulgala ",
       " Kitulgala to Knuckles Range",
       "Explore Knuckles Range ",
       "Knuckles Range to Ella ",
       " Explore Ella",
       "Ella to Yala ",
       " Safari in Yala ",
       "Yala to Colombo ",
       " Departure from Colombo",
        
      ],
      [
        "Arrival Colombo",
        "Colombo to Sinharaja ",
        "Explore Sinharaja ",
        "Sinharaja to Kitulgala ",
        "Kitulgala to Knuckles Range ",
        "Explore Knuckles Range ",
        "Knuckles Range to Ella ",
        "Explore Ella ",
        " Ella to Yala ",
        " Safari in Yala ",
        " Yala to Mirissa ",
        "Whale Watching in Mirissa ",
        "Explore Mirissa ",
        " Departure from Colombo",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an eco-friendly hotel. Spend the afternoon exploring Colombo’s green spaces and sustainable attractions. Enjoy a welcome dinner featuring locally sourced organic cuisine "
        ],
        [
          "Travel to Sinharaja Rainforest, a UNESCO World Heritage site. Check-in at an eco-lodge. In the afternoon, take a guided nature walk through the rainforest, learning about its unique flora and fauna. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Spend the day exploring Sinharaja Rainforest with guided hikes and birdwatching tours. Learn about the conservation efforts to protect this biodiversity hotspot. Enjoy a picnic lunch in the forest and return to the lodge for dinner. "
        ],
        [
          "Travel to Ella and check-in at an eco-friendly hotel. Spend the afternoon hiking to Little Adam's Peak and exploring the scenic beauty of Ella. Enjoy an evening of local, organic dining. "
        ],
        [
          "Travel to Udawalawe and check-in at an eco-lodge near Udawalawe National Park. In the afternoon, visit the Elephant Transit Home, a rehabilitation center for orphaned elephants. Return to the lodge for a sustainable dinner. "
        ],
        [
          "Embark on an early morning safari in Udawalawe National Park to see elephants, leopards, and other wildlife. Return to the lodge for breakfast and spend the afternoon relaxing or taking part in additional eco-friendly activities. "
        ],
        [
          "Travel back to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an eco-friendly hotel. Spend the afternoon exploring Colombo’s green spaces and sustainable attractions. Enjoy a welcome dinner featuring locally sourced organic cuisine. "
        ],
        [
          "Travel to Kitulgala and check-in at an eco-lodge. Spend the afternoon white-water rafting on the Kelani River, followed by a nature walk through the surrounding jungle. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Travel to the Knuckles Mountain Range and check-in at an eco-lodge. Spend the afternoon trekking through the range, known for its rich biodiversity and stunning landscapes. Enjoy a picnic lunch and return to the lodge for dinner. "
        ],
        [
          "Spend the day exploring the Knuckles Range with guided hikes and birdwatching tours. Learn about the conservation efforts to protect this UNESCO World Heritage site. Enjoy a picnic lunch in the forest and return to the lodge for dinner. "
        ],
        [
          "Travel to Ella and check-in at an eco-friendly hotel. Spend the afternoon hiking to Little Adam's Peak and exploring the scenic beauty of Ella. Enjoy an evening of local, organic dining. "
        ],
        [
          "Visit Nine Arches Bridge and Ravana Falls in the morning. In the afternoon, explore the tea plantations and learn about sustainable tea farming practices. Return to the hotel for dinner. "
        ],
        [
          "Travel to Yala and check-in at an eco-lodge near Yala National Park. Spend the afternoon at leisure, exploring the lodge's surroundings and enjoying eco-friendly activities. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Embark on an early morning safari in Yala National Park to see elephants, leopards, and other wildlife. Return to the lodge for breakfast and spend the afternoon relaxing or taking part in additional eco-friendly activities. "
        ],
        [
          " Travel back to Colombo and check-in at an eco-friendly hotel. Spend the afternoon exploring Colombo’s Pettah Market and Dutch Hospital Shopping Precinct. Enjoy a farewell dinner at a renowned organic restaurant."
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure. "
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at an eco-friendly hotel. Spend the afternoon exploring Colombo’s green spaces and sustainable attractions. Enjoy a welcome dinner featuring locally sourced organic cuisine. "
        ],
        [
          "Travel to Sinharaja Rainforest, a UNESCO World Heritage site. Check-in at an eco-lodge. In the afternoon, take a guided nature walk through the rainforest, learning about its unique flora and fauna. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Spend the day exploring Sinharaja Rainforest with guided hikes and birdwatching tours. Learn about the conservation efforts to protect this biodiversity hotspot. Enjoy a picnic lunch in the forest and return to the lodge for dinner. "
        ],
        [
          "Travel to Kitulgala and check-in at an eco-lodge. Spend the afternoon white-water rafting on the Kelani River, followed by a nature walk through the surrounding jungle. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Travel to the Knuckles Mountain Range and check-in at an eco-lodge. Spend the afternoon trekking through the range, known for its rich biodiversity and stunning landscapes. Enjoy a picnic lunch and return to the lodge for dinner. "
        ],
        [
          "Spend the day exploring the Knuckles Range with guided hikes and birdwatching tours. Learn about the conservation efforts to protect this UNESCO World Heritage site. Enjoy a picnic lunch in the forest and return to the lodge for dinner. "
        ],
        [
          "Travel to Ella and check-in at an eco-friendly hotel. Spend the afternoon hiking to Little Adam's Peak and exploring the scenic beauty of Ella. Enjoy an evening of local, organic dining. "
        ],
        [
          "Visit Nine Arches Bridge and Ravana Falls in the morning. In the afternoon, explore the tea plantations and learn about sustainable tea farming practices. Return to the hotel for dinner. "
        ],
        [
          "Travel to Yala and check-in at an eco-lodge near Yala National Park. Spend the afternoon at leisure, exploring the lodge's surroundings and enjoying eco-friendly activities. Enjoy a sustainable dinner at the lodge. "
        ],
        [
          "Embark on an early morning safari in Yala National Park to see elephants, leopards, and other wildlife. Return to the lodge for breakfast and spend the afternoon relaxing or taking part in additional eco-friendly activities. "
        ],
        [
          "Travel to Mirissa and check-in at an eco-friendly beach resort. Spend the afternoon relaxing on the beach or enjoying water sports. Enjoy a sustainable seafood dinner in the evening. "
        ],
        [
          "Embark on a whale-watching tour in the morning, where you might spot blue whales, dolphins, and other marine life. Spend the afternoon at leisure on the beach or exploring local shops and cafes. "
        ],
        [
          "Spend the day at leisure, enjoying beach activities and resort amenities. Visit the nearby Turtle Hatchery or take a boat ride on the Madu River. Enjoy a farewell dinner at the resort. "
        ],
        [
          "Leisure time at the resort before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
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
    imageUrlh: "/Tourpackage/11.jpeg",
    description:
      "Enjoy a romantic getaway with our exclusive honeymoon tours. ",
      descriptionhid:"hidden",
    itinerary: [
       "6-Night Food & Culinary Tour Itinerary: Colombo, Negombo, Kandy, Nuwara Eliya", 
       "9-Night Food & Culinary Tour Itinerary: Colombo, Negombo, Kandy, Nuwara Eliya, Galle", 
       "13-Night Food & Culinary Tour Itinerary: Colombo, Negombo, Kandy, Nuwara Eliya, Ella, Galle ", 
    ],
    infotext: [
     [
       "Indulge in the rich and diverse flavors of Sri Lanka with our 6-night food and culinary tour. This itinerary is perfect for food enthusiasts looking to explore the island’s culinary heritage through cooking classes, market tours, and traditional dining experiences. "
      ],
     [
       "Delve deeper into Sri Lanka’s culinary heritage with our 9-night food and culinary tour. This extended itinerary offers a comprehensive exploration of the island’s diverse flavors, including hands-on cooking classes, market visits, and dining at top restaurants. "
      ],
     [
       "Embark on the ultimate culinary journey through Sri Lanka with our 13-night food and culinary tour. This extensive itinerary covers a wide range of culinary experiences, including hands-on cooking classes, market visits, tea tastings, and dining at top restaurants, providing a deep dive into the island’s rich culinary traditions. "
      ],
    ],
    infoDeparture: " Bandaranaike International Airport ",
    infoDepartureTime: "9:15 AM To 9:30 AM.",
    infoReturTime: "Approximately 10:30 PM",
    infoPriceIncluded: [
      ["Hotel accommodations", "All transportation in destination location", "Cooking classes ",", Market tours", "Tea plantation visit","All meals specified in the itinerary"],
      ["Hotel accommodations", "All transportation in destination location", "Cooking classes ",", Market tours", "Tea plantation visit","All meals specified in the itinerary"],
      ["Hotel accommodations", "All transportation in destination location", "Cooking classes ",", Market tours", "Tea plantation visit","All meals specified in the itinerary"],
      
    ],
    infoNotPriceIncluded: [
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
      [
        "Entrance fees to attractions,",
        "Meals and beverages not specified in the itinerary",
      ],
    ],
    infoGallery: [
      "/Tourpackage/info/1.png",
      "/Tourpackage/info/2.png",
      "/Tourpackage/info/3.png",
    ],

    imageUrl: "/images/honeymoon.jpg",
    price: "50000 Rs",
    details: {
      destination: "Sri Lanka",
      departure: "Bandaranaike International Airport ",
      departureTime: "9:15 AM To 9:30 AM.",
      returnTime: "10:30 PM",
      included: [
        "5 Star Accommodation",
        "All transportation in destination location",
        "Romantic dinner by the beach",
      ],
      notIncluded: [
        "Entrance fees to attractions",
        "Meals and beverages not specified in the itinerary",
      ],
      gallery: ["/images/honeymoon1.jpg", "/images/honeymoon2.jpg"],
    },
    TourPlantext: [
      [
       " Arrival in Colombo ",
       " Colombo to Negombo ",
       "Negombo to Kandy ",
       "Explore Kandy ",
       "Kandy to Nuwara Eliya ",
       " Explore Nuwara Eliya ",
       "Departure from Colombo ",
      
      ],
      [
       " Arrival in Colombo ",
       "Colombo to Negombo ",
       "Explore Negombo ",
       "Negombo to Kandy ",
       " Explore Kandy ",
       " Kandy to Nuwara Eliya ",
       "Explore Nuwara Eliya ",
       "Nuwara Eliya to Galle ",
       "Explore Galle ",
       "Departure from Colombo ",
        
      ],
      [
        "Arrival Colombo",
        "  Colombo to Negombo",
        " Explore Negombo ",
        "Negombo to Kandy ",
        "Explore Kandy ",
        "Kandy to Nuwara Eliya ",
        "  Explore Nuwara Eliya",
        "Nuwara Eliya to Ella ",
        " Explore Ella ",
        " Ella to Galle ",
        " Explore Galle ",
        "Leisure Day in Galle ",
        "Galle to Colombo ",
        "Departure from Colombo ",
       
      ],
    ],
    TourText: [
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo’s vibrant street food scene, including Galle Face Green and Pettah Market. Enjoy a welcome dinner at a renowned Sri Lankan restaurant. "
        ],
      
        [
          "Travel to Negombo and check-in at a hotel. Visit the Negombo Fish Market in the morning to see the local catch and learn about seafood in Sri Lankan cuisine. In the afternoon, participate in a cooking class focusing on seafood dishes. Enjoy a dinner featuring your creations. "
        ],
      
        [
          "Travel to Kandy and check-in at a hotel. Visit the Kandy Market Hall to explore local produce and spices. In the evening, attend a traditional Kandyan cooking demonstration followed by a dinner featuring authentic Sri Lankan dishes. "
        ],
      
        [
          "Visit the Royal Botanical Gardens to learn about the spices and herbs used in Sri Lankan cuisine. In the afternoon, participate in a hands-on cooking class at a local home, learning to prepare a traditional Sri Lankan meal. Enjoy the meal with your host family. "
        ],
      
        [
          "Travel to Nuwara Eliya and check-in at a hotel. Visit a tea plantation and factory to learn about the tea-making process and enjoy a tea tasting session. In the evening, dine at a colonial-style restaurant, savoring dishes made with fresh, local ingredients. "
        ],
      
        [
          "Spend the day exploring the culinary delights of Nuwara Eliya. Visit local farms and markets to source ingredients for a farm-to-table cooking experience. Enjoy a farewell dinner featuring your farm-to-table creations. "
        ],
        [
          "Leisure time at the hotel before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport."
        ]
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo’s vibrant street food scene, including Galle Face Green and Pettah Market. Enjoy a welcome dinner at a renowned Sri Lankan restaurant. "
        ],
        [
          "Travel to Negombo and check-in at a hotel. Visit the Negombo Fish Market in the morning to see the local catch and learn about seafood in Sri Lankan cuisine. In the afternoon, participate in a cooking class focusing on seafood dishes. Enjoy a dinner featuring your creations. "
        ],
        [
          "Spend the day visiting local farms and spice gardens to learn about the ingredients used in Sri Lankan cuisine. Participate in a spice-infused cooking class in the afternoon, followed by dinner. "
        ],
        [
          " Travel to Kandy and check-in at a hotel. Visit the Kandy Market Hall to explore local produce and spices. In the evening, attend a traditional Kandyan cooking demonstration followed by a dinner featuring authentic Sri Lankan dishes."
        ],
        [
          "Visit the Royal Botanical Gardens to learn about the spices and herbs used in Sri Lankan cuisine. In the afternoon, participate in a hands-on cooking class at a local home, learning to prepare a traditional Sri Lankan meal. Enjoy the meal with your host family. "
        ],
        [
          "Travel to Nuwara Eliya and check-in at a hotel. Visit a tea plantation and factory to learn about the tea-making process and enjoy a tea tasting session. In the evening, dine at a colonial-style restaurant, savoring dishes made with fresh, local ingredients "
        ],
        [
          "Spend the day exploring the culinary delights of Nuwara Eliya. Visit local farms and markets to source ingredients for a farm-to-table cooking experience. Enjoy a farewell dinner featuring your farm-to-table creations "
        ],
        [
          "Travel to Galle and check-in at a hotel. Explore the Galle Fort area, sampling local street food and visiting spice shops. Enjoy a seafood dinner at a renowned restaurant in the evening. "
        ],
        [
          "Visit a local cooking school for a comprehensive cooking class, covering various aspects of Sri Lankan cuisine. Spend the afternoon exploring local markets and shops. Enjoy a farewell dinner featuring traditional Sri Lankan dishes. "
        ],
        [
          "Leisure time at the hotel before transferring to Colombo for last-minute shopping or sightseeing. Departure from Bandaranaike International Airport. "
        ],
    
       
      ],
      [
        [
          "Arrive at Bandaranaike International Airport and transfer to Colombo. Check-in at a hotel. Spend the afternoon exploring Colombo’s vibrant street food scene, including Galle Face Green and Pettah Market. Enjoy a welcome dinner at a renowned Sri Lankan restaurant. "
        ],
        [
          "Travel to Negombo and check-in at a hotel. Visit the Negombo Fish Market in the morning to see the local catch and learn about seafood in Sri Lankan cuisine. In the afternoon, participate in a cooking class focusing on seafood dishes. Enjoy a dinner featuring your creations. "
        ],
        [
          "Spend the day visiting local farms and spice gardens to learn about the ingredients used in Sri Lankan cuisine. Participate in a spice-infused cooking class in the afternoon, followed by dinner. "
        ],
        [
          "Travel to Kandy and check-in at a hotel. Visit the Kandy Market Hall to explore local produce and spices. In the evening, attend a traditional Kandyan cooking demonstration followed by a dinner featuring authentic Sri Lankan dishes. "
        ],
        [
          "Visit the Royal Botanical Gardens to learn about the spices and herbs used in Sri Lankan cuisine. In the afternoon, participate in a hands-on cooking class at a local home, learning to prepare a traditional Sri Lankan meal. Enjoy the meal with your host family. "
        ],
        [
          "Travel to Nuwara Eliya and check-in at a hotel. Visit a tea plantation and factory to learn about the tea-making process and enjoy a tea tasting session. In the evening, dine at a colonial-style restaurant, savoring dishes made with fresh, local ingredients. "
        ],
        [
          "Spend the day exploring the culinary delights of Nuwara Eliya. Visit local farms and markets to source ingredients for a farm-to-table cooking experience. Enjoy a farewell dinner featuring your farm-to-table creations. "
        ],
        [
          "Travel to Ella and check-in at a boutique hotel. Spend the afternoon exploring Ella’s scenic beauty and local cafes. Enjoy dinner at a local restaurant featuring organic and locally sourced ingredients. "
        ],
        [
          "Take a morning hike to Little Adam’s Peak, followed by a visit to a local tea plantation. Participate in an afternoon cooking class focusing on traditional Sri Lankan dishes. Enjoy dinner with your host family. "
        ],
        [
          "Travel to Galle and check-in at a hotel. Explore the Galle Fort area, sampling local street food and visiting spice shops. Enjoy a seafood dinner at a renowned restaurant in the evening. "
        ],
        [
          "Visit a local cooking school for a comprehensive cooking class, covering various aspects of Sri Lankan cuisine. Spend the afternoon exploring local markets and shops. Enjoy a farewell dinner featuring traditional Sri Lankan dishes. "
        ],
        [
          "Spend the day at leisure, enjoying the beach or exploring more of Galle’s culinary offerings. Consider a visit to a nearby turtle hatchery or spice garden. Enjoy a relaxed dinner at a local restaurant. "
        ],
        [
          "Travel back to Colombo and check-in at a hotel. Spend the afternoon visiting local food markets and shops for last-minute culinary gifts and souvenirs. Enjoy a final farewell dinner at a top Colombo restaurant."
        ],
        [
          "Leisure time at the hotel before transferring to Bandaranaike International Airport for departure."
        ]
    
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
  const [activeSubButton, setActiveSubButton] = useState("package1");
  const [activeSubTab, setActiveSubTab] = useState("package1");

  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
    setActiveButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getSvgColor = (buttonName: string) => {
    if (
      hoveredButton === buttonName ||
      activeButton === buttonName ||
      activeSubButton === buttonName
    ) {
      return "white";
    }
    return "#D94C12";
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveButton(tab);
  };
  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
    setActiveSubButton(subTab);
    setActiveTab("information");
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
        <div className="image-container h-auto lg:h-[600px] 2xl:h-[700px] w-screen overflow-hidden relative">
          <img
            src={packageDetails.imageUrlh}
            className=" w-screen brightness-50"
            alt=""
          />
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
    
          <div className="shadow-lg   md:col-span-8">
            <nav className="w-full mb-5 md:mb-16  grid grid-cols-2 md:grid-cols-3 text-[13px] lg:text-[16px] xl:text-[18px] justify-between ">
              <button
                className={`flex justify-center border-2 border-gray-300 h-12  py-2 ${
                  activeSubButton === "package1"
                    ? "bg-tropicalRainForest text-white"
                    : "bg-[#082B491A] text-black"
                } hover:text-white hover:bg-tropicalRainForest`}
                onMouseEnter={() => handleMouseEnter("package1")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSubTabClick("package1")}
              >
                
                6-Night Itinerary
              </button>
              <button
                className={`flex justify-center border-2 border-gray-300  h-12  py-2  ${
                  activeSubButton === "package2"
                    ? "bg-tropicalRainForest text-white"
                    : "bg-[#082B491A] text-black"
                } hover:text-white hover:bg-tropicalRainForest`}
                onMouseEnter={() => handleMouseEnter("package2")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSubTabClick("package2")}
              >
                
                9-Night Itinerary
              </button>
              <button
                className={`flex justify-center border-2 border-gray-300  h-12  py-2  ${
                  activeSubButton === "package3"
                    ? "bg-tropicalRainForest text-white"
                    : "bg-[#082B491A] text-black"
                } hover:text-white hover:bg-tropicalRainForest`}
                onMouseEnter={() => handleMouseEnter("package3")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSubTabClick("package3")}
              >
             
             13-Night Itinerary
              </button>
            </nav>

            {activeSubTab === "package1" && (
              <div>
                <nav className="w-full  grid grid-cols-2 md:grid-cols-4 text-[13px] lg:text-[16px] xl:text-[18px] justify-between lg:px-16 xl:px-20">
                  <button
                    className={`flex justify-center border-2 h-12 rounded-md py-2 ${
                      activeButton === "information"
                        ? "bg-sinopia text-white"
                        : "bg-white text-black"
                    } hover:text-white hover:bg-sinopia`}
                    onMouseEnter={() => handleMouseEnter("information")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleTabClick("information")}
                  >
                    <span className="mr-2  ">
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
                    className={`flex justify-center border-2   h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                  <div className="container mx-auto  md:p-8">
                    <h1 className={`text-2xl font-bold mb-4 ${packageDetails.descriptionhid}`}>
                      {packageDetails.description}
                    </h1>
                    <div className="bg-gray-100 p-2 w-2/3 rounded-xl mb-6">
                      <span className="text-sm ml-2 font-semibold">
                        {packageDetails.itinerary[0]}
                      </span>
                    </div>
                    {packageDetails.infotext[0].map(
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
                        index: any
                      ) => (
                        <p key={index} className="mb-6">
                          {text}
                        </p>
                      )
                    )}
                    <div className="overflow-x-auto w-full">
                      <table className="table-auto w-full   rounded-lg mb-6 border">
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
                                {packageDetails.infoPriceIncluded[0].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                                {packageDetails.infoNotPriceIncluded[0].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                    </div>
                    <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
                      {packageDetails.infoGallery.map(
                        (image: string, index: any) => (
                          <div
                            key={index}
                            className=" xl:h-[216px] md:h-[80px] h-full w-full overflow-hidden rounded-lg"
                          >
                            <img
                              src={image}
                              alt="Image 1"
                              className="w-full h-full"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "tourPlan" && (
                  <div>
                    {packageDetails.TourPlantext[0].map(
                      (
                        planText:
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
                        index: any
                      ) => (
                        <div key={index}>
                          <div className="flex text-xl md:text-3xl gap-4 my-4">
                            <button className="text-white bg-sinopia px-3 rounded-md py-1">
                              {index + 1}
                            </button>
                            
                            <h1 className={`${packageDetails.hiddenText}`}>
                              Day <span className="mr-1">{index + 1}</span>:
                            </h1>
                            
                            <h1>{planText}</h1>
                          </div>

                          <div className="mt-5 ml-[58px]">
                            {/* Check if there's a corresponding entry in TourText */}
                            {packageDetails.TourText[0][index] ? (
                              packageDetails.TourText[0][index].map(
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
                    <h2 className="text-xl md:text-3xl">
                      Make your own memories
                    </h2>

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
                    <div className="md:p-8">
                      {/* Reviews Section */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">
                          Tour Reviews
                        </h2>

                        {/* Review Card */}
                        {packageDetails.RewProfile.map(
                          (profile: any, index: any) => (
                            <div
                              key={index}
                              className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg shadow-lg"
                            >
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris.
                                </p>
                                <div className="grid  lg:grid-cols-2 gap-2">
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
                      <CommentForm />
                    </div>
                  </div>
                )}
              </div>
            )}
            {activeSubTab === "package2" && (
              <div>
                <nav className="w-full  grid grid-cols-2 md:grid-cols-4 text-[13px] lg:text-[16px] xl:text-[18px] justify-between lg:px-16 xl:px-20">
                  <button
                    className={`flex justify-center border-2 h-12 rounded-md py-2 ${
                      activeButton === "information"
                        ? "bg-sinopia text-white"
                        : "bg-white text-black"
                    } hover:text-white hover:bg-sinopia`}
                    onMouseEnter={() => handleMouseEnter("information")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleTabClick("information")}
                  >
                    <span className="mr-2  ">
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
                    className={`flex justify-center border-2   h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                  <div className="container mx-auto  md:p-8">
                      <h1 className={`text-2xl font-bold mb-4 ${packageDetails.descriptionhid}`}>
                      {packageDetails.description}
                    </h1>
                    <div className="bg-gray-100 p-2 w-2/3 rounded-xl mb-6">
                      <span className="text-sm ml-2 font-semibold">
                        {packageDetails.itinerary[1]}
                      </span>
                    </div>
                    {packageDetails.infotext[1].map(
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
                        index: any
                      ) => (
                        <p key={index} className="mb-6">
                          {text}
                        </p>
                      )
                    )}
                    <div className="overflow-x-auto w-full">
                      <table className="table-auto w-full   rounded-lg mb-6 border">
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
                                {packageDetails.infoPriceIncluded[1].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                                {packageDetails.infoNotPriceIncluded[1].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                    </div>
                    <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
                      {packageDetails.infoGallery.map(
                        (image: string, index: any) => (
                          <div
                            key={index}
                            className=" xl:h-[216px] md:h-[80px] h-full w-full overflow-hidden rounded-lg"
                          >
                            <img
                              src={image}
                              alt="Image 1"
                              className="w-full h-full"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "tourPlan" && (
                  <div>
                    {packageDetails.TourPlantext[1].map(
                      (
                        planText:
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
                        index: any
                      ) => (
                        <div key={index}>
                          <div className="flex text-xl md:text-3xl gap-4 my-4">
                            <button className="text-white bg-sinopia px-3 rounded-md py-1">
                              {index + 1}
                            </button>
                            <h1 className={`${packageDetails.hiddenText}`}>
                              Day <span className="mr-1">{index + 1}</span>:
                            </h1>
                            <h1>{planText}</h1>
                          </div>

                          <div className="mt-5 ml-[58px]">
                            {/* Check if there's a corresponding entry in TourText */}
                            {packageDetails.TourText[1][index] ? (
                              packageDetails.TourText[1][index].map(
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
                    <h2 className="text-xl md:text-3xl">
                      Make your own memories
                    </h2>

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
                    <div className="md:p-8">
                      {/* Reviews Section */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">
                          Tour Reviews
                        </h2>

                        {/* Review Card */}
                        {packageDetails.RewProfile.map(
                          (profile: any, index: any) => (
                            <div
                              key={index}
                              className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg shadow-lg"
                            >
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris.
                                </p>
                                <div className="grid  lg:grid-cols-2 gap-2">
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
                      <CommentForm />
                    </div>
                  </div>
                )}
              </div>
            )}
            {activeSubTab === "package3" && (
              <div>
                <nav className="w-full  grid grid-cols-2 md:grid-cols-4 text-[13px] lg:text-[16px] xl:text-[18px] justify-between lg:px-16 xl:px-20">
                  <button
                    className={`flex justify-center border-2 h-12 rounded-md py-2 ${
                      activeButton === "information"
                        ? "bg-sinopia text-white"
                        : "bg-white text-black"
                    } hover:text-white hover:bg-sinopia`}
                    onMouseEnter={() => handleMouseEnter("information")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleTabClick("information")}
                  >
                    <span className="mr-2  ">
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
                    className={`flex justify-center border-2   h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                    className={`flex justify-center border-2  h-12 rounded-md py-2  ${
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
                  <div className="container mx-auto  md:p-8">
                      <h1 className={`text-2xl font-bold mb-4 ${packageDetails.descriptionhid}`}>
                      {packageDetails.description}
                    </h1>
                    <div className="bg-gray-100 p-2 w-2/3 rounded-xl mb-6">
                      <span className="text-sm ml-2 font-semibold">
                        {packageDetails.itinerary[2]}
                      </span>
                    </div>
                    {packageDetails.infotext[2].map(
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
                        index: any
                      ) => (
                        <p key={index} className="mb-6">
                          {text}
                        </p>
                      )
                    )}
                    <div className="overflow-x-auto w-full">
                      <table className="table-auto w-full   rounded-lg mb-6 border">
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
                                {packageDetails.infoPriceIncluded[2].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                                {packageDetails.infoNotPriceIncluded[2].map(
                                  (included: string, index: any) => (
                                    <li key={index} className="flex ">
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
                    </div>
                    <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
                      {packageDetails.infoGallery.map(
                        (image: string, index: any) => (
                          <div
                            key={index}
                            className=" xl:h-[216px] md:h-[80px] h-full w-full overflow-hidden rounded-lg"
                          >
                            <img
                              src={image}
                              alt="Image 1"
                              className="w-full h-full"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "tourPlan" && (
                  <div>
                    {packageDetails.TourPlantext[2].map(
                      (
                        planText:
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
                        index: any
                      ) => (
                        <div key={index}>
                          <div className="flex text-xl md:text-3xl gap-4 my-4">
                            <button className="text-white bg-sinopia px-3 rounded-md py-1">
                              {index + 1}
                            </button>
                            <h1 className={`${packageDetails.hiddenText}`}>
                              Day <span className="mr-1">{index + 1}</span>:
                            </h1>
                            <h1>{planText}</h1>
                          </div>

                          <div className="mt-5 ml-[58px]">
                            {/* Check if there's a corresponding entry in TourText */}
                            {packageDetails.TourText[2][index] ? (
                              packageDetails.TourText[2][index].map(
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
                    <h2 className="text-xl md:text-3xl">
                      Make your own memories
                    </h2>

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
                    <div className="md:p-8">
                      {/* Reviews Section */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">
                          Tour Reviews
                        </h2>

                        {/* Review Card */}
                        {packageDetails.RewProfile.map(
                          (profile: any, index: any) => (
                            <div
                              key={index}
                              className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg shadow-lg"
                            >
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris.
                                </p>
                                <div className="grid  lg:grid-cols-2 gap-2">
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
                      <CommentForm />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
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

      <section
        style={{
          backgroundImage: 'url("/home6.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="  md:h-[265px] overflow-hidden w-full"
      >
        <div className="justify-center gap-8 py-16 lg:py-28 flex">
          <label
            htmlFor="my-modal"
            className="search-button border-2 border-gray-600 bg-white w-1/2 h-8 md:h-auto py-1 px-2 md:py-4 md:px-6 rounded-lg "
          >
            <h2 className=" md:text-2xl"> Email</h2>
          </label>
          <button className=" border-2 border-gray-600 w-1/4 py-1 px-2 md:py-4 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg">
            SUBSCRIBE OUR NEWSLETTER
          </button>
        </div>
      </section>
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

// const RatingInput: React.FC<{ label: string }> = ({ label }) => {
//   return (
//     <div className="flex items-center">
//       <span className="mr-2 ">{label}</span>
//       <div className="flex-1 flex">
//         {[...Array(5)].map((_, i) => (
//           <span key={i} className="text-orange-500">
//             &#9733;
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

export default PackageDetails;

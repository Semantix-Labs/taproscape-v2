// pages/destinations/[slug]/index.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card } from "flowbite-react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

// Define the type for the props passed to the destination detail page
type DestinationDetailProps = {
  destinationname: string;
  artiImge: string[];
  artiText: any;
  author: string;
  authorName: string;
  authorText: string;
  TourImage: string[];
  TourText: string[];
  bgImage: string;
  title: string[];
  decription: string[];
  artiName: string[];
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
  bgImage,
  title,
  decription,
  artiName,
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
        <div className="image-container h-auto lg:h-[600px] 2xl:h-[700px] w-screen overflow-hidden relative">
          <img src={bgImage} className=" w-screen brightness-50" alt="" />
          <div className="text-overlay absolute md:left-10 xl:left-20 2xl:left-40 bottom-5 md:bottom-20 p-4">
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
            <div className="flex text-2xl md:text-3xl lg:text-3xl xl:text-4xl ">
                {" "}
                <h2 className="pt-1 py-10 text-oxfordBlue">{title[0]}</h2>
                <div className="image-container relative">
                <img
                  className="w-52 h-12 md:h-12 xl:w-80 md:w-48"
                  src="/textbg.png"
                  alt=""
                />
                   <div className="text-overlay absolute top-0  pl-5 pt-1 justify-center ">
                    <p
                     style={{ fontFamily: "bagea" }}
                     className="top-0 pl-2 xl:pl-4 uppercase text-white text-xl md:text-3xl lg:text-3xl xl:text-4xl bottom-5"
                    >
                      {title[1]}
                    </p>
                  </div>
                </div>
              </div>
            <h1 className="text-oxfordBlue text-sm md:text-2xl font-bold mb-2">{decription[0]}</h1>
            <p>{decription[1]}</p>
            <h1 className="text-oxfordBlue text-sm md:text-2xl font-bold my-2">{decription[2]}</h1>

              {artiName.map((photo, index) => (
                <React.Fragment key={index}>
                  
                  <h1 className=" font-semibold mb-4">{photo}</h1>
                  {artiText[index] &&
                    artiText[index].map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                      <p key={index} className="text-oxfordBlue mb-4">
                        {item}
                      </p>
                    ))}
                </React.Fragment>
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
            <div className="bg-white  outline-gray-200 md:mt-[-200px]  z-20 mb-10 text-center"> 
            <Card className=" bg-white shadow-xl outline outline-offset-4 outline-gray-200 md:mt-[-50px] max-h-[500px] z-20 mb-10 text-center">
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
                    <h2 className=" text-xl md:text-2xl ml-4">
                      {TourText[imgIndex]}
                    </h2>
                  </div>
                ))}
              </div>
            </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: 'url("/train.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-20 h-[265px] w-full brightness-75"
      >
        <div className="flex justify-center gap-8 py-24">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 flex w-1/2 search-button cursor-pointer border-2 text-sm md:text-xl  xl:text-2xl border-gray-600 bg-white h-8 md:h-auto py-1 px-2 md:py-5 md:px-6 rounded-lg"
            required
          />
          <button className="border-2 border-gray-600 w-1/4 py-1 px-2 md:py-1 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg">
            SUBSCRIBE OUR NEWSLETTER
          </button>
        </div>
      </section>

      <Footer/>

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
      destinationname: "Kandy",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Temple of the Tooth Relic:",
        "Kandy Lake:",
        "Royal Botanical Gardens",
        "Cultural Shows",
        "Kandy Market:",
        "Best Time to Visit Kandy",
        "How to Get to Kandy",
        "Where to Stay in Kandy",
        "Conclusion"

      ],
      artiText: [
        [
          "Located within the royal palace complex, this temple houses the sacred tooth relic of Lord Buddha. The temple's intricate architecture and spiritual significance make it a top attraction in Kandy.",

        ],
        [
          "Also known as Kiri Muhuda or the Sea of Milk, this serene lake is a popular spot for leisurely strolls and boat rides. The picturesque setting is perfect for photography and relaxation.",
        ],
        [
          "Situated in Peradeniya, just a short drive from Kandy, these gardens are home to over 4,000 species of plants. The beautifully landscaped gardens are a haven for nature lovers and botanists."
        ],
        [
          "Experience the vibrant culture of Kandy by attending traditional dance performances and music shows. These cultural shows provide a glimpse into the rich artistic traditions of the region."
        ],
        [
          "Explore the bustling local market to get a taste of daily life in Kandy. From fresh produce to handmade crafts, the market offers a variety of goods that reflect the local culture."
        ],
        [
          "The best time to visit Kandy is from December to April when the weather is cool and dry. The Kandy Esala Perahera, held in July or August, is one of the most spectacular cultural festivals in Sri Lanka, attracting visitors from all over the world."
        ],
        [
          "Kandy is well-connected by road and rail. You can take a scenic train ride from Colombo, which offers breathtaking views of the countryside. Alternatively, you can hire a car or take a bus to reach Kandy from major cities in Sri Lanka."
        ],
        [
          "Kandy offers a range of accommodation options, from luxury hotels to budget-friendly guesthouses. Some popular choices include:",
          "Earl's Regency Hotel: A luxury hotel offering stunning views of the surrounding hills and modern amenities.",
          "Kandy City Hotel: A mid-range hotel located in the heart of the city, perfect for exploring local attractions.",
           "Theva Residency: A boutique hotel that provides a serene and comfortable stay with panoramic views of Kandy."
        ],
        [
          "Kandy is a destination that captivates visitors with its cultural richness, historical significance, and natural beauty. Whether you're exploring ancient temples, strolling around a tranquil lake, or immersing yourself in local traditions, Kandy promises an unforgettable experience. Plan your trip to Kandy today and discover the cultural heart of Sri Lanka."
        ]
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
      bgImage: "/kandy.jpg",
      title: ["The Cultural Heart of ", "Sri Lanka"],
      decription:["Discover the Rich Heritage and Natural Beauty of Kandy",
        "Kandy, often referred to as the cultural capital of Sri Lanka, is a city that offers a perfect blend of history, culture, and natural beauty. Nestled amidst lush hills, this UNESCO World Heritage site is home to the sacred Temple of the Tooth Relic, one of the most important religious sites for Buddhists around the world. Kandy is a must-visit destination for anyone looking to immerse themselves in Sri Lanka's rich cultural heritage and stunning landscapes.",
        "Top Attractions in Kandy"
      ]
    },
    destination2: {
      destinationname: "Ella ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Ella Rock:",
        "Nine Arches Bridge:",
        "Ravana Falls:",
        "Little Adam's Peak:",
        "Demodara Loop:",
        "Best Time to Visit Ella",
        "How to Get to Ella",
        "Where to Stay in Ella",
        "Conclusion"
      
       

      ],
      artiText: [
          [
            "A popular hiking destination, Ella Rock offers panoramic views of the surrounding hills and valleys. The hike can be challenging, but the stunning vistas at the summit are well worth the effort. "
          ],
          [
            " This iconic railway bridge, also known as the Bridge in the Sky, is a marvel of engineering set amidst dense jungle. It's a great spot for photography and watching trains pass by. "
          ],
          [
            "One of the widest waterfalls in Sri Lanka, Ravana Falls is a beautiful and refreshing spot to visit. You can take a dip in the cool waters or simply enjoy the scenic surroundings. "
          ],
          [
            "  A relatively easy hike compared to Ella Rock, Little Adam's Peak offers equally impressive views. The trail takes you through lush tea plantations and ends with a rewarding panoramic view."
          ],
          [
            "A unique railway loop where the train makes a complete spiral, offering a fascinating experience for train enthusiasts and visitors alike. "
          ],
          [
            "The best time to visit Ella is from January to March when the weather is dry and cool, making it ideal for outdoor activities. However, Ella's pleasant climate makes it a great destination to visit year-round. "
          ],
          [
            "Ella is accessible by train, car, and bus. The train journey from Kandy to Ella is one of the most scenic routes in Sri Lanka, passing through lush forests, tea plantations, and picturesque villages. Alternatively, you can drive or take a bus from major cities like Colombo or Kandy. "
          ],
          [
            "Ella offers a variety of accommodation options to suit different budgets and preferences. Some popular choices include: ",
            "98 Acres Resort & Spa: A luxury resort set amidst tea plantations, offering stunning views and top-notch amenities. ",
            " Ella Jungle Resort: A unique eco-resort that provides an immersive nature experience with comfortable accommodation.",
            "The Chillout Ella: A budget-friendly guesthouse located close to popular attractions, offering cozy rooms and friendly service."
          ],
          [
            "Ella is a destination that enchants visitors with its natural beauty, adventurous activities, and serene ambiance. Whether you're hiking to scenic viewpoints, exploring iconic landmarks, or simply relaxing amidst the lush greenery, Ella promises an unforgettable getaway. Plan your trip to Ella and experience the scenic hill country retreat of Sri Lanka. "
          ],
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
      bgImage: "/ella.jpg",
      title: ["The Scenic Hill Country ", "Retreat "],
      decription:["Experience the Natural Beauty and Adventure of Ella",
        "Ella, a charming town nestled in Sri Lanka's hill country, is a paradise for nature lovers and adventure seekers. Known for its breathtaking views, lush tea plantations, and stunning waterfalls, Ella offers a tranquil escape from the hustle and bustle of city life. Whether you're hiking to scenic viewpoints or exploring the local culture, Ella has something for everyone.",
        "Top Attractions in Kandy"
      ]
    },
    destination3: {
      destinationname: "Nuwara Eliya ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Gregory Lake: ",
        "Hakgala Botanical Gardens:",
        "Tea Plantations and Factories: ",
        "Victoria Park: ",
        "Horton Plains National Park:",
        "Best Time to Visit Nuwara Eliya",
        "How to Get to Nuwara Eliya",
        "Where to Stay in Nuwara Eliya",
        "Conclusion",
       
       

      ],
      artiText: [
          [
            " This picturesque lake is a popular spot for boating, picnicking, and leisurely walks. The scenic surroundings and cool climate make it a perfect place to relax and unwind. "
          ],
          [
            " One of the highest botanical gardens in the world, Hakgala is home to a wide variety of flora, including roses, orchids, and ferns. The gardens are a haven for nature enthusiasts and botany lovers."
          ],
          [
            " Nuwara Eliya is famous for its tea, and visiting a tea plantation is a must-do activity. Learn about the tea-making process, explore the lush plantations, and sample some of the finest Ceylon tea. "
          ],
          [
            "Located in the heart of Nuwara Eliya, Victoria Park is a beautifully maintained garden that offers a peaceful escape. The park is home to a variety of flowers, trees, and bird species. "
          ],
          [
            "A UNESCO World Heritage site, Horton Plains is known for its stunning landscapes, rich biodiversity, and the famous World's End viewpoint. The park is a paradise for hikers and nature lovers. "
          ],
          [
            "The best time to visit Nuwara Eliya is from February to April when the weather is pleasant and the gardens are in full bloom. The town's cool climate makes it a great destination to visit year-round, especially for those looking to escape the tropical heat. "
          ],
          [
            "Nuwara Eliya is accessible by car, bus, and train. The scenic train journey from Kandy or Ella to Nuwara Eliya offers breathtaking views of the hill country. Alternatively, you can hire a car or take a bus from major cities like Colombo or Kandy. "
          ],
          [
            "Nuwara Eliya offers a range of accommodation options, from luxury hotels to cozy guesthouses. Some popular choices include: ",
            "Heritance Tea Factory: A unique hotel set in a converted tea factory, offering a blend of luxury and history.",
            "The Grand Hotel: A historic colonial-era hotel with elegant rooms and beautiful gardens.",
            "Lovers Leap Guest House: A budget-friendly option with comfortable rooms and stunning views of the surrounding hills."
          ],
          [
            " Nuwara Eliya is a destination that captivates visitors with its colonial charm, stunning landscapes, and cool climate. Whether you're exploring tea plantations, strolling through beautiful gardens, or hiking in a national park, Nuwara Eliya promises an unforgettable experience. Plan your trip to Nuwara Eliya and discover the Little England of Sri Lanka"
          ],
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
      bgImage: "/Destination/d3.png",
      title: ["The Little England of ", "Sri Lanka"],
      decription:[
        "Discover the Colonial Charm and Natural Splendor of Nuwara Eliya",
        "Nuwara Eliya, often referred to as Little England, is a quaint town in Sri Lanka's central highlands known for its colonial architecture, cool climate, and stunning landscapes. Surrounded by rolling tea plantations, misty mountains, and beautiful gardens, Nuwara Eliya offers a unique blend of British colonial charm and natural beauty.",
        "Top Attractions in Kandy"
      ]
    },
    destination4: {
      destinationname: "Galle ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Galle Fort:",
        "Galle Lighthouse:",
        "Dutch Reformed Church: ",
        "National Maritime Museum:",
        "Unawatuna Beach: ",
        "Japanese Peace Pagoda:",
        "Best Time to Visit Galle",
        "How to Get to Galle",
        "Where to Stay in Galle",
        "Conclusion",
       

      ],
      artiText: [
          [
            "Built by the Portuguese and later fortified by the Dutch, Galle Fort is a testament to the city's colonial past. Wander through the cobblestone streets, visit historic buildings, and enjoy panoramic views from the fort walls. "
          ],
          [
            "Located within Galle Fort, the Galle Lighthouse is the oldest lighthouse in Sri Lanka. The picturesque setting and beautiful views make it a popular spot for photography. "
          ],
          [
            "One of the oldest Protestant churches in Sri Lanka, the Dutch Reformed Church is a historic building with a serene ambiance and beautiful stained-glass windows. It's a significant landmark within Galle Fort. "
          ],
          [
            "Housed in a colonial-era building, the National Maritime Museum offers fascinating exhibits on Sri Lanka's maritime history, including artifacts from shipwrecks and traditional fishing equipment. "
          ],
          [
            " Just a short drive from Galle, Unawatuna Beach is a beautiful crescent-shaped bay known for its golden sands and clear waters. It's perfect for swimming, snorkeling, and relaxing."
          ],
          [
            "Located on a hill overlooking Unawatuna Beach, the Japanese Peace Pagoda offers stunning views of the coastline and a tranquil atmosphere for meditation and reflection. "
          ],
          [
            " The best time to visit Galle is from December to March when the weather is dry and sunny, ideal for exploring the fort and enjoying the beaches. The off-peak season from May to September also offers pleasant weather with fewer crowds."
          ],
          [
            " Galle is easily accessible by road and rail. The scenic train journey from Colombo to Galle along the coast is highly recommended for its beautiful views. You can also take a bus or hire a car from Colombo or other major cities."
          ],
          [
            "Galle offers a variety of accommodation options, from luxury boutique hotels to budget-friendly guesthouses. Some popular choices include: ",
            "Amangalla: A luxury hotel set in a historic building within Galle Fort, offering elegant rooms and world-class amenities.",
            "Fort Bazaar: A boutique hotel with stylish rooms and a charming courtyard, located in the heart of Galle Fort.",
            "Mango House: A budget-friendly guesthouse with comfortable rooms and a lovely garden, perfect for a relaxing stay."
          ],
          [
            "Galle is a destination that enchants visitors with its rich history, stunning coastal beauty, and vibrant culture. Whether you're exploring the historic fort, relaxing on pristine beaches, or immersing yourself in the local culture, Galle promises an unforgettable experience. Plan your trip to Galle and discover the historic coastal gem of Sri Lanka."
          ]
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
      bgImage:"/Destination/d4.png",
      title: ["The Historic Coastal Gem of ", "Sri Lanka"],
      decription:["Explore the Rich History and Coastal Beauty of Galle",
        "Galle, a historic city on Sri Lanka's southern coast, is renowned for its well-preserved colonial architecture, vibrant culture, and stunning beaches. The highlight of Galle is the Galle Fort, a UNESCO World Heritage site that showcases the city's rich history and architectural beauty. Galle offers a perfect blend of history, culture, and seaside charm, making it a must-visit destination in Sri Lanka.",
        "Top Attractions in Kandy"
      ]
    },
    destination5: {
      destinationname: " Sigiriya",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Sigiriya Rock Fortress:",
        "Sigiriya Museum: ",
        "Pidurangala Rock:",
        "Royal Gardens:",
        "Frescoes:",
        "Best Time to Visit Sigiriya",
        "How to Get to Sigiriya",
        "Where to Stay in Sigiriya",
        "Conclusion",
       
       

      ],
      artiText: [
          [
            "Climb to the top of this massive rock to explore the ancient ruins of a palace, beautiful frescoes, and the famous Lion's Paw entrance. The summit offers breathtaking panoramic views of the surrounding countryside. "
          ],
          [
            "  Learn about the history and archaeology of Sigiriya at this informative museum, which features exhibits on the site's discovery, excavation, and significance"
          ],
          [
            " Located near Sigiriya, Pidurangala Rock offers an alternative hiking experience with stunning views of Sigiriya Rock and the surrounding landscapes. The hike is less crowded and equally rewarding. "
          ],
          [
            "At the base of Sigiriya Rock, these beautifully landscaped gardens feature water gardens, boulder gardens, and terraced gardens, showcasing ancient engineering and design. "
          ],
          [
            "The Sigiriya frescoes, located in a sheltered gallery halfway up the rock, depict celestial maidens and are considered masterpieces of ancient Sri Lankan art. "
          ],
          [
            "The best time to visit Sigiriya is from January to April when the weather is dry and pleasant, making it ideal for climbing the rock and exploring the surroundings. Early morning or late afternoon visits are recommended to avoid the midday heat. "
          ],
          [
            " Sigiriya is accessible by car, bus, and train. The nearest major town is Dambulla, from where you can take a taxi or tuk-tuk to Sigiriya. There are also direct buses from Colombo and Kandy to Dambulla."
          ],
          [
            "Sigiriya offers a range of accommodation options, from luxury resorts to budget-friendly guesthouses. Some popular choices include: ",
            "Jetwing Vil Uyana: A luxury eco-resort set amidst paddy fields and wetlands, offering unique and comfortable accommodation.",
            "Aliya Resort and Spa: A stylish resort with modern amenities and stunning views of Sigiriya Rock.",
            "Back of Beyond Pidurangala: A budget-friendly eco-lodge located near Pidurangala Rock, perfect for nature lovers."
          ],
          [
            "Sigiriya is a destination that captivates visitors with its ancient marvels, stunning natural beauty, and rich history. Whether you're climbing the iconic rock fortress, exploring ancient ruins, or enjoying panoramic views, Sigiriya promises an unforgettable experience. Plan your trip to Sigiriya and discover the majestic rock fortress of Sri Lanka."
          ],
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
      bgImage:  "/Destination/d7.jpeg",
      title: ["The Majestic Rock Fortress of ", "Sri Lanka"],
      decription:["Explore the Ancient Marvel and Natural Splendor of Sigiriya",
        "Sigiriya, also known as Lion Rock, is one of Sri Lanka's most iconic landmarks and a UNESCO World Heritage site. This ancient rock fortress, rising dramatically from the surrounding plains, is a testament to Sri Lanka's rich history and architectural ingenuity. Sigiriya offers a fascinating glimpse into the island's ancient past and stunning views of the lush landscapes.",
        "Top Attractions in Kandy"
      ]
    },
    destination6: {
      destinationname: " ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "Leopard Safaris:",
        "Bird Watching:",
        "Block 1:",
        "Kebiliththa:",
        "Patanangala Beach:",
        "Best Time to Visit Yala National Park",
        "How to Get to Yala National Park",
        "Where to Stay in Yala National Park",
        "Conclusion",
       
       

      ],
      artiText: [
          [
            " Yala is renowned for having one of the highest leopard densities in the world. Join a guided safari to spot these elusive big cats along with other wildlife like elephants, sloth bears, and deer. "
          ],
          [
            "With over 200 bird species, Yala is a paradise for bird watchers. Keep an eye out for colorful species like the Sri Lanka junglefowl, painted stork, and peacock. "
          ],
          [
            "The most popular section of Yala National Park, Block 1 is known for its rich wildlife and beautiful landscapes. Safaris in this area offer the best chances of spotting leopards and other animals. "
          ],
          [
            "A remote area within Yala, Kebiliththa is considered sacred by locals and offers a tranquil escape with its lush vegetation and serene ambiance. "
          ],
          [
            "Located within the park, this pristine beach is a beautiful spot to relax and enjoy the natural surroundings. It's also a popular spot for bird watching. "
          ],
          [
            " The best time to visit Yala National Park is from February to July when the water levels are low, making it easier to spot wildlife. Early morning and late afternoon safaris offer the best chances of seeing animals."
          ],
          [
            "ala National Park is accessible by car and bus. The nearest town is Tissamaharama, from where you can take a taxi or tuk-tuk to the park entrance. There are also direct buses from Colombo and other major cities to Tissamaharama. "
          ],
          [
            "Yala offers a range of accommodation options, from luxury safari lodges to budget-friendly campsites. Some popular choices include: ",
            "Cinnamon Wild Yala: A luxury safari lodge offering comfortable accommodation and excellent wildlife viewing opportunities. ",
            "Jetwing Yala: A stylish eco-resort located near the park, providing modern amenities and stunning views.",
            "Leopard Trails: A luxury tented camp offering an immersive safari experience with comfortable tents and guided tours."
          ],
          [
            "Yala National Park is a destination that enchants visitors with its diverse wildlife, stunning landscapes, and thrilling safari experiences. Whether you're spotting leopards, enjoying bird watching, or exploring remote areas, Yala promises an unforgettable adventure. Plan your trip to Yala National Park and discover the wildlife wonderland of Sri Lanka. "
          ],
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
      bgImage:"/Destination/d6.png",
      title: ["The Wildlife Wonderland of ", "Sri Lanka"],
      decription:["Experience the Thrilling Wildlife and Natural Beauty of Yala National Park",
        "Yala National Park, located in the southeastern region of Sri Lanka, is the country's most famous wildlife sanctuary. Known for its diverse wildlife and picturesque landscapes, Yala offers thrilling safari experiences and the chance to see animals like leopards, elephants, and exotic birds in their natural habitat. Yala National Park is a must-visit destination for wildlife enthusiasts and nature lovers. ",
        "Top Attractions in Kandy"
      ]
    },
    destination7: {
      destinationname: " ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
       

      ],
      artiText: [
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
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
      bgImage: "/kandy.jpg",
      title: ["The Cultural Heart of ", "Sri Lanka"],
      decription:["Discover the Rich Heritage and Natural Beauty of Kandy",
        "Kandy, often referred to as the cultural capital of Sri Lanka, is a city that offers a perfect blend of history, culture, and natural beauty. Nestled amidst lush hills, this UNESCO World Heritage site is home to the sacred Temple of the Tooth Relic, one of the most important religious sites for Buddhists around the world. Kandy is a must-visit destination for anyone looking to immerse themselves in Sri Lanka's rich cultural heritage and stunning landscapes.",
        "Top Attractions in Kandy"
      ]
    },
    destination8: {
      destinationname: " ",
      artiImge: [
        "/Destination/arti/1.png",
        "/Destination/arti/2.png",
        "/Destination/arti/3.png",
      ],
      artiName: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
       

      ],
      artiText: [
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
          [
            " "
          ],
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
      bgImage: "/kandy.jpg",
      title: ["The Cultural Heart of ", "Sri Lanka"],
      decription:["Discover the Rich Heritage and Natural Beauty of Kandy",
        "Kandy, often referred to as the cultural capital of Sri Lanka, is a city that offers a perfect blend of history, culture, and natural beauty. Nestled amidst lush hills, this UNESCO World Heritage site is home to the sacred Temple of the Tooth Relic, one of the most important religious sites for Buddhists around the world. Kandy is a must-visit destination for anyone looking to immerse themselves in Sri Lanka's rich cultural heritage and stunning landscapes.",
        "Top Attractions in Kandy"
      ]
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

// components/TravelPackages.tsx
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

const travelPackages = [
  {
    id: 1,
    title: "Honeymoon Tours",
    category: "Honeymoon Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/1.png",
    price: "Rs: 200000",
    text: "Celebrate love with our romantic honeymoon tours, offering intimate settings and unforgettable moments in breathtaking locations. ",
  },
  {
    id: 2,
    title: "Luxury Tours",
    category: "Luxury Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/2.jpeg",
    price: "Rs: 200000",
    text: "Experience ultimate comfort and sophistication with our luxury tours, featuring exquisite accommodations and exclusive experiences. ",
  },
  {
    id: 3,
    title: "Ramayana Tours",
    category: "Ramayana Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/3.png",
    price: "Rs: 200000",
    text: "Unveil the ancient epic with our Ramayana tours, exploring significant sites and reliving the legendary story. ",
  },
  {
    id: 4,
    title: "Wellness Tours",
    category: "Wellness Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/4.jpeg",
    price: "Rs: 200000",
    text: " Rejuvenate your mind and body with our wellness tours, featuring spa treatments, yoga sessions, and serene retreats.",
  },
  {
    id: 5,
    title: "Family Tours",
    category: "Family Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/5.jpeg",
    price: "Rs: 200000",
    text: "Create lasting memories with our family tours, offering fun activities and adventures for all ages in Sri Lanka.",
  },
  {
    id: 6,
    title: "Adventure Tours",
    category: "Adventure Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/6.jpeg",
    price: "Rs: 200000",
    text: "Embark on thrilling adventures with our tours, including hiking, rafting, and safaris in Sri Lanka's most stunning landscapes. ",
  },
  {
    id: 7,
    title: "Cultural Tours",
    category: "Cultural Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/7.jpeg",
    price: "Rs: 200000",
    text: " Immerse yourself in Sri Lanka's rich heritage with our cultural tours, visiting ancient temples, historic sites, and local festivals.",
  },
  {
    id: 8,
    title: "Nature & Wildlife Tours",
    category: "Nature & Wildlife Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/8.jpeg",
    price: "Rs: 200000",
    text: " Discover Sri Lanka's diverse wildlife and lush landscapes with our nature and wildlife tours, including safaris and nature walks.",
  },
  {
    id: 9,
    title: "Beach Tours",
    category: "Beach Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/9.jpeg",
    price: "Rs: 200000",
    text: "Relax on pristine beaches and enjoy water activities with our beach tours, visiting Sri Lanka's most beautiful coastal areas. ",
  },
  {
    id: 10,
    title: "Eco & Sustainable Tours",
    category: "Eco & Sustainable Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/10.jpeg",
    price: "Rs: 200000",
    text: "Experience eco-conscious travel with our sustainable tours, supporting conservation and local communities.",
  },
  {
    id: 11,
    title: "Food & Culinary Tours",
    category: "Food & Culinary Tours",
    duration: "6-13 Days",
    groupSize: "2 People",
    imageUrl: "/Tourpackage/11.jpeg",
    price: "Rs: 200000",
    text: "Savor the flavors of Sri Lanka with our food and culinary tours, featuring cooking classes, market visits, and traditional meals. ",
  },
];

const categories = [
  "All Packages",
  "Honeymoon Tours",
  "Luxury Tours",
  "Ramayana Tours",
  "Wellness Tours",
  "Family Tours",
  "Adventure Tours",
  "Cultural Tours",
  "Nature & Wildlife Tours",
  "Beach Tours",
  "Eco & Sustainable Tours",
  "Food & Culinary Tours",
];

const TravelPackages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Packages");
  const [filteredPackages, setFilteredPackages] = useState(travelPackages);
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);
    filterPackages(searchQuery, selectedCategory);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterPackages(searchTerm, category);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All Packages");
    setFilteredPackages(travelPackages);
  };

  const filterPackages = (search: string, category: string) => {
    const filtered = travelPackages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(search);
      const matchesCategory =
        category === "All Packages" || pkg.category === category;
      return matchesSearch && matchesCategory;
    });
    setFilteredPackages(filtered);
  };
  const handleBookNow = (id: number) => {
    router.push(`/packages/${id}`);
  };

  ``;
  return (
    <div className="p-6 bg-tropicalRainForest mt-28 pt-16">
      <div className="px-5 lg:px-20 2xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="grid md:flex md:space-x-4">
            <p className="text-xl my-auto font-lexendDeca text-[6px] text-white">
              Sort by:{" "}
            </p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-4 py-auto my-auto text-8px md:text-[16px] font-lexendDeca rounded-2xl"
            >
              {categories.map((category, index) => (
                <option
                  className="font-lexendDeca rounded-lg text-[10px] md:text-[16px]"
                  key={index}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
            <button
              onClick={handleReset}
              className="bg-none text-white font-lexendDeca border-2 border-white xl:px-8 xl:py-2 px-4 py-1 rounded-2xl"
            >
              Reset
            </button>
          </div>
          <div className="flex right-0 space-x-">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by keywords"
                className="px-4 py-2 rounded-2xl lg:w-full pl-10"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative mb-5">
                <Image
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  width={500}
                  height={192}
                  objectFit="cover"
                  className="w-full object-cover  h-48"
                 
                
                />
                <button
                  onClick={() => handleBookNow(pkg.id)}
                  className="md:text-xl px-5 py-2 absolute -bottom-5 left-5 bg-cutspink font-bold"
                >
                  {pkg.title}
                </button>
              </div>
              <div className="p-4">
                <p className="text-[10px] md:text-[12px] xl:text-[16px] mt-2">
                  {pkg.text}
                </p>
                <div className="mt-4 flex text-[8px] md:text-[12px] xl:text-[16px] justify-between items-center">
                  <div className="flex space-x-2">
                    <Image
                      className="w-4 h-4"
                      src="/Tourpackage/du.png"
                      alt="Duration"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-900 font-semibold">
                      Duration:
                    </span>{" "}
                    {pkg.duration}
                  </div>
                  <div className="flex space-x-2">
                    <Image
                      className="w-4 h-4"
                      src="/Tourpackage/grup1.png"
                      alt="Group size"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-900 font-semibold">
                      Group size:
                    </span>{" "}
                    {pkg.groupSize}
                  </div>
                </div>
                <div className="mt-4 flex justify-end items-center">
                  <button
                    onClick={() => handleBookNow(pkg.id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md"
                  >
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;

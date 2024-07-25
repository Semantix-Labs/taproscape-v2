// components/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#006362] text-white py-10  px-5 lg:px-20 2xl:px-40 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mx-auto justify-center">
          <div>
            <img src="/footerlogo.png" alt="Instagram" />
          </div>
          <p className="mt-2 text-white text-[14px] md:text-[14px] ">
            A premier destination for unforgettable tours and adventures in Sri
            Lanka.{" "}
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/taproscapes/?utm_source=ig_web_button_share_sheet">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61561368514151&sk=about">
              <img src="/Vector.png" alt="Facebook" />
            </a>
            <a href="https://www.tiktok.com/@taproscapes">
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                   stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-white  text-lg">Page Links</h2>
          <ul className="mt-4 grid grid-cols-3 md:grid-cols-1 space-y-2">
            <li className="text-white text-[14px] md:text-[14px] mt-2 ">
              <Link href="/AboutUs">About us</Link>
            </li>
            {/* <li className='text-white text-[14px] md:text-[14px] '><Link href="/Destination">Destinations</Link></li> */}
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/TourPackages">Tour Packages</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/Gallery">Gallery</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/ContractUs">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white  text-lg">
            Popular Tour Packages
          </h2>
          <ul className="mt-2 grid grid-cols-3 md:grid-cols-1 space-y-2">
            <li className="text-white text-[14px] md:text-[14px] mt-2 ">
              <Link href="/packages/1">Honeymoon Tours</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/packages/2">Luxury Tours</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/packages/4">Wellness Tours</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/packages/5">Family Tours</Link>
            </li>
            <li className="text-white text-[14px] md:text-[14px] ">
              <Link href="/packages/8">Nature & Wildlife Tours</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white  text-lg">Information</h2>
          <div className="mt-2  space-y-2">
            <h5 className="text-white text-[14px] md:text-[14px] ">
              {" "}
              Address: 2nd floor , 275 Nawala Road, Sri Jayawardenapura
              Kotte,10250
            </h5>
            <h5 className="text-white text-[14px] md:text-[14px] ">
              Phone: 077721466 / 0777417737
            </h5>
            <a href="mailto:taproscapes@gmail.com">
              <h5 className="text-white text-[14px] md:text-[14px] ">
                Email: Taproscapes@gmail.com
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white pt-6 flex justify-between text-center text-sm">
        <p className="text-white text-[14px] md:text-[14px] ">
          &copy; 2024{" "}
          <span className="text-white  text-[14px] md:text-[14px]">
            Semantix labs
          </span>{" "}
          - All Rights Reserved
        </p>
        <p className="mt-2">
          <a
            href="#"
            className="hover:underline  text-[14px] md:text-[14px] text-white"
          >
            Terms of Use
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="hover:underline  text-[14px] md:text-[14px] text-white "
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

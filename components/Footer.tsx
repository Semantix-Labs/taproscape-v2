// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#006362] text-white py-10  px-5 lg:px-20 2xl:px-40 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className='mx-auto justify-center'>
           <div>
           <img src="/footerlogo.png" alt="Instagram" />
           </div>
          <p className="mt-2 text-white text-[14px] md:text-[14px] ">A Short Description about the Villa lorem ipsum Lorem ipsum dolor sit amet, lit sed do consectetur adipiscing</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/Vector.png" alt="Facebook" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
        <div className=''>
          <h2 className="font-bold text-white  text-lg">Page Links</h2>
          <ul className="mt-4 grid grid-cols-3 md:grid-cols-1 space-y-2">
            <li className='text-white text-[14px] md:text-[14px] mt-2 '><Link href="/AboutUs">About us</Link></li>
            {/* <li className='text-white text-[14px] md:text-[14px] '><Link href="/Destination">Destinations</Link></li> */}
            <li className='text-white text-[14px] md:text-[14px] '><Link  href="/TourPackages">Tour Packages</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link   href="/Gallery">Gallery</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link href="/ContractUs">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white  text-lg">Popular Tour Packages</h2>
          <ul className="mt-2 grid grid-cols-3 md:grid-cols-1 space-y-2">
            <li className='text-white text-[14px] md:text-[14px] mt-2 '><Link href="/packages/1">Honeymoon Tours</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link href="/packages/2">Luxury Tours</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link href="/packages/4">Wellness Tours</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link href="/packages/5">Family Tours</Link></li>
            <li className='text-white text-[14px] md:text-[14px] '><Link href="/packages/8">Nature & Wildlife Tours</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white  text-lg">Information</h2>
          <div className="mt-2  space-y-2">
            <h5 className='text-white text-[14px] md:text-[14px] '> Lorem Ipsum Dolor Sit Amet, Consectetur Elit,</h5>
            <h5 className='text-white text-[14px] md:text-[14px] '>Phone: 077721466 / 0777417737</h5>
            <h5 className='text-white text-[14px] md:text-[14px] '>Email: Taproscapes@Gmail.Com</h5>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white pt-6 flex justify-between text-center text-sm">
        <p className='text-white text-[14px] md:text-[14px] '>&copy; 2024 <span className="text-white  text-[14px] md:text-[14px]">Semantix labs</span> - All Rights Reserved</p>
        <p className="mt-2">
          <a href="#" className="hover:underline  text-[14px] md:text-[14px] text-white">Terms of Use</a> | <a href="#" className="hover:underline  text-[14px] md:text-[14px] text-white ">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

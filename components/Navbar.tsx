import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      
      let scrollThreshold = 0;
      if (windowWidth >= 1140) {
        scrollThreshold = 470;
      } else if (windowWidth >= 1024) {
        scrollThreshold = 417;
      } else {
        scrollThreshold = 0; // Default threshold for other sizes
      }

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full border-gray-200 ${
        isScrolled ? "bg-white text-black" : "bg-none text-white"
      } px-5 lg:px-5 2xl:px-40 `}
    >
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
        <img className="h-16 w-16 md:h-28 md:w-28 lg:h-48 lg:w-48" src="/logo1.png" alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-mobile"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black text-white lg:hidden transition-transform duration-500 ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
          id="navbar-mobile"
        >
          {/* Close Icon Positioned Top Right */}
          <button
            onClick={handleToggle}
            type="button"
            className="absolute top-4 right-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-4 flex flex-col items-center justify-center h-full">
            <ul className="font-medium flex flex-col space-y-4 text-center">
              <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/AboutUs"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/Destination"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  Destinations
                </Link>
              </li> */}
              <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/TourPackages"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/Gallery"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                  href="/ContractUs"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={handleToggle}
                >
                  <button
                    className="mt-[-0.5rem] px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
                    style={{ fontFamily: "bagea", fontSize: "20px" }}
                  >
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-auto" id="navbar-desktop">
          <ul className="font-medium flex flex-row space-x-8">
            <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/AboutUs"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            {/* <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/Destination"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Destinations
              </Link>
            </li> */}
            <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/TourPackages"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Tour Packages
              </Link>
            </li>
            <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/Gallery"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                style={{ fontFamily: "bagea", fontSize: "20px" }}
                href="/ContractUs"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <button
                  className="mt-[-0.5rem] px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
                  style={{ fontFamily: "bagea", fontSize: "20px" }}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

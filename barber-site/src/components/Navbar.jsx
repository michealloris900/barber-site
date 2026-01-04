import { useState } from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  return (
    <nav className="fixed top-0 w-full z-50 bg shadow-lg">
      {/* Container Navbar */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png" // Ganti dengan path logo baru
            alt="BarberShop Logo"
            className="h-12 w-auto" // Sesuaikan ukuran logo
          />
          <span className="text-white text-xl font-bold ml-2">BarberShop</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden  text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-stone-950/50 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-amber-900 font-bold hover:text-amber-600 cursor-pointer"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services-and-pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-amber-900 font-bold hover:text-amber-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-amber-900 font-bold hover:text-amber-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-amber-900 font-bold hover:text-amber-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.png";
import User from "../assets/User.jpeg";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent shadow-sm fixed w-full z-50">
      <div className=" container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="E-Mart Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between items-center space-x-6">
            <NavLink to="/" className="hover:text-blue-600 text-lg">
              Home
            </NavLink>
            <NavLink to="/" className="hover:text-blue-600 text-lg">
              Shop 
            </NavLink>
            <NavLink to="/" className="hover:text-blue-600 text-lg">
              About
            </NavLink>
            <NavLink to="/" className="hover:text-blue-600 text-lg">
            News
            </NavLink>
            <div className=" p-1  bg-white rounded-sm">
              <IoMdSearch className="text-2xl text-black  " />
            </div>
            <div className=" p-1  bg-white rounded-sm">
              <FiShoppingCart className="text-2xl text-black cursor-pointer" />
            </div>
            <img
              src={User}
              alt="User"
              className="w-10 h-10 text-3xl cursor-pointer"
            />
            <button type="button" className="bg-[color:var(--Nav-Button)] py-2 px-2 rounded-md text-white cursor-pointer">
              <Link to="/shop"> Shop Now</Link>
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <FiShoppingCart className="text-2xl cursor-pointer" />
            <img
              src={User}
              alt="User"
              className="rounded-full w-8 h-8 cursor-pointer"
            />
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="#home" className="block hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="block hover:text-blue-600">
            About
          </a>
          <a href="#services" className="block hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
          <button className="bg-[color:var(--Nav-Button)] py-2 px-2 rounded-md text-white cursor-pointer">
            Shop Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

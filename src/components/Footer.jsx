import React from "react";
import image from "../assets/Images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link, Links } from "react-router-dom";
import { TbMailShare } from "react-icons/tb";
import image1 from "../assets/Images/american-express.png";
import image2 from "../assets/Images/discover.png";
import image3 from "../assets/Images/paypal.png";
import image4 from "../assets/Images/visa.png";

const Footer = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-2">
        <div className="flex flex-col flex-wrap">
          <img src={image} alt="E-Mart Logo" className="w-40" />
          <p className="text-base text-gray-800 py-3">
            Grocery platform offering fresh produce, daily essentials,
            personalized recommendations, and seamless ordering with secure
            payments and real-time tracking.
          </p>
          <div className="flex flex-row gap-5 justify-center items-center">
            <FaLocationDot color="#80B500" size={20} />
            <span>Brooklyn, New York, United States</span>
          </div>
          <div className="flex flex-row gap-5 justify-start items-center py-3">
            <FaPhoneAlt color="#80B500" size={20} />
            <span>+0123-456789</span>
          </div>
          <div className="flex flex-row gap-5 justify-start items-center py-3">
            <MdEmail color="#80B500" size={20} />
            <span>info@emart.com</span>
          </div>
          <div className="flex flex-row  flex-wrap justify-evenly items-center py-5">
            <FaFacebook color="#1877F2" size={30} />
            <FaTwitter color="#1DA1F2" size={30} />
            <FaLinkedin color="#0A66C2" size={30} />
            <IoLogoYoutube color="#FF0000" size={30} />
          </div>
        </div>
        <div className="flex flex-col flex-wrap px-10">
          <h1 className="text-xl font-semibold text-gray-700 pt-3">Company</h1>
          <div className="flex flex-col gap-5 pt-5">
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              About
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20 "
            >
              Blog
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              All Product
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Map
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              FAQs
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-xl font-semibold text-gray-700 pt-3">Service</h1>
          <div className="flex flex-col gap-5 pt-5">
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Order Tracking
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              WishList
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Login
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              My Account
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Term&Conditions
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Promotional Offer
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-xl font-semibold text-gray-700 pt-3">
            Customer Care
          </h1>
          <div className="flex flex-col gap-5 pt-5">
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Login
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              WishList
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              My Account
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              FAQs
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Order Tracking
            </Link>
            <Link
              to={"/about"}
              className=" text-lg text-gray-800 relative inline-block cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:w-0 after:h-[3px] after:bg-green-500 
          after:transition-all after:duration-300 
          hover:after:w-20"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <h1 className="text-xl font-semibold text-gray-700 pt-3">
            NewsLetter
          </h1>
          <div className="flex flex-col gap-5 pt-5">
            <p className="font-base text-lg">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-60 md:w-64 lg:w-56"
              border
              border-gray-400
              rounded
            />
            <button className="flex flex-row justify-center items-center gap-4 text-white bg-[color:var(--Nav-Button)] w-40 py-1 px-2 rounded-lg">
              <TbMailShare size={30} />
              <Link to="/email" className="text-base">
                Send Email
              </Link>
            </button>
          </div>
          <p className="text-lg text-gray-800 pt-7 font-medium">We Accept</p>
          <div className="flex flex-row flex-wrap gap-3">
            <img
              src={image3}
              alt="American Express"
              className="h-10 w-10 object-cover"
            />
            <img
              src={image2}
              alt="American Express"
              className="h-10 w-10 object-cover"
            />
            <img
              src={image4}
              alt="American Express"
              className="h-10 w-10 object-cover"
            />
            <img
              src={image1}
              alt="American Express"
              className="h-10 w-10 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-full h-22 bg-gray-900 text-white flex flex-wrap justify-center items-center sm:justify-between">
        <p className="font-normal text-sm md:text-lg lg:text-xl">
          All Rights Reserved @ E-Mart 2025
        </p>
        <div className="flex justify-center items-center gap-9">
          <Link
            to={"/terms&conditions"}
            className="text-sm md:text-lg lg:text-xl"
          >
            Terms & Conditions
          </Link>
          <Link to={"/claims"} className="text-sm md:text-lg lg:text-xl">
            Claims
          </Link>
          <Link
            to={"/privacy&policy"}
            className="text-sm md:text-lg lg:text-xl"
          >
            Privacy & Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

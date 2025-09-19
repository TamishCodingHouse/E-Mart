import React from "react";
<<<<<<< HEAD
import image from "../assets/Images/image.png";
import BannerApple from "../assets/Images/bannerApple.png";
import Bannerimage from "../assets/Images/Banner.png";
=======
import image from "../assets/image.png";
import BannerApple from "../assets/bannerApple.png";
// import BannerImage from "../assets/bannerImage-removebg-preview.png";
import BannerImg from "../assets/bannerimage.png";
>>>>>>> e4c780b7f8f01e4b7afbafc3b9a05be8d44d4ce9

const Banner = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
<<<<<<< HEAD
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 lg:gap-34 lg:pt-14">
=======
        <div className=" grid grid-cols-1 md:grid-cols-2  items-center gap-34 pt-14">
>>>>>>> e4c780b7f8f01e4b7afbafc3b9a05be8d44d4ce9
          
          {/* Left Section */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3">
<<<<<<< HEAD
              <img src={BannerApple} alt="banner icon" className="h-6 w-6" />
=======
              <img src={BannerApple} alt="banner icon" className="h-8 w-8" />
>>>>>>> e4c780b7f8f01e4b7afbafc3b9a05be8d44d4ce9
              <p className="text-base sm:text-lg lg:text-xl text-black font-medium">
                100% Genuine Products
              </p>
            </div>

<<<<<<< HEAD
            <h1 className="text-xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[color:var(--Heading-color)]">
=======
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[color:var(--Heading-color)]">
>>>>>>> e4c780b7f8f01e4b7afbafc3b9a05be8d44d4ce9
              Fresh Groceries, Delivered to Your Doorstep 🚚
            </h1>

            
            <p className="text-base sm:text-lg lg:text-xl text-black">
              Enjoy hassle-free online grocery shopping with fast delivery and
              the best quality products.
            </p>

            <button className="px-6 py-3 bg-[color:var(--Nav-Button)] hover:bg-blue-700 rounded-lg text-white font-semibold transition">
              Explore Products
            </button>
          </div>

          {/* Right Section (Image) */}
<<<<<<< HEAD
          <div className=" h-64 w-64 md:h-72 md:w-72 lg:h-112 lg:w-112  flex justify-center items-center  sm:flex md:justify-end md:items-end rounded-full bg-white ">
            <img
              src={Bannerimage}
=======
          <div className="hidden sm:flex justify-end items-end rounded-full h-114 w-114 bg-white ">
            <img
              src={BannerImg}
>>>>>>> e4c780b7f8f01e4b7afbafc3b9a05be8d44d4ce9
              alt="Side Visual"
              className=" max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-lg h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


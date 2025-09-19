import React from "react";
import image from "../assets/Images/image.png";
import BannerApple from "../assets/Images/bannerApple.png";
import Bannerimage from "../assets/Images/Banner.png";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 lg:gap-34 lg:pt-14">
          
          {/* Left Section */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3">
              <img src={BannerApple} alt="banner icon" className="h-6 w-6" />
              <p className="text-base sm:text-lg lg:text-xl text-black font-medium">
                100% Genuine Products
              </p>
            </div>

            <h1 className="text-xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[color:var(--Heading-color)]">
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
          <div className=" h-64 w-64 md:h-72 md:w-72 lg:h-112 lg:w-112  flex justify-center items-center  sm:flex md:justify-end md:items-end rounded-full bg-white ">
            <img
              src={Bannerimage}
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


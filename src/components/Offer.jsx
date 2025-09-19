// src/components/HotDeal.jsx
import React from "react";
import HotDeal from "../assets/Images/HotDeal.png"; 
import CountdownTimer from "./CountDownTimer";

const Offer = () => {
  return (
    <section className="bg-[#f9f9f5] py-12 container mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 sm:flex sm:flex-row">
        
        {/* Left Side - Product Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={HotDeal} alt="Honey Jar" className="w-72" />
        </div>
        
        {/* Right Side - Deal Info */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-green-600 font-semibold">// Todays Hot Deals</p>
          <h2 className="text-2xl md:text-3xl font-bold pt-4">ORIGINAL STOCK</h2>
          <h1 className="text-[color:var(--Nav-Button)] md:text-4xl font-extrabold pt-3 mb-6">
            HONEY COMBO PACKAGE
          </h1>

          {/* Countdown Component */}
          <CountdownTimer targetDate={Date.now() + 5000 * 60 * 60 * 24 * 10} />

          {/* Button */}
          <button className="mt-6 bg-[color:var(--Nav-Button)] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;

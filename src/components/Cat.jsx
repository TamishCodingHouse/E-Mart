import React from "react";
import products from "../Dummy/Products";
import { Link } from "react-router-dom";

const Cat = () => {
  return (
    <>
      {/* Banner */}
      <div className="bg-[color:var(--Nav-Button)] py-2 text-center sm:text-2xl max-w-full ">
        <ul className="text-white text-lg sm:text-base flex flex-wrap justify-center items-center gap-3">
          <li className="text-base sm:text-lg md:text-lg hidden sm:block ">Find Everything You Need</li>
          <li className="text-base sm:text-lg md:text-lg ">Fresh & Fast</li>
          <li className="text-base sm:text-lg md:text-lg ">| Fresh Groceries 🥗</li>
          <li className="text-base sm:text-lg md:text-lg ">| DailyNeeds ⚠️</li>
          <li className="text-base sm:text-lg md:text-lg hidden sm:block">| Healthy Living 🏃‍♂️ | Quick</li>
          <li className="text-base sm:text-lg md:text-lg ">Delivery 🚚</li>
        </ul>
      </div>
      <div className="container mx-auto">
        {/* Product Lists */}
        <div className="py-8 px-4">
          {/* Top Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[520px] md:h-[300px]">
            {products.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-row `}
              >
                <div className="p-5 md:pt-20">
                  <h1 className="font-bold text-sm md:text-lg">{item.title}</h1>
                  <p className="text-gray-700 text-sm lg:text-base mb-3">
                    {item.description}
                  </p>
                  <Link
                    to="/Shop"
                    className="text-sm font-semibold text-black underline"
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-48 h-48 md:h-72 md:w-72 lg:h-72 lg:w-72 mt-auto"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 items */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-6`}
          >
            {products.slice(2, 5).map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col`}
              >
                <div className="p-4">
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p className="text-gray-700 text-sm mb-3">
                    {item.description}
                  </p>
                  <Link
                    to="/Shop"
                    className="text-sm font-semibold text-black underline"
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48 mt-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cat;

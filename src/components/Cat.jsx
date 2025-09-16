import React from "react";
import products from "../Dummy/Products";
import { Link } from "react-router-dom";

const Cat = () => {
  return (
    <div className="container mx-auto">
      {/* Banner */}
      <div className="bg-[color:var(--Nav-Button)] py-2 text-center sm:text-2xl max-w-full gap-10 ">
        <h2 className="text-white text-lg sm:text-base">
          Find Everything You Need, Fresh & Fast | Fresh Groceries 🥗 | Daily
          Needs ⚠️ | Pantry Essentials ❇️ | Healthy Living 🏃‍♂️ | Quick
          Delivery 🚚
        </h2>
      </div>

      {/* Product Lists */}
      <div className="py-8 px-4">
        {/* Top Row: 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {products.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-row`}
            >
              <div className="p-5 pt-36">
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
                className="object-cover w-64 h-64 mt-auto"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
  );
};

export default Cat;


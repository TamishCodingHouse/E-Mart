import React from "react";
import Allproducts from "../Dummy/AllProducts";

const AllProduct = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl text-center mt-20">Featured <span className="text-[color:var(--Nav-Button)] font-bold text-3xl">Products</span></h1>
      <div className="flex flex-row flex-wrap justify-center items-center mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {Allproducts.map((items) => (
            <div
              key={items.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative"
            >
              <img
                src={items.image}
                alt={items.title}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="flex flex-col justify-center items-center">
                <p>{items.rating}</p>
                <h1 className="text-base font-semibold text-gray-800 mb-2">{items.title}</h1>
                <div className="flex flex-row justify-center items-center gap-5">
                  <span className=" text-lg text-[color:var(--Nav-Button)] font-semibold ">{items.price}</span>
                  <span className="font-medium text-sm line-through  text-[color:var(--Nav-Button)] ">{items.discount}</span>
                </div>
                <button className="mt-2 bg-[color:var(--Nav-Button)] text-sm hover:bg-green-600 text-white font-normal px-2 py-2 rounded-md cursor-pointer">
                    {items.shop}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

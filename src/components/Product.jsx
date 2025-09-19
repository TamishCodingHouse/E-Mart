import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductCategory from "../Dummy/ProductCategory";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

const Product = () => {
  const [Open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!Open);
  };

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-black text-5xl text-center my-10 ">
          Our Trendy{" "}
          <span className=" text-[color:var(--Nav-Button)] font-semibold">
            Products
          </span>
        </h2>
        {/* Mobile Icons */}
        <div className="flex md:hidden items-center justify-evenly space-x-4">
          <button className=" bg-[color:var(--Nav-Button)] rounded-lg text-black text-base py-2 px-2 ">
            <Link to={"/all"}>All Products</Link>
          </button>
          <button className="" onClick={toggle}>
            {Open ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {Open && (
          <div className="md:hidden bg-green-200 px-4 pt-2 pb-4 space-y-2 shadow-md mt-5">
            <NavLink href="#home" className="block hover:text-blue-600">
              Fruits/Drinks
            </NavLink>
            <NavLink href="#about" className="block hover:text-blue-600">
              Vegetables
            </NavLink>
            <NavLink href="#services" className="block hover:text-blue-600">
              Dried Foods
            </NavLink>
            <NavLink href="#contact" className="block hover:text-blue-600">
              Breads & Cakes
            </NavLink>
            <NavLink href="#contact" className="block hover:text-blue-600">
              Fish&Meats
            </NavLink>
          </div>
        )}

        {/* Products Links */}
        <div className=" hidden md:flex flex-wrap justify-center items-center space-x-10 md:space-x-11">
          <NavLink
            to="/Fruits"
            className={({ isActive }) =>
              `relative pb-1 border-b-2 font-medium text-xl${
                isActive ? "border-green-500" : "border-transparent"
              } hover:border-green-400`
            }
          >
            Fruits/Drinks
          </NavLink>
          <NavLink
            to="/Vegetables"
            className={({ isActive }) =>
              ` font-medium text-xl${
                isActive ? "border-green-500" : "border-transparent"
              } hover:border-green-400`
            }
          >
            Vegetables
          </NavLink>
          <NavLink
            to="/Dried Foods"
            className={({ isActive }) =>
              `font-medium text-xl${
                isActive ? "border-green-500" : "border-transparent"
              } hover:border-green-400`
            }
          >
            Dried Foods
          </NavLink>
          <NavLink
            to="/Breads&Cakes"
            className={({ isActive }) =>
              `font-medium text-xl${
                isActive ? "border-green-500" : "border-transparent"
              } hover:border-green-400`
            }
          >
            Breads & Cakes
          </NavLink>
          <NavLink
            to="/Fish@Meats"
            className={({ isActive }) =>
              ` font-medium text-xl${
                isActive ? "border-green-500" : "border-transparent"
              } hover:border-green-400`
            }
          >
            Fish&Meats
          </NavLink>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-10">
            {ProductCategory.map((items) => (
              <div
                key={items.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative"
              >
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <div className="flex flex-col justify-center items-center space-y-2">
                  <p>{items.rating}</p>
                  <h4 className="text-base font-semibold text-gray-800 mb-2">
                    {items.title}
                  </h4>
                  {/* Price */}
                  <div className="flex gap-2 items-center justify-center">
                    <span className="text-[color:var(--Nav-Button)] font-semibold text-xl">
                      ₹{items.price}
                    </span>
                    <span className="text-[color:var(--Nav-Button)] line-through font-bold text-sm">
                      ₹{items.oldprice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

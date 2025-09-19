import React from "react";
import blog from "../Dummy/blog";
import { IoPersonSharp } from "react-icons/io5";
import { VscSymbolFile } from "react-icons/vsc";
import { FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="container mx-auto py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blog</h2>
      <div className="grid md:grid-cols-3 justify-center items-center gap-10 flex-wrap">
        {blog.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-xl"
            />

            {/* Content */}
            <div className="p-10">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <IoPersonSharp  className="text-green-600" /> {blog.author}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded-md">
                  <VscSymbolFile/>{blog.category}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-4">{blog.title}</h3>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-green-600" /> {blog.date}
                </span>
                <a
                  href={blog.readMoreLink}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

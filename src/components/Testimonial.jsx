import React from "react";
import testimonials from "../Dummy/Testimonial"; // data ka naam chhota rakho

const TestimonialCard = () => {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-gray-800 font-bold text-3xl text-center pt-15">
          Client Feedback
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6 pt-10 ">
          {testimonials.map((items) => (
            <div
              key={items.id}
              className="bg-white w-[350px] shadow-md rounded-md p-4 flex items-center gap-4"
            >
              {/* Image */}
              <img
                src={items.image}
                alt={items.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              {/* Content */}
              <div>
                <p className="text-gray-600 text-sm mb-2">
                  {items.description}
                </p>
                <h3 className="text-lg font-semibold">{items.name}</h3>
                <p className="text-green-600 text-sm font-medium">
                  {items.role} {items.company && `, ${items.company}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

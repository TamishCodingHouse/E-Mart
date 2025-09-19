import React from "react";
import servicesData from "../Dummy/service";

import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";

// Mapping for libraries
const iconLibraries = {
  ai: AiIcons,
  gi: GiIcons,
  md: MdIcons,
  tb: TbIcons,
};

const Services = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((items) => {
          // Pick correct icon from JSON
          const Icon = iconLibraries[items.icon.lib][items.icon.name];

          return (
            <div
              key={items.id}
              className="flex flex-row items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition gap-10"
            >
              {/* Dynamic Icon */}
              {Icon && <Icon color="#80B500" size={80} />}

              {/* Text Content */}
              <div className="flex flex-col">
                <h2 className="font-medium text-xl">{items.title}</h2>
                <p className="font-normal text-base text-gray-600">
                  {items.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

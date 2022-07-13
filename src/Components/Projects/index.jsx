import React from "react";
import { projects } from "../../utils/index";

const index = () => {
  return (
    <div className="text-white p-1 md:p-4 scrollbar-hide md:overflow-auto">
      <p className="text-4xl text-black font-bold p-2">Projects</p>
      <div className="scrollbar-hide md:overflow-x-scroll flex flex-col md:flex-row">
        {projects.map(({ name, content, tags }, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[1000px] flex-none ml-2 m-5"
            >
              <div className="project-1 h-[300px] md:h-[600px] transition hover:delay-100 hover:filter-none group relative bg-no-repeat bg-center bg-cover hover:bg-auto z-10">
                <div className="invisible group-hover:visible transition-all duration-500 top-0 absolute group-hover:top-1/3 left-1/3 group-hover:left-[40%]">
                  <div className="m-auto bg-black/60 border border-transparent rounded-full backdrop-grayscale h-[100px] w-[100px] group-hover:h-[200px] group-hover:w-[200px] flex justify-center items-center">
                    <p className="font-semibold group-hover:text-xl text-[#E5E5E5]">
                      view project
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute bottom-8 md:pl-8 w-5/12">
                  <p className="text-2xl font-bold">{name}</p>
                  <p className="font-bold text-sm break-words">{content}</p>
                  <div className="mt-5">
                    {tags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className="text-xs border border-white py-1 px-5 rounded-full mr-2"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-4 text-black">
                <p className="text-2xl font-bold">{name}</p>
                <p className="font-bold text-sm break-words">{content}</p>
                <div className="mt-5 flex flex-wrap">
                  {tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="text-xs border border-black font-bold py-1 px-5 rounded-full mr-2 mt-2"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

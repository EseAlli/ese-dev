import React from "react";
import { experiences } from "../../utils";

const index = () => {
  return (
    <div className="md:mx-6 md:mt-12 md:py-12 md:mb-8 p-2">
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        <div className="basis-2/5 text-center md:text-left">
          <p className="text-black text-2xl md:text-4xl md:leading-tight font-semibold">
            In addition to software engineering, I also have an interest in Data
            Analysis.
          </p>
        </div>
        <div className="basis-2/4 pt-3 text-center md:text-left">
          <p className=" text-[1.4rem] font-bold">
            In addition to software engineering, I also have an interest in Data
            Analysis. I enjoy the idea of analyzing and generating useful
            insights from data. Skilled in Python, Django, JavaScript, NodeJS,
            ReactJS, TailwindCSS, Bootstrap, Postgresql, MYSQL, GIT and AWS
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-col">
        {experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="flex justify-between border border-t-black text-black last-of-type:border-b-black border-r-0 border-l-0 md:border-0"
            >
              <p className="py-5 md:text-right basis-2/5 uppercase font-bold text-lg">
                {experience.duration}
              </p>
              <div className="flex w-5/12 basis-2/4 flex-col md:flex-row md:justify-between py-5 md:border border-t-black md:border-l-0 md:border-r-0 font-black last-of-type:border-b-black text-xl">
                <p>{experience.companyName}</p>
                <p>{experience.jobTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

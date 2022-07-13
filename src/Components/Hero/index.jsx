import React from "react";

const index = () => {
  return (
    <div className="conatiner mx-auto px-4 my-5 md:px-8 md:my-9 relative z-10">
      <div className="text-3xl md:text-5xl lg:text-[4.7rem] uppercase lg:leading-tight md:leading-tight font-black relative">
        <p>
          {" "}
          Hi, I’m <span className="text-black"> Eseoghene Alli</span>.
        </p>
        <p>
          A<span className="text-black"> software developer </span>based in{" "}
          <span className="text-black"> Nigeria</span>. Currently, at Crop2Cash
          <span>
            , an Agri-Tech that provides digital financial services for farmers{" "}
          </span>
        </p>
        <div className="text-sm text-black text-right absolute right-0 top-2/3">
          {" "}
          <div className="tag">
            <i className="text-black fa fa-light fa-star-of-life"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

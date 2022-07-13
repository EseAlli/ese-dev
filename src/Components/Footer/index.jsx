import React from "react";

const index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#1A1A1A] h-[450px] md:h-[680px] p-4 md:p-9">
      <div className="flex flex-col justify-center md:items-center md:p-10">
        <div className="mx-auto p-4 flex flex-col justify-center items-center mt-20 md:mt-32 md:mb-11">
          <p className="text-white text-xl mb-5">Have a project in mind?</p>
          <h2 className="text-white font-black text-4xl md:text-6xl">
            Let’s Talk{" "}
            <span className="text-2xl">
              <i className=" text-white fa fa-light fa-star-of-life fa-spin"></i>
            </span>
          </h2>
        </div>
        <div className="hidden md:self-end md:block">
          <div className="text-white my-auto border rounded-full border-white text-center">
            <div className="px-10 py-7" role="button" onClick={scrollToTop}>
              <p className="text-xl">
                <i className="text-white fa fa-regular fa-arrow-up"></i>
              </p>
              <p className="text-xl">Top</p>
            </div>
          </div>
        </div>
        <div className="socials text-white mt-7 flex justify-between">
          <div className="md:px-32 self-start">
            <ul className="grid gap-12 md:gap-4 grid-cols-3 md:grid-cols-4 grid-rows-1 md:p-4 place-items-start md:place-items-center">
              <li className="md:text-xl text-xs font-semibold">
                <a href="https://www.linkedin.com/in/ese-alli/" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li className="md:text-xl text-xs font-semibold"><a href="#">Twitter</a></li>
              <li className="md:text-xl text-xs font-semibold">Blog</li>
              <li className="md:text-xl text-xs font-semibold">Instagram</li>
              <li className="md:text-xl text-xs font-semibold"><a href='https://github.com/EseAlli' target='_blank'>Github</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <div className="text-white my-auto border rounded-full border-white text-center m-4">
              <div className="px-6 py-3" role="button" onClick={scrollToTop}>
                <p className="text-xl">
                  <i className="text-white fa fa-regular fa-arrow-up"></i>
                </p>
                <p className="text-sm">Top</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

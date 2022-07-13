import React from "react";

const index = () => {
  return (
    <div className="h-[80px] md:h-[120px] text-black mt-2 md:mt-5">
      <div className="bg-transparent fixed w-full z-50">
        <div className="flex justify-between p-3 md:py-5 md:px-8">
          <p className="text-xl md:text-[29px] font-bold">ese</p>
          <div className="group border-[0.5px] rounded-full border-black text-lg font-bold bg-transparent mix-blend-exclusion">
            <div className="text-lg py-2 px-4 rounded-full font-bold hover:bg-black group-hover:text-[#E5E5E5] w-full">
              Download Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

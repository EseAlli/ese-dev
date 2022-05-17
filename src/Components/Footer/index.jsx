import React from 'react'

const index = () => {
  return (
    <div className="bg-[#1A1A1A] h-[450px] md:h-[680px] p-4 md:p-9">
        <div className="flex flex-col justify-center md:items-center md:p-10">
            <div className="mx-auto p-4 flex flex-col justify-center items-center mt-20 md:mt-32 md:mb-11">
                <p className="text-white text-xl mb-5">Have a project in mind?</p>
                <h2 className="text-white font-black text-4xl md:text-6xl">Let’s Talk <span className="text-2xl"><i className=" text-white fa fa-light fa-star-of-life fa-spin"></i></span></h2>
                
            </div>
            <div className="hidden md:self-end md:block">
                <div className ="text-white my-auto border rounded-full border-white text-center">
                   <div className="px-10 py-7">
                        <p className="text-xl"><i className="text-white fa fa-regular fa-arrow-up"></i></p>
                        <p className="text-xl">Top</p>
                   </div>
                </div>
            </div>
            <div className="socials text-white mt-5">
                <div className="md:px-32 self-start">
                    <ul className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 grid-rows-1 md:p-4 place-items-start md:place-items-center">
                        <li className="md:text-xl text-xs font-semibold">LinkedIn</li>
                        <li className="md:text-xl text-xs font-semibold">Twitter</li>
                        <li className="md:text-xl text-xs font-semibold">Instagram</li>
                        <li className="md:text-xl text-xs font-semibold">GitHub</li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <div className ="text-white border rounded-full border-white">
                        <p className="p-2 md:text-xl">Top</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
import React from 'react'
const index = () => {
  return (
    <div className="text-white p-1 md:p-4 overflow-auto">
        <p className="text-4xl text-black font-bold p-2">Projects</p>
        <div className="md:overflow-x-scroll flex flex-col md:flex-row">
            <div className=" h-[300px] md:h-[600px] w-full md:w-[85%] border flex-none ml-2 m-5">
                <div className="project-1 h-full transition hover:delay-100 hover:filter-none group relative bg-no-repeat bg-center bg-cover hover:bg-auto">
                    <div className="invisible group-hover:visible transition-all duration-500 top-0 absolute group-hover:top-1/3 left-1/3 group-hover:left-[40%]">
                        <div className="m-auto bg-black/60 border border-transparent rounded-full backdrop-grayscale h-[100px] w-[100px] group-hover:h-[200px] group-hover:w-[200px] flex justify-center items-center">
                            <p className="font-semibold group-hover:text-xl text-[#E5E5E5]">view project</p>
                        </div>
                    </div>
                    <div className="absolute bottom-8 md:pl-8 w-3/12">
                        <p className="text-2xl font-bold">Project Name</p>
                        <p className="font-bold text-sm">In addition to software engineering, I also have an interest in Machine Learning. I enjoy the idea of analyzing and generating useful insights from data.</p>
                        <div className ="mt-5">
                            <span className="text-xs border border-white py-1 px-5 rounded-full mr-2">JavaScript</span>
                            <span className="text-xs border border-white py-1 px-5 rounded-full">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[600px] w-[85%] border flex-none m-5">
                <div className="project-1 h-full transition hover:delay-100 hover:filter-none group relative bg-no-repeat bg-center bg-cover hover:bg-auto">
                    <div className="hidden group-hover:flex transition group-hover:delay-200 group-hover:ease-in h-full vi">
                        <div className="m-auto border rounded-full backdrop-grayscale">
                            <p className="p-11 py-20 font-semibold text-xl text-[#E5E5E5]">view project</p>
                        </div>
                    </div>
                    <div className="absolute bottom-8 md:pl-8 w-3/12">
                        <p className="text-2xl font-bold">Project Name</p>
                        <p className="font-bold text-sm">In addition to software engineering, I also have an interest in Machine Learning. I enjoy the idea of analyzing and generating useful insights from data.</p>
                        <div className ="mt-5">
                            <span className="text-xs border border-white py-1 px-5 rounded-full mr-2">JavaScript</span>
                            <span className="text-xs border border-white py-1 px-5 rounded-full">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[600px] w-[85%] border flex-none m-5">
                <div className="project-1 h-full transition hover:delay-100 hover:filter-none group relative bg-no-repeat bg-center bg-cover hover:bg-auto">
                    <div className="hidden group-hover:flex transition group-hover:delay-200 group-hover:ease-in h-full vi">
                        <div className="m-auto border rounded-full backdrop-grayscale">
                            <p className="p-11 py-20 font-semibold text-xl text-[#E5E5E5]">view project</p>
                        </div>
                    </div>
                    <div className="absolute bottom-8 md:pl-8 w-3/12">
                        <p className="text-2xl font-bold">Project Name</p>
                        <p className="font-bold text-sm">In addition to software engineering, I also have an interest in Machine Learning. I enjoy the idea of analyzing and generating useful insights from data.</p>
                        <div className ="mt-5">
                            <span className="text-xs border border-white py-1 px-5 rounded-full mr-2">JavaScript</span>
                            <span className="text-xs border border-white py-1 px-5 rounded-full">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
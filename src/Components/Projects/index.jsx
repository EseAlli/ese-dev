import React from 'react'

const index = () => {
  return (
    <div className="text-black p-4">
        <p className="text-4xl font-bold p-2">Projects</p>
        <div className="p-2 overflow-x-scroll flex w-11/12">
            <div className="h-[450px] w-[800px] border border-black">
                <div className="">
                    <p>Project Name</p>
                    <p>In addition to software engineering, I also have an interest in Machine Learning. I enjoy the idea of analyzing and generating useful insights from data.</p>
                </div>
            </div>
            <div className="h-[450px] w-[800px] border border-black">
                <div className="">
                    <p>Project Name</p>
                    <p>In addition to software engineering, I also have an interest in Machine Learning. I enjoy the idea of analyzing and generating useful insights from data.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
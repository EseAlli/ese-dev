import React from 'react'

const index = () => {
  return (
    <div className="conatiner mx-auto px-4 my-5 md:px-8 md:my-9">
        <div className="text-3xl md:text-5xl lg:text-[4.7rem] uppercase lg:leading-tight md:leading-tight font-black">
            <p> Hi, I’m <span className="text-black"> Eseoghene Alli</span>.</p>
            <p>A<span className="text-black"> software developer </span>based in <span className="text-black"> Nigeria</span>. Currently, at Crop2Cash<span>, an Agri-Tech that provides digital financial services for farmers </span></p>
            <div className="text-sm text-black relative -translate-y-4 text-right"> <p className="">writing code since 2019 .</p> <i className="text-black fa fa-light fa-star-of-life"></i></div>
        </div>
    </div>
  )
}

export default index
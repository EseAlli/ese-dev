import React from 'react'

const index = () => {
  return (
    <div className="bg-[#1A1A1A] h-[200px]">
        <div className="mx-auto p-4">
            <p className="text-white">Have a project in mind?</p>
            <h2 className="text-white">Let’s Talk</h2>
        </div>
        <div className ="text-white text-right rounded-full border-white p-4">
            <p className="">Top</p>
        </div>
        <div className="socials text-white mx-auto md:w-[50%]">
            <div className="flex align-baseline justify-between items-center">
                <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 grid-rows-1 p-4 place-items-start md:place-items-center">
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default index
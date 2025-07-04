import { useState } from 'react'
import './Home.css'
import { FaNewspaper, FaPage4, FaPagelines, FaPhone } from 'react-icons/fa'

function Home() {

  return (
    <>
      <div id="home" className="flex">

        <div className="flex-2 bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% ">

        </div>

        <div className="flex justify-center items-center content-center h-screen flex-3 bg-[#180133]">

          <div className="flex flex-col items-center">
            <div>
              <h1 className="lg:text-6xl md:text-5xl xl:text-8xl  font-bold pb-3 bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% inline-block text-transparent bg-clip-text ">Hi! This is <br /> Satvik Vansh<span className="text-yellow-300">.</span></h1>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 text-xl text-l font-medium">Experienced Software Engineer specializing in Full <br />Stack Development, AI/ML, and Computer Vision. <br /> Available for hire for innovative software development <br /> projects and recruitment opportunities.</p>
            </div>
            <div className="p-5 flex justify-center">
              <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-purple-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-purple-600 group-hover:bg-purple-500"></span>
                <span className="relative text-stone-50">Find my Resume</span>
              </button>

              <button className="text-purple-500 p-2 ml-3 cursor-pointer rounded-sm border-purple-900 border-1 font-medium transition-colors duration-200 hover:bg-purple-900">Contact Me</button>
            </div>
          </div>
        </div>

      </div>

      <div id="skills">
        <div className="flex justify-center items-center content-center h-screen flex-3 bg-[#180133]">

        </div>
      </div>

      <div id="projects">
        <div className="flex justify-center items-center content-center h-screen flex-3 bg-[#180133]">

        </div>

      </div>


    </>
  )
}

export default Home

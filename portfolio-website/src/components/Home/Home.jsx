import { useState } from 'react'
import './Home.css'
import { FaNewspaper, FaPage4, FaPagelines, FaPhone } from 'react-icons/fa'

function Home() {
  
  return (
    <>
      <div id="home" className="mt-4 flex">

        <div className='flex flex-2 bg-[#180133] justify-center items-center'>
          <div className="w-[85%] h-[85%] bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% rounded-4xl">
          </div>
        </div>

        <div className="flex justify-center items-center content-center h-[90vh] flex-3 bg-[#180133]">

          <div className="flex flex-col justify-center">
            <div>
              <h1 className="lg:text-6xl md:text-5xl xl:text-8xl  font-bold pb-3 bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% inline-block text-transparent bg-clip-text">Hi! This is <br /> Satvik Vansh<span className="text-yellow-300">.</span></h1>
            </div>
            <div className="flex items-center">
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">Experienced Software Engineer specializing in <span className='font-medium'>Full Stack Development, <br/>AI/ML, and Computer Vision</span>. Available for hire for innovative software <br/>development projects and recruitment opportunities.</p>
            </div>
            <div className="pt-10 flex">
              <button id='resume' className="p-3 mr-5 rounded-sm bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all duration-200 hover:shadow-xl shadow-purple-400/50">Find my Resume</button>
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

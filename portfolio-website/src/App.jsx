import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div class="flex">

      <div class="flex-2 bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% ">

      </div>

      <div class="flex justify-center items-center content-center h-screen flex-3 bg-[#180133]">

        <div className="font-bold ">
          <p class="text-4xl pb-3 bg-linear-[160deg] from-purple-950 from-5% via-purple-600 via-50% to-pink-300 to-90% inline-block text-transparent bg-clip-text ">Hi! This is Satvik Vansh.</p>

          <p class="text-gray-600 text-l font-medium">Experienced Software Engineer specializing in Full <br />Stack Development, AI/ML, and Computer Vision. <br /> Available for hire for innovative software development <br /> projects and recruitment opportunities.</p>
          <div className="p-5 flex justify-center">
            {/* <button className="text-stone-50 p-2 cursor-pointer rounded-sm bg-purple-600 font-medium transition-colors duration-200 hover:bg-purple-500">Find my resume</button> */}

            <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
              <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-purple-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-purple-600 group-hover:bg-purple-500"></span>
              <span class="relative text-stone-50">Find my Resume</span>
            </button>

            <button className="text-purple-500 p-2 ml-3 cursor-pointer rounded-sm border-purple-900 border-1 font-medium transition-colors duration-200 hover:bg-purple-900">Contact Me</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

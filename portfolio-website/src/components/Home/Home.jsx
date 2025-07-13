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
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">(NEED TO CHANGE) Experienced Software Engineer specializing in <span className='font-medium'>Full Stack Development, <br/>AI/ML, and Computer Vision</span>. Available for hire for innovative software <br/>development projects and recruitment opportunities.</p>
            </div>
            <div className="pt-10 flex">
              <button id='resume' className="p-3 mr-5 rounded-sm bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all duration-200 hover:shadow-xl shadow-purple-400/50">Find my Resume</button>
              <button className="text-purple-500 p-2 ml-3 cursor-pointer rounded-sm border-purple-900 border-1 font-medium transition-colors duration-200 hover:bg-purple-900">Contact Me</button>
            </div>
          </div>
        </div>

      </div>

      <div id="skills">
        <div className="flex flex-col bg-[#180133]">
          {/* header */}
          <div className='mt-20 mb-10 flex flex-col justify-center'>
            <div className='flex justify-center'>
              <div className=' bg-purple-500 w-3 rounded-sm drop-shadow-lg drop-shadow-purple-400/70'></div>
              <h1 className='px-10 bg-linear-to-r from-purple-800/50 to-pink-300/0 text-7xl font-bold text-purple-500'>Skills<span className="text-yellow-300">.</span></h1>
            </div>
            <div className='flex justify-center m-5'>
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">Get aquainted with my <span className='font-medium'>programming skills</span><span className="text-yellow-300">.</span></p>
            </div>
          </div>

          {/* skill list */}
          <div className='mx-80'>
            <div className='font-medium mb-5 text-2xl text-white'>Programming Languages</div>
            <div className='ml-2 flex flex-row'>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/c++.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/c.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/py.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='rounded-xl object-fill' src={"../../public/js.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/java.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/typ.webp"} alt="" /></div>
              
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Frontend</div>
            <div className='ml-2 flex flex-row'>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/html.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='scale-130' src={"../../public/css3.png"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/tailwind.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-fill' src={"../../public/react.webp"} alt="" /></div>
              <div className='mr-12 rounded-xl w-22 h-22'><img className='object-contain' src={"../../public/next.webp"} alt="" /></div>
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Backend</div>
            <div className='ml-2 flex flex-row'>
              <div className='mr-12 w-22 h-22'><img className='h-full w-full object-contain' src={"../../public/node.webp"} alt="" /></div>
              <div className='mr-12 w-22 h-22'><img className='rounded-xl h-full w-full object-contain' src={"../../public/express.png"} alt="" /></div>
              <div className='mr-12 w-22 h-22'><img className='h-full w-full object-cover rounded-xl' src={"../../public/mongo.webp"} alt="" /></div>
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Tools</div>
            <div className='ml-2 flex flex-row'>
              <div className='mr-12 w-22 h-22'><img className='h-full w-full object-contain' src={"../../public/git.webp"} alt="" /></div>
              <div className='mr-12 w-22 h-22'><img className='h-full w-full object-contain rounded-xl' src={"../../public/github.webp"} alt="" /></div>
              <div className='mr-12 w-22 h-22'><img className='h-full w-full object-cover rounded-xl' src={"../../public/vs.jpg"} alt="" /></div>
            </div>

          </div>
        </div>
      </div>


      <div id="projects">
        <div className="flex justify-center items-center content-center h-screen flex-3 bg-[#180133]">
          {/* header */}
          <div className='mt-20 mb-10 flex flex-col justify-center'>
            <div className='flex justify-center'>
              <div className=' bg-purple-500 w-3 rounded-sm drop-shadow-lg drop-shadow-purple-400/70'></div>
              <h1 className='px-10 bg-linear-to-r from-purple-800/50 to-pink-300/0 text-7xl font-bold text-purple-500'>Projects<span className="text-yellow-300">.</span></h1>
            </div>
            <div className='flex justify-center m-5'>
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">My projects based on <span className='font-medium'>Web Development</span><span className="text-yellow-300">.</span></p>
            </div>
          </div>
          
        </div>

      </div>


    </>
  )
}

export default Home

import { useState, useRef } from 'react'
import './Home.css'
import { CursorTooltip } from "../Tooltip";
import { FaNewspaper, FaPage4, FaPagelines, FaPhone } from 'react-icons/fa'

function Home() {
  const lang = [
    { id: 1, content: "C++", src: "../../public/c++.webp" },
    { id: 1, content: "C", src: "../../public/c.webp" },
    { id: 2, content: "Python", src: "../../public/py.webp" },
    { id: 3, content: "JavaScript", src: "../../public/js.webp" },
    { id: 4, content: "Java", src: "../../public/java.webp" },
    { id: 5, content: "Typescript", src: "../../public/typ.webp" },
  ];
  const Frontend = [
    { id: 1, content: "HTML", src: "../../public/html.webp" },
    { id: 1, content: "CSS", src: "../../public/css3.png" },
    { id: 2, content: "Tailwind", src: "../../public/tailwind.webp" },
    { id: 3, content: "React", src: "../../public/react.webp" },
    { id: 4, content: "NextJS", src: "../../public/next.webp" },
  ];
  const Backend = [
    { id: 1, content: "node.js", src: "../../public/node.webp" },
    { id: 1, content: "ExpressJS", src: "../../public/express.png" },
    { id: 2, content: "MongoDB", src: "../../public/mongo.webp" },
  ];
  const tools = [
    { id: 1, content: "Git", src: "../../public/git.webp" },
    { id: 1, content: "GitHub", src: "../../public/github.webp" },
  ];
  
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
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">(NEED TO CHANGE) Experienced Software Engineer specializing in <span className='font-medium'>Full Stack Development, <br />AI/ML, and Computer Vision</span>. Available for hire for innovative software <br />development projects and recruitment opportunities.</p>
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
              {lang.map((tech) => (
                <div className='mr-12 w-22 h-22'>
                  <CursorTooltip key={tech.id} content={tech.content}>
                    <img className='object-fill' src={tech.src} alt={tech.content} />
                  </CursorTooltip>
                </div>
              ))}
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Frontend</div>
            <div className='ml-2 flex flex-row'>
              {Frontend.map((tech) => (
                <div className='mr-12 w-22 h-22'>
                  <CursorTooltip key={tech.id} content={tech.content}>
                    <img className='object-fill' src={tech.src} alt={tech.content} />
                  </CursorTooltip>
                </div>
              ))}
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Backend</div>
            <div className='ml-2 flex flex-row'>
              {Backend.map((tech) => (
                <div className='mr-12 w-22 h-22'>
                  <CursorTooltip key={tech.id} content={tech.content}>
                    <img className='object-fill' src={tech.src} alt={tech.content} />
                  </CursorTooltip>
                </div>
              ))}
            </div>

            <div className=' my-10 font-medium mb-5 text-2xl text-white'>Tools</div>
            <div className='ml-2 flex flex-row'>
              {tools.map((tech) => (
                <div className='mr-12 w-22 h-22'>
                  <CursorTooltip key={tech.id} content={tech.content}>
                    <img className='object-fill' src={tech.src} alt={tech.content} />
                  </CursorTooltip>
                </div>
              ))}
              <CursorTooltip content="VS Code">
                <div className='mr-12 w-22 h-22'><img className='h-full w-full object-cover rounded-xl' src={"../../public/vs.jpg"} alt="" /></div>
              </CursorTooltip>
            </div>
            
            <div className='ml-2'>
              
            </div>

          </div>
        </div>
      </div>


      <div id="projects">
        <div className=" h-screen flex-3 bg-[#180133]">
          {/* header */}
          <div className='mt-20 mb-10 flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
              <div className=' bg-purple-500 w-3 rounded-sm drop-shadow-lg drop-shadow-purple-400/70'></div>
              <h1 className='px-10 bg-linear-to-r from-purple-800/50 to-pink-300/0 text-7xl font-bold text-purple-500'>Projects<span className="text-yellow-300">.</span></h1>
            </div>
            <div className='flex justify-center m-5'>
              <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">My projects based on <span className='font-medium'>Web Development</span><span className="text-yellow-300">.</span></p>
            </div>
          </div>

          {/* List */}
          <div className='flex flex-row justify-around mx-30'>
            {/* <div className='w-90 h-100 bg-blue-600 rounded-2xl'>

            </div>
            <div className='w-90 h-100 bg-blue-600 rounded-2xl'></div>
            <div className='w-90 h-100 bg-blue-600 rounded-2xl'></div> */}
          </div>

        </div>

      </div>


    </>
  )
}

export default Home

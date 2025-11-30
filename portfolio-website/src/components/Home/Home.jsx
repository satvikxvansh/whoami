import { useState, useRef } from 'react'
import SpotlightCard from '../SpotlightCard';
import './Home.css'
import ContactMe from '../Contact/Contact'
import { CursorTooltip } from "../Tooltip";
import { CiGlobe } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { Contact } from 'lucide-react';

import TextCursor from '../TextCursor';


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
        <div className=" h-auto flex-3 bg-[#180133]">
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
          <div className='flex flex-col items-center justify-around gap-10 mx-30'>

            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(223, 175, 255, 0.3)">
              <div className='flex-3 flex flex-col gap-5 p-12 '>
                <div>
                  <p className="bg-linear-[160deg] text-purple-300 inline-block bg-clip-text text-2xl font-bold "> Graph Visualizer</p>
                </div>
                <div>
                  <p className="bg-linear-[160deg] text-white text-lg font-normal">
                    A React Graph Visualizer for adjacency matrices/lists, cutting manual plotting time by 85%. Uses react-force-graph for real-time rendering of 1,000+ nodes/edges, with a responsive UI, achieving 100% cross-device compatibility and improved learning efficiency.
                  </p>
                </div>
                <div>
                  <span className="mr-5 px-3 py-2 text-sm text-white bg-purple-700 rounded-lg">React</span>
                  <span className="mr-5 px-3 py-2 text-sm text-white bg-purple-700 rounded-lg">TailwindCSS</span>
                  <span className="mr-5 px-3 py-2 text-sm text-white bg-purple-700 rounded-lg">react-force-graph</span>
                </div>
                <div className='inline-flex mt-6'>
                  <a href="https://github.com/satvikxvansh/graph-visualizer"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="mr-5 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50 cursor-pointer">
                      <FaGithub className="text-2xl" />
                      <span>GitHub</span>
                    </button>
                  </a>
                  <button className="mr-5 inline-flex items-center gap-2 px-6 py-3 bg-gray-500 text-black font-semibold rounded-lg shadow-lg ">
                    <CiGlobe />
                    <span>Live</span>
                  </button>
                </div>
              </div>
              <div className=' flex-2 ml-0 m-5'>
                <img src={"../../public/pr2.png"} className='h-full object-fill rounded-3xl shadow-xl/20' />
              </div>
            </SpotlightCard>


            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(223, 175, 255, 0.3)">
              <div className='flex-3 flex flex-col gap-5 p-12 '>
                <div>
                  <p className="bg-linear-[160deg] text-purple-300 inline-block bg-clip-text text-2xl font-bold ">Secure Password Generator</p>
                </div>
                <div>
                  <p className="bg-linear-[160deg] text-white text-lg font-normal">
                    A customizable password generator in React with selectable character sets (alphabets, numbers,
                    symbols), improving user control and boosting password strength by 80% compared to static generators.
                  </p>
                </div>
                <div>
                  <span className="mr-5 px-3 py-2 text-sm text-white bg-purple-700 rounded-lg">React</span>
                  <span className="mr-5 px-3 py-2 text-sm text-white bg-purple-700 rounded-lg">TailwindCSS</span>
                </div>
                <div className='inline-flex mt-6'>
                  <a href="https://github.com/satvikxvansh/password-generator"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="mr-5 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50 cursor-pointer">
                      <FaGithub className="text-2xl" />
                      <span>GitHub</span>
                    </button>
                  </a>
                  <button className="mr-5 inline-flex items-center gap-2 px-6 py-3 bg-gray-500 text-black font-semibold rounded-lg shadow-lg ">
                    <CiGlobe />
                    <span>Live</span>
                  </button>
                </div>
              </div>
              <div className=' flex-2 ml-0 m-5'>
                <img src={"../../public/pr1.png"} className='h-full object-cover rounded-3xl shadow-xl/20' />
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>

      <div>
        <div className='mt-20 flex flex-col justify-center items-center'>
          <div className='flex justify-center'>
            <div className=' bg-purple-500 w-3 rounded-sm drop-shadow-lg drop-shadow-purple-400/70'></div>
            <h1 className='px-10 bg-linear-to-r from-purple-800/50 to-pink-300/0 text-7xl font-bold text-purple-500'>Contact Me<span className="text-yellow-300">.</span></h1>
          </div>
          <div className='flex justify-center m-5 mb-0'>
            <p className="bg-linear-[160deg] from-gray-50 to-gray-400 inline-block text-transparent bg-clip-text text-xl text-l font-light">My projects based on <span className='font-medium'>Web Development</span><span className="text-yellow-300">.</span></p>
          </div>
        </div>

        <div className="min-h-screen flex flex-row justify-evenly items-center px-4">
          <div className="flex ml-[10%] relative w-full max-w-md rounded-2xl bg-gray-900/80 border border-gray-700/60 shadow-2xl p-6 sm:p-8 backdrop-blur">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 opacity-60 blur-xl" />

            <div className="relative">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Contact Me
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Have a question or want to work together? Drop a message below.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className='w-screen h-screen flex items-center justify-center'>
            <TextCursor
              text="⚛️"
              spacing={80}
              followMouseDirection={true}
              randomFloat={true}
              exitDuration={0.3}
              removalInterval={20}
              maxPoints={10}
            />
          </div>

        </div>
      </div>

    </>
  )
}

export default Home

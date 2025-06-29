import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = ['Home', 'Skills', 'Projects', 'Contact'];

    return (
        <div className="flex justify-center">
            <div className="backdrop-blur-md mt-2 rounded-lg bg-purple-400/40 shadow-md fixed w-[98%] z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home">
                     <div className="text-2xl font-bold text-indigo-600">Satvik Vansh<span className="text-yellow-400">.</span></div>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-15">
                        {links.map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-indigo-200 font-medium hover:text-indigo-600 transition-all">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button className="flex bg-white/60 text-indigo-800 text-md font-medium px-3 py-2 rounded-full"><p className='px-2'>Hire Me</p><FaArrowRight/></button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-inner">
                        {links.map(link => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="block text-gray-700 hover:text-indigo-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
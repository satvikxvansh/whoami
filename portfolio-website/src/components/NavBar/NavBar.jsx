import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocation, Link } from "react-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    // console.log(location);
    const toggleMenu = () => setIsOpen(!isOpen);

    const links = ['Skills', 'Projects'];

    return (
        <div className="flex justify-center mb-18">
            <div className="backdrop-blur-md bg-purple-400/40 shadow-md fixed w-screen z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home">
                     <div className="text-2xl font-bold text-indigo-600">Satvik Vansh<span className="text-yellow-400">.</span></div>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-15">
                        <li>
                            {(location.pathname != "") ?
                            <Link className="text-indigo-200 font-medium hover:text-indigo-600 transition-all" to="">Home</Link> : 
                            <a href="#home" className="text-indigo-200 font-medium hover:text-indigo-600 transition-all">Home</a>}
                        </li>
                        {links.map(link => (
                            <li>
                                {(location.pathname != "/Home") ?
                                <Link className="text-indigo-200 font-medium hover:text-indigo-600 transition-all" to="">{link}</Link> : 
                                <a href={`#${link.toLowerCase()}`} className="text-indigo-200 font-medium hover:text-indigo-600 transition-all">{link}</a>}
                            </li>
                        ))}
                        <li>
                            <Link className="text-indigo-200 font-medium hover:text-indigo-600 transition-all" to="/Contact">Contact</Link>
                        </li>
                    </ul>

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
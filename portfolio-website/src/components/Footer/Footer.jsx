import { FaCode, FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaGithub, FaHome, FaLinkedin, FaTerminal, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-[#180133] flex justify-center">
            <footer className="w-[96%] h-[95%] rounded-lg bg-gradient-to-r from-purple-950 mb-4 to-purple-600 text-white py-10 ">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo & Tagline */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Satvik Vansh<span className="text-yellow-300">.</span></h2>
                        <p className="opacity-80">Crafting clean & creative web experiences.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`transition-colors duration-300 ${item === 'Contact'
                                                ? 'border-1 px-3 py-1 rounded-full shadow-md hover:bg-yellow-400'
                                                : 'hover:text-yellow-300'
                                            }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                        <div className="flex space-x-6">
                            <a href="https://github.com/satvikxvansh" className="hover:scale-110 transition-transform duration-300">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" className="hover:scale-110 transition-transform duration-300">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com/satvikvansh" className="hover:scale-110 transition-transform duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="mailto:satvikvansh@gmail.com" className="hover:scale-110 transition-transform duration-300">
                                <FaEnvelope size={24}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="text-center mt-10 text-sm opacity-80">
                    © {new Date().getFullYear()} SatvikVansh. All rights reserved.
                </div>
            </footer>
        </div>

    );
}
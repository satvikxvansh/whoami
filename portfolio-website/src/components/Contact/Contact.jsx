import React from 'react';
import TextCursor from '../TextCursor';

const ContactMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <div className="flex relative w-full max-w-md rounded-2xl bg-gray-900/80 border border-gray-700/60 shadow-2xl p-6 sm:p-8 backdrop-blur">
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
      <div className='flex'>
        <TextCursor
          text="Connect with me!"
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />
      </div>
    </div>
    
  );
};

export default ContactMe;

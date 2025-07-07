import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-[#180133] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-purple-950 text-white rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-300 mb-8 text-center">
          Contact Me
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-pink-300 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-300 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-pink-300 text-purple-950 font-bold px-6 py-2 rounded-xl hover:bg-pink-400 transition duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

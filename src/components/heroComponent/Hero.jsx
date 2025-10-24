import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    return (
      
        <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-white to-gray-200 text-gray-950">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fadeIn">
          Hi, I'm <span className="text-blue-500">Mir Arfan Uddin</span>
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-900 animate-fadeIn delay-200">
          A passionate <span className="text-blue-700"> full-stack developer and Problem solver</span> eager to take on new challenges and contribute 
          to impactful projects in a full-time role.
        </p>

        <div className="mt-6 flex justify-center space-x-4 animate-fadeIn delay-400">
          <a href="https://github.com/MirArfan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/mir-arfan-uddin/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>
          <a href="mailto:mir.arfan.iiuc9@gmail.com">
            <FaEnvelope className="text-2xl hover:text-blue-600 transition" />
          </a>
        </div>
        
        
        
      </div>
    </section>
    )
}

export default Hero
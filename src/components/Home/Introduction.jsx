import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from "typewriter-effect";

const Introduction = (props) => {
  const resume = useSelector(state => state.resume.value)

  return (
    <section className="bg-gradient-to-r from-black-700 to-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mt-20">
          <h1 className="sm:text-5xl text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4 hover:text-gray-200 cursor-default"><Typewriter
           options={{
            strings: ["Hi, I'm Munawar Ali M"],
            autoStart: true,
            loop: true,
            cursor: '_',
            delay: 100,
          }}
            /></h1>
          <p className="text-base md:text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-8 hover:text-gray-200 cursor-default">I develop Full Stack Applications, using <span className='font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>MERN STACK</span></p>
          <p className="md:block hidden mt-4 text-pretty text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:text-gray-200 cursor-default font-semibold">
          I specialize in crafting robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a focus on design and a love for coding,
           I deliver high-quality digital experiences that surpass expectations. My forte lies in creating user-friendly interfaces and responsive web applications for seamless
            cross-device experiences.
          </p>
          <div className="mt-20">
            
  <a
    href={resume}
    className="bg-gradient-to-r text-gray-50 from-black-800 to-slate-900 hover:text-gray-200 px-2 py-1 rounded-md text-xs md:px-6 md:py-3 md:text-lg font-light md:font-medium hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition duration-500"
    download
  >
    Download Resume
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;


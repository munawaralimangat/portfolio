import React from 'react';

const Introduction = () => {
    const resumePath = import.meta.env.VITE_REACT_APP_RESUME_PATH;
    console.log(resumePath)
  return (
    <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4 hover:text-gray-200">Hi, I'm Munawar Ali M</h1>
          <p className="text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-8 hover:text-gray-200">MERN stack Developer | React Developer</p>
          <p className="mt-4 text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:text-gray-200">
          I specialize in crafting robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a focus on design and a love for coding,
           I deliver high-quality digital experiences that surpass expectations. My forte lies in creating user-friendly interfaces and responsive web applications for seamless
            cross-device experiences.
          </p>
          <div className="mt-8">
            <a
              href={resumePath}
              className="bg-gradient-to-r text-gray-50 from-slate-800 to-slate-900 hover:text-gray-200 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition duration-500"
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


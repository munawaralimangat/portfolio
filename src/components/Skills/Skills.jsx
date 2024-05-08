import React from 'react';

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:text-gray-200 mb-8 cursor-default">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="Profile"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <p className="cursor-default text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:text-gray-200 mb-4">
            Hey there! 👋 I'm Munawar Ali M, a MERN stack developer passionate about building robust and dynamic web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in crafting seamless user experiences and scalable solutions.
            I thrive in problem-solving and enjoy tackling challenges head-on. Whether it's optimizing database performance in MongoDB or implementing complex logic in Node.js, I'm dedicated to delivering high-quality code that meets project objectives.
            In addition to my technical skills, I value collaboration and communication. I believe in the power of teamwork to drive innovation and achieve success. With [Your Years of Experience] years of experience in the MERN stack, I've had the opportunity to work on a variety of projects, from e-commerce platforms to content management systems.
            Outside of coding, I'm passionate about [Your Hobbies or Interests], and I'm always eager to learn and explore new technologies. I'm excited about the endless possibilities of web development and am committed to staying at the forefront of industry trends.
            Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-black mt-20 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-50 mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://media.licdn.com/dms/image/D5603AQHgatozYu67ZA/profile-displayphoto-shrink_800_800/0/1716303942456?e=1721865600&v=beta&t=R8-dpH1EHMX1MHdepDjoPYB_0aelzgp7VmwEe0vm0J8"
              alt="Munawar Ali M"
              className="w-full h-auto rounded-lg shadow-md "
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-50 leading-relaxed mb-6">
              Hey there!, I'm Munawar Ali M, a MERN stack developer passionate about building robust and dynamic web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in crafting seamless user experiences and scalable solutions.
            </p>
            <p className="text-lg text-gray-50 leading-relaxed mb-6">
              I thrive in problem-solving and enjoy tackling challenges head-on. Whether it's optimizing database performance in MongoDB or implementing complex logic in Node.js, I'm dedicated to delivering high-quality code that meets project objectives.
            </p>
            <p className="text-lg text-gray-50 leading-relaxed mb-6">
              Outside of coding, I'm passionate about technologies, and I'm always eager to learn and explore new technologies. I'm excited about the endless possibilities of web development and am committed to staying at the forefront of industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

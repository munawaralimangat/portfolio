import React from 'react';
import { useSelector } from "react-redux";


const Projects = () => {
    const bicycleRepublic = useSelector(state => state.bicycle.value)
    console.log(bicycleRepublic)
    const projects = [
        {
          title: "BicycleRepublic",
          description: "E-Commerce Website",
          link: "#",
          image: bicycleRepublic 
        },
      ];
  return (
    <section className="py-20 bg-gradient-to-r from-black to-slate-950 min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg shadow-lg shadow-slate-800 hover:shadow-2xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block text-white bg-black hover:bg-slate-950 transition-colors duration-300 font-medium py-2 px-4 rounded"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

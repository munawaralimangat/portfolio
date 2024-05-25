// src/components/Projects.js

import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One, highlighting its main features and technologies used.",
    link: "#",
    image: "https://via.placeholder.com/300" // Replace with actual image URLs
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two, highlighting its main features and technologies used.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three, highlighting its main features and technologies used.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 font-medium py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;


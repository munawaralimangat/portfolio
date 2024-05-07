import React from 'react';
import Introduction from './Introduction';

const HomePage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800">
        <Introduction/>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-200 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 1"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 3"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

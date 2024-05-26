import React from 'react';

const skills = [
  { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" }, // Replace with actual icons
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png" },
  { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=256" },
  { name: "Express.js", icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217579-9200583.png?f=webp&w=256" },
  { name: "MongoDB", icon: "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256" },
  { name: "Tailwind CSS", icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png" },
  { name: "Git & GitHub", icon: "https://cdn.iconscout.com/icon/free/png-512/free-social-147-95508.png?f=webp&w=256" },
  { name: "AWS", icon: "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146237.png" },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-black to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:text-gray-200 mb-8 cursor-default">SKILLS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-transparent p-4 rounded-lg shadow-none hover:shadow-slate-700 hover:shadow-2xl transition-shadow duration-300">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 sm:w-24 sm:h-24 mb-4 object-contain"/>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



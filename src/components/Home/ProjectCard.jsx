import { useSelector } from "react-redux";

const ProjectCard = (props)=>{
    const bicycleRepublic = useSelector(state => state.bicycle.value)
    return (
        <div className="mt-2 bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-lg overflow-hidden">
        <img
          src={bicycleRepublic}
          alt="Project 1"
          className="w-full h-52 md:h-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mb-2">E-Commece</h3>
          <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent mb-4">
            BicycleRepublic
          </p>
          <a
            href="#"
            className="m-4 inline-block bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    )
}

export default ProjectCard;
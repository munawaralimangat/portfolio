import React from 'react';
import { useDispatch } from 'react-redux';
import Introduction from './Introduction';
import ProjectCard from './ProjectCard';
import resume from '../../assets/resume/Munawar-Ali-M-Resume(MERN).pdf'
import bicycleRepublic from '../../assets/images/Screenshot 2024-05-07 172106.png'
import { setResume} from '../../features/resumeSlice';
import { setImage } from '../../features/bicycleSlice';

const HomePage = () => {
  const dispatch = useDispatch()
  dispatch(setResume(resume))
  dispatch(setImage(bicycleRepublic))
  return (
    <section className="py-20 bg-gradient-to-r from-black to-slate-800">
        <Introduction/>
      <div className="max-w-5xl mx-auto px-4 sm:mt-40">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent m-28 sm:m-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          
          {/* Project 1 */}
          <ProjectCard />


        </div>
      </div>
    </section>
  );
};

export default HomePage;

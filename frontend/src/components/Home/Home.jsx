import React from 'react';
import { useDispatch } from 'react-redux';
import Introduction from './Introduction';
import resume from '../../assets/resume/Munawar-Ali-M-Resume(MERN).pdf'
import bicycleRepublic from '../../assets/images/Screenshot 2024-05-07 172106.png'
import { setResume} from '../../features/resumeSlice';
import { setImage } from '../../features/bicycleSlice';
import Skills from '../Skills/Skills';


const HomePage = () => {
  const dispatch = useDispatch()
  dispatch(setResume(resume))
  dispatch(setImage(bicycleRepublic))
  return (
    <section className="min-h-screen py-2 bg-gradient-to-r from-black to-slate-950">
        <Introduction/>
      <div className="max-w-5xl mx-auto px-4 sm:mt-40">
        <Skills/>
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#2d88c1] font-bold-light'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Sherry Tayyabi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Data Analyst
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a data analyst specializing in deriving insights and making data-driven decisions. Currently,
        I’m focused on analyzing complex datasets and building data models to support business intelligence and strategy.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-[#2d88c1] hover:border-[#ccd6f6]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
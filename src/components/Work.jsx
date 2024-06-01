import React from 'react';
import Mern from '../assets/DemoPhotos/mern.webp';

import DemoImg1 from '../assets/DemoPhotos/mern.webp';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2d88c1]'>
            Work
          </p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Grid Item / MERN App */}
          <div
            style={{ backgroundImage: `url(${Mern})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Workout Tracker App
              </span>
              <div className="pt-8 text-center">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1BVi-HK410FeEN-4rBB9k_3pcf9vnWReN/view?usp=sharing', '_blank')} // Open demo in a new tab/window
                >
                  Demo
                </button>
                <a href="https://github.com/sherrytayyabi/mern-workout-app" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Add more project items here similar to the above structure */}

        </div>
      </div>
    </div>
  )
}

export default Work;

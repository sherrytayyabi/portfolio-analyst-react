import GitHub from '../assets/SkillsPhotos/github.png';
import JavaScript from '../assets/SkillsPhotos/javascript.png';
import PBI from '../assets/SkillsPhotos/PBI.png';
import Java from '../assets/SkillsPhotos/java.png';
import SQL from '../assets/SkillsPhotos/sql.png';
import Python from '../assets/SkillsPhotos/python.webp';
import Excel from '../assets/SkillsPhotos/excel.png';
import Tableau from '../assets/SkillsPhotos/tableau.png';
import Figma from '../assets/SkillsPhotos/figmaLogo.png';

const Skills = () => {
    return (
        <div name='skills' className=' w-full bg-[#0a192f] text-gray-300 pt-8'>
            {/*Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]'>Skills</p> {/*Change the pink underline*/}
                    <p className='py-4'>These are the languages i've worked with</p>
                </div>

                
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                   

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="Python" />
                        <p className='my-4'>Python</p>
                    </div>
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 mx-auto' src={Java} alt="Java" />
                    <p className='my-4'>Java</p>
                </div>

                  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt="node" />
                    <p className='my-4'>MySQL</p>
                 </div>

                          
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Excel} alt="Excel" />
                    <p className='my-4'>Excel</p>
                 </div>

     
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tableau} alt="Tableau" />
                    <p className='my-4'>Tableau</p>
                 </div>

                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Figma} alt="Figma" />
                    <p className='my-9'>Figma</p>
                 </div>


                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PBI} alt="PBI" />
                    <p className='my-4'>Power BI</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                    
             
                </div>
            </div>
        </div>
    );
};

export default Skills
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2d88c1]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sheheryar Tayyabi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            Hello, I'm Sheheryar Tayyabi, a data analyst with a passion for analyzing insights from data. Over the years, I've developed a broad skill set, including Python, Java,
            and JavaScript. These tools help me analyze complex datasets and build effective data models. I manage databases using MySQL and MongoDB, and I rely on Excel and Microsoft Office
            for organizing and presenting data. I also use Jupyter Notebook and Pandas for data analysis, Tableau and Power BI for data visualization. Additionally, I utilize Figma for UI/UX 
            design principles, ensuring that my analyses are not only insightful but also user-friendly and visually appealing. I strive to create analyses that are accurate and actionable. 
            I'm always eager to learn new technologies and continuously improve my skills to stay ahead in the field of data analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
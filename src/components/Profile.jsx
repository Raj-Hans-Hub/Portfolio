import React, { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import Typed from 'typed.js'
const Profile = () => {

  const el= useRef(null);

  useEffect(()=>{
  const typed = new Typed(el.current,{
    strings:["Web Development Learner","Exploring Web Development","Frontend Learner"],
    typeSpeed:50,
    backSpeed:30,
    loop:true,
  });
  return () => {
    typed.destroy();

  };
  
  }, []);
  return (
    <>
      <div id='home' className='  w-full  scroll-mt-30 container mx-auto md:justify-center md:items-center  md:flex  my-20 '>
        <div className=' w-full   flex gap-4 px-16 flex-col font-serif  text-white  text-start'>
          

        <div className='text-3xl   '> <span className='text-red-700'>MY</span> name is</div>
        <div className='text-8xl  text-shadow-[0px_0px_15px_white]'>Raj Hans</div>
        <div className='text-2xl  '>and i'm a Frontend <span className='text-red-700'>wab</span> developer (Fresher)</div>
        <div className='text-2xl  '> <span className='text-indigo-400 ' ref={el}></span></div>
        
        <div className=' h-[50px] flex gap-2.5' >
          <button className='text-2xl  bg-blue-950  rounded-full  w-40 px-3 border cursor-pointer   hover:border-6  hover:font-bold flex items-center-safe justify-center gap-2  hover:shadow-[0px_0px_20px_white]'><FaGithub/> <span>Github</span>
          </button>
          
          <button className='text-2xl  bg-blue-950  rounded-full  w-40 px-3 border cursor-pointer   hover:border-6  hover:font-bold flex items-center-safe justify-center gap-2  hover:shadow-[0px_0px_20px_white]'><FaGithub/> <span>Resume</span>
          </button>
          
          
          </div>
        
          
        </div>
        <div className='w-full bg-blue-4000  flex justify-center'>
        <img src={`${import.meta.env.BASE_URL}a.JPG`}  alt="a" className='md:w-[400px] md:h-[400px] w-[200px] h-[200px] rounded-full border-9 shadow-[0px_0px_10px_white] border-gray-900 rotate-270' />
        </div>

      </div>
    </>
  )
}

export default Profile

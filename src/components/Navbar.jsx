import React, { useEffect, useRef, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  const [active, setActive] = useState("home");

  const scrollToSection = (id, name) => {
    setActive(name);
    document.getElementById(id).scrollIntoView(
      {

        behavior: "smooth",
      });


  };

  useEffect(() => {
    const sections = ["home", "skill", "projects", "edu", "contect"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);

        }
      });
    },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);

      }
    });

    return () => {
      observer.disconnect();
    };

  }, []);

  const ref =useRef();
  const close=() => {
    ref.current.style.left= "-500px";
  }

  
  const heamer=() => {
    ref.current.style.left= "0";
  }
  


  return (
    <nav className='  flex justify-between border border-y-gray-500 border-x-0 bg-black text-white z-20 py-2   sticky z-50 top-0 left-0'>
      <div className="logo font-bold text-xl mx-6">
        <span className=' '> !Port</span><span className='text-amber-600 '>foilo</span>
      </div>
      <div className='max-sm:block hidden text-2xl p-2' onClick={heamer}><MdMenu/></div>
      <ul className='flex gap-1 mx-6 max-sm:hidden '>
        <li onClick={() => scrollToSection("home", "home")} className={` ${active === "home" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px] text-center  transition-all`}>Home</li>
        <li onClick={() => scrollToSection("skill", "skill")} className={` ${active === "skill" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px] text-center transition-all`} >Skill</li>

        <li onClick={() => scrollToSection("projects", "projects")} className={` ${active === "projects" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700 w-[80px] text-center  transition-all`}>Projects</li>
        <li onClick={() => scrollToSection("edu", "edu")} className={` ${active === "edu" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px] text-center transition-all`}>Certificet</li>
    
        <li onClick={() => scrollToSection("contect", "contect")} className={` ${active === "contect" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px] text-center transition-all`}>Contect</li>
      </ul>

      <div className='bg-gray-900 w-3/4 max-sm:block fixed  hidden h-screen absolute top-0  left-[-500px] transition-all duration-1000 ' ref={ref}>
      <div className='text-end p-3 text-2xl' onClick={close}>x</div>
        <ul className='flex items-start   p-7 flex-col gap-10 mx-6 pt-9' >
          <li onClick={() =>{close(); scrollToSection("home", "home")}} className={` ${active === "home" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold   hover:text-red-700  w-[80px]  transition-all`} >Home</li>
          <li onClick={() =>{close(); scrollToSection("skill", "skill")}} className={` ${active === "skill" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px]  transition-all`} >Skill</li>

          <li onClick={() =>{close(); scrollToSection("projects", "projects")}} className={` ${active === "projects" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700 w-[80px]   transition-all`}>Projects</li>
          <li onClick={() =>{close(); scrollToSection("edu", "edu");}} className={` ${active === "edu" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px]  transition-all` } >Certificet</li>
          <li onClick={() =>{close(); scrollToSection("contect", "contect");}} className={` ${active === "contect" ? "text-red-700 font-bold" : ""} cursor-pointer hover:font-bold  hover:text-red-700  w-[80px]  transition-all`}>Contect</li>
        </ul>



      </div>
    </nav>
  )
}

export default Navbar

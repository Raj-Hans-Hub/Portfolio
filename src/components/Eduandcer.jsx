import React from 'react'

const Eduandcer = () => {
  return (
    <>
      <div  id='edu' className='scroll-m-11 container mx-auto  md:h-[50vh] '>
        <div className='md:text-start max-sm:text-start  ms-5 my-5 text-4xl  font-serif '>EDUCATION AND CERTIFICECTS</div>
        <div className='flex gap-2 px-10 flex flex-col justify-center items-center md:flex-row'>

        <div className="project_item_box shadow-[0px_0px_10px_white]  flex w-full">
            
            <div className="project_detail  flex font-serif text-3xl justify-center items-center w-full">
                <ul className=' '>
                    <li>Govt.Senior Secondary </li>
                    <li className='text-blue-400'>Losal, Sikar</li>
                </ul>
            </div>
        </div>
        <div className="project_item_box  flex w-full">
            <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[400px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
            
        </div>
        <div className="project_item_box  flex w-full">
            <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[400px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
            
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Eduandcer

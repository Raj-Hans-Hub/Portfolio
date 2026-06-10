import React from 'react'

const Eduandcer = () => {
  return (
    <>
     <hr className='bg-gray-500 h-[1px] '/>
      <div  id='edu' className='scroll-m-11  mx-auto container      pb-9 md:h-[50vh] '>
        <div className='md:text-start    my-9 text-4xl  font-serif max-sm:text-center max-sm:ms-0'>EDUCATION AND CERTIFICECTS</div>
        <div className='flex gap-2 gap-y-5 container mx-auto px-15 flex-col justify-center  items-center md:flex-row'>

        <div className="project_item_box shadow-[0px_0px_10px_white]   flex w-full">
            
            <div className="project_detail  flex font-serif text-3xl justify-center items-center w-full">
                <ul className=' text-center'>
                    <li>Govt.Senior Secondary </li>
                    <li className='text-blue-400'>Losal, Sikar</li>
                </ul>
            </div>
        </div>
        <div className="project_item_box   flex w-full">
            <div className="project_pic mx-auto  "><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
            
        </div>
        <div className="project_item_box  flex w-full">
            <div className="project_pic  mx-auto"><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
            
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Eduandcer

import React from 'react'

const Projects = () => {
    return (
        <>   <hr className='bg-gray-500 h-[1px] '/>
            <section id='projects' className=' scroll-mt-11 my-9   md:h-screen  container mx-auto '>
                <div className='text-start  my-3 text-4xl font-serif max-sm:text-center max-sm:ms-0  '>PROJECTS</div>
                {/* start conding project row */}
                <div className='flex gap-2  my-15 max-sm:my-0 p-5 px-10 flex flex-col justify-center items-center md:flex-row  '>
                    <div className="project_item_box    flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold px-5 w-full">
                            <h2 className='text-blue-400  text-2xl'>Tudo list</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Todo list using React.js</li>
                                <li>Added features like add, delete and edit  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  px-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Spotify</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Todo list using html, css, js</li>
                                <li>Added features like api </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* end conding project row */}
                {/* start conding project row2 */}
                <div className='flex gap-2 my-15 max-sm:my-0  px-10 flex flex-col justify-center items-center md:flex-row'>

                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold px-5 w-full">
                            <h2 className='text-blue-400 text-2xl'>Tudo list</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Todo list using React.js</li>
                                <li>Added features like add, delete and edit  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}html.jpeg`} alt="" className='h-[150px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  px-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Spotify</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Todo list using html, css, js</li>
                                <li>Added features like api </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Projects

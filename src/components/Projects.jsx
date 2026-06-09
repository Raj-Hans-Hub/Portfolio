import React from 'react'

const Projects = () => {
    return (
        <>
            <section id='projects' className=' scroll-mt-11 container mx-auto   md:h-screen  '>
                <div className='text-start ms-15 my-3 text-4xl font-serif container mx-auto '>PROJECTS</div>
                {/* start conding project row */}
                <div className='flex gap-2 p-5 px-9 flex flex-col justify-center items-center md:flex-row'>
                    <div className="project_item_box   flex w-full">
                        <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold p-5 w-full">
                            <h2 className='text-blue-400 text-2xl'>Tudo list</h2>
                            <ul className='list-disc p-5'>
                                <li>Creat a Todo list using React.js</li>
                                <li>Added features like add, delete and edit  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box flex w-full">
                        <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  p-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Spotify</h2>
                            <ul className='list-disc p-5'>
                                <li>Creat a Todo list using html, css, js</li>
                                <li>Added features like api </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* end conding project row */}
                {/* start conding project row2 */}
                <div className='flex gap-2 my-7  px-9 flex flex-col justify-center items-center md:flex-row'>

                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold p-5 w-full">
                            <h2 className='text-blue-400 text-2xl'>Tudo list</h2>
                            <ul className='list-disc p-5'>
                                <li>Creat a Todo list using React.js</li>
                                <li>Added features like add, delete and edit  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src="public/html.jpeg" alt="" className='h-[200px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  p-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Spotify</h2>
                            <ul className='list-disc p-5'>
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

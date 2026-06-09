import React, { useEffect, useRef, useState } from 'react'

const Skil = () => {
    const [show, setShow] = useState(false)
    const sectionRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShow(true);

            }
        },
            { threshold: 0.3 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();

    }, []);
    return (
        <>
            <section id='skill' ref={sectionRef} className='scroll-mt-11 border-[.1px] border-y-gray-500 border-x-0 container mx-auto'>
                <div className='  text-start ms-25 mt-9  text-4xl font-serif ' >SKILLS</div>
                <div className='container flex-col sm:flex-row justify-center  items-center  flex mx-auto    h-[80vh] '>
                    {/* start imgage set coding */}
                    <div className='w-full  flex justify-center  '><img src="public/b.jpg" alt="" className=' w-[250px] h-[250px] rounded-full  border-8 ' />
                    </div>

                    {/* end image conging */}
                    <div className=' w-full  flex  items-center justify-center   '>

                        <div className=' w-full ms-22 '>
                             
                             {/* start html bar conding */}
                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center font-semibold font-serif"><img src="public/html.jpeg" alt="" className='h-[40px] w-[40px]  ' /> <span></span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-amber-900 rounded-full transition-all ease-in-out duration-2000 ${show ? "w-[80%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                               {/* end html bar conding */}

                            {/*  start css bar conding */}
 
                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center  font-semibold font-serif"><img src="public/css.jpeg" alt="" className='h-[40px] w-[40px]  ' /> <span></span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-blue-900 rounded-full transition-all delay-2000 ease-in-out duration-2000 ${show ? "w-[75%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                            {/* eng css bar conding */}

                            {/* start js bar conding */}

 
                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center  font-semibold font-serif"><img src="public/js.jpeg" alt="" className='h-[40px] w-[40px]  ' /> <span></span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-yellow-600 rounded-full transition-all delay-4000 ease-in-out duration-2000 ${show ? "w-[60%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                            {/* end js bar conding */}

                            {/* start taiwindcss bar conding */}

                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center  font-semibold font-serif"><img src="public/tailwindcss.jpeg" alt="" className='h-[40px] w-[40px]  rotate-13 ' /> <span>JS</span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-yellow-600 rounded-full transition-all delay-6000 ease-in-out duration-2000 ${show ? "w-[60%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                              {/* end taiwindcss bar conding */}
                              {/* start bootstrap bar conding */}
                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center  font-semibold font-serif"><img src="public/boots.jpeg" alt="" className='h-[40px] w-[40px]  ' /> <span></span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-violet-600 rounded-full transition-all delay-8000 ease-in-out duration-2000 ${show ? "w-[50%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                              {/* end bootstrap bar conding */}
                              {/* start react bar conding */}
                            <div className="item w-full  gap-2 flex   items-center justify-center">
                                <div className="img mt-3 flex flex-col justify-center items-center  font-semibold font-serif"><img src="public/react.jpeg" alt="" className='h-[40px] w-[40px] bg-black  ' /> <span></span></div>
                                <div className="barbox w-3/4   ">
                                    <div className="bar w-3/4 h-3 bg-amber-50   rounded-full relative border">
                                        <div className={` h-2.5 bg-blue-500 rounded-full transition-all delay-10000 ease-in-out duration-2000 ${show ? "w-[40%]" : "w-0"} `}></div>
                                    </div>
                                </div>
                            </div>
                             {/* end react bar conding */}



                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Skil

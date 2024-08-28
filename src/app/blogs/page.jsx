"use client";

import './page.css';

const Blogs = () => {
    return(
        <>
            <section className="main-hero rounded-3xl p-[2px] m-4 shadow-lg blog-page">
                <div className="flex relative rounded-3xl bg-gradient-to-b from-blue-50 to-blue-300 h-full lg:min-h-[20rem]">
                    <div className="circles absolute pointer-events-none">
                    <div className="circle w-[60rem] h-[60rem] lg:w-[80rem] lg:h-[80rem] border border-dashed border-blue-800/30 rounded-full">
                    <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    <div className="circle w-[40rem] h-[40rem] lg:w-[60rem] lg:h-[60rem] border border-dashed border-blue-800/30 rounded-full">
                    <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    <div className="circle w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] border border-dashed border-blue-800/30 rounded-full">
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    </div>
                    <div className="main-hero-cnts px-3 py-12 mx-auto my-0 flex flex-col gap-8 z-10 relative overflow-hidden">
                        <p className='font-medium text-xl leading-snug lg:text-2xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text'><span className='font-bold'>&gt;</span> Still debugging <span className='font-extrabold'>blog.js;</span></p>
                        <div className="relative w-[100%] min-w-[28rem] md:min-w-[34rem] lg:w-[90%] lg:min-w-[40rem] h-[12rem] pointer-events-none">
                        <div className="hero-window w-[90%] min-h-80 rounded-2xl absolute top-[-4rem] flex flex-col gap-2 shadow-xl">
                            <div className="flex items-center justify-center px-4 py-1">
                                <div className="flex gap-2 absolute left-4">
                                <span className="w-3 h-3 rounded-full bg-green-400 shadow-xl"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-xl"></span>
                                <span className="w-3 h-3 rounded-full bg-red-400 shadow-xl"></span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-white text-lg'>&gt;_</span>
                                    <p className="text-base px-3 tracking-wide text-white">wecode -bash-</p>
                                </div>
                            </div>
                            <div className="flex-1 rounded-md relative bg-[#475569]">
                                <div className="px-2 py-4 h-full flex flex-col gap-6 items-center justify-center text-center overflow-hidden">
                                    <div className='w-full h-80 px-4 relative'>
                                        <div className='w-full h-full absolute top-0 left-0 rounded-xl flex flex-col px-4 text-xs leading-6 md:text-sm md:leading-8'>
                                            <p className='text-left text-blue-100 tracking-wider font-sans'>code@wecode ~ % sudo debug</p>
                                            <p className='text-left text-blue-100 tracking-wider font-sans'>Ready to debug.</p>
                                            <p className='text-left text-blue-100 tracking-wider font-sans'>If you wish to continue type ( Y ) then press return: Y</p>
                                            <p className='text-left text-blue-100 tracking-wider font-sans debugging relative w-fit'>debugging</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs;
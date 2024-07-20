"use client";

import './components-page.css';
import { useState, useEffect } from 'react';

const Components = () => {
    const texts = ['Component', 'Variant', 'Code'];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [texts.length]);

    return(
        <section className="main-hero rounded-3xl p-[2px] m-4 shadow-lg">
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
                <div className="main-hero-cnts px-3 py-12 mx-auto my-0 flex flex-col gap-8 items-center justify-center z-10 relative overflow-hidden">
                <div className='flex gap-2 relative'>
                        <p className='font-extrabold text-2xl leading-snug lg:text-3xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text'>Choose the</p>
                        <div key={currentTextIndex} className='anim-container'>
                            {
                                texts[currentTextIndex].split('').map((character, index) => {
                                    return <span key={index} style={{'--delay': `.${index}s`}}>{character}</span>
                                })
                            }
                        </div>
                    </div>
                    <p className='font-extrabold text-xl leading-snug lg:text-2xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-center'>We left everything up to you, Choice is yours!</p>
                    <div className="max-w-xl lg:max-w-3xl text-center flex flex-col gap-6 z-10">
                    <button className="pri-btn self-center tracking-wide flex items-center justify-center relative">
                        Choose now
                        <span className="inline-block w-6 h-6 ml-2 animate-pulse absolute right-4"></span>
                    </button>
                    </div>
                    <div className="relative w-[100%] min-w-96 h-[12rem] pointer-events-none">
                    <div className="hero-window w-[90%] lg:w-[80%] min-h-80 bg-blue-500 rounded-2xl absolute top-[-4rem] p-4 flex flex-col gap-2 shadow-xl">
                        <div className="window-arrow w-8 h-8 absolute" data-txt="Hamburger Menu"></div>
                        <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs px-3 tracking-wide text-white">we-code.dev</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-400 shadow-xl"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-xl"></span>
                            <span className="w-3 h-3 rounded-full bg-red-400 shadow-xl"></span>
                        </div>
                        </div>
                        <div className="flex-1 bg-blue-400 rounded-md">
                        <div className="p-5 h-full flex flex-col gap-6 items-center justify-center min-h-28 text-center overflow-hidden">
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Components;
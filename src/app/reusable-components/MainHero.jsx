import {useRef, useEffect} from 'react';
import { gsap } from 'gsap';

import './main-hero.css';

const MainHero = () => {
    const arrowRef = useRef(null);

    const hamBurgerEleRef = useRef(null);
    const sliderEleRef = useRef(null);
    const buttonEleRef = useRef(null);

    useEffect(() => {
        const parent = hamBurgerEleRef.current.closest('.hero-window');

        const {x: parentX, y: parentY} = parent.getBoundingClientRect()

        const timeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
            onRepeat: () => {
              hamBurgerEleRef.current.setAttribute('data-status', 'not-dropped');
              sliderEleRef.current.setAttribute('data-status', 'not-dropped');
              buttonEleRef.current.setAttribute('data-status', 'not-dropped');
            },
        });

        const {x:hamBurgerEleX, y:hamBurgerEleY, width:hamBurgerEleWidth, height:hamBurgerEleHeight} = hamBurgerEleRef.current.getBoundingClientRect();

        const {x:sliderEleX, y:sliderEleY, width:sliderEleWidth, height:sliderEleHeight} = sliderEleRef.current.getBoundingClientRect();

        const {x:buttonEleX, y:buttonEleY, width:buttonEleWidth, height:buttonEleHeight} = buttonEleRef.current.getBoundingClientRect();

        timeline
            .to(arrowRef.current, {
                duration: 2, 
                left: (hamBurgerEleX - parentX - (hamBurgerEleWidth)), 
                top: (hamBurgerEleY - parentY) + (hamBurgerEleHeight), 
                opacity: 1, 
                onUpdate: () => {
                    arrowRef.current.setAttribute('data-txt', 'Side Menu');
                }
            }).call(() => hamBurgerEleRef.current.setAttribute('data-status', 'dropped'))
            .to(arrowRef.current, {
                duration: 2, 
                left: (sliderEleX - parentX) + (sliderEleWidth/2), 
                top: (sliderEleY - parentY) + (sliderEleHeight/2), 
                opacity: 1, 
                onUpdate: () => {
                    arrowRef.current.setAttribute('data-txt', 'Slider');
                }
            }).call(() => sliderEleRef.current.setAttribute('data-status', 'dropped'))
            .to(arrowRef.current, {
                duration: 2, 
                left: (buttonEleX - parentX), 
                top: (buttonEleY - parentY) + (buttonEleHeight), 
                opacity: 1, 
                onUpdate: () => {
                    arrowRef.current.setAttribute('data-txt', 'Button');
                }
            }).call(() => buttonEleRef.current.setAttribute('data-status', 'dropped'));

        return () => {
            timeline.kill();
        }
    }, []);

    return(
        <section className="main-hero rounded-3xl p-[2px] m-4 shadow-lg">
            <div className="flex relative rounded-3xl bg-gradient-to-b from-blue-50 to-blue-300 h-full lg:min-h-[42rem] lg:max-h-svh">
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
                <div className="main-hero-cnts p-12 mx-auto my-0 flex flex-col gap-8 items-center justify-center z-10 relative overflow-hidden">
                    <div className="max-w-xl lg:max-w-3xl text-center flex flex-col gap-6 z-10">
                    <h2 className="font-extrabold text-3xl leading-snug lg:text-4xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Life of the developer is a series of building, testing, changing and iterating. <br/>Let us be your lifesaver.</h2>
                    <p className="text-lg">Speed up your development experience <br/>with our tailor-made, easy-to-use components.</p>
                    <button className="pri-btn self-center tracking-wide flex items-center justify-center relative">
                        Speed up now!
                        <span className="inline-block w-6 h-6 ml-2 animate-pulse absolute right-4"></span>
                    </button>
                    </div>
                    <div className="relative w-[100%] min-w-[28rem] md:min-w-[34rem] lg:w-[90%] lg:min-w-[40rem] h-[12rem] pointer-events-none">
                    <div className="hero-window w-[90%] lg:w-[80%] min-h-80 bg-blue-500 rounded-2xl absolute top-[-4rem] p-4 flex flex-col gap-2 shadow-xl">
                        <div className="window-arrow w-8 h-8 absolute" data-txt="Hamburger Menu" ref={arrowRef}></div>
                        <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-400 shadow-xl"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-xl"></span>
                            <span className="w-3 h-3 rounded-full bg-red-400 shadow-xl"></span>
                        </div>
                        <div>
                            <p className="text-sm px-5 tracking-wide text-white">localhost:3000</p>
                        </div>
                        </div>
                        <div className="flex-1 bg-blue-400 rounded-md">
                        <div className="p-5 h-full flex flex-col gap-6 items-center justify-center min-h-28 text-center overflow-hidden">
                            <div className="flex w-full justify-end">
                            <div className="w-8 h-8 lg:w-10 lg:h-10" data-status="not-dropped" ref={hamBurgerEleRef}>
                                <span className="w-full h-full inline-block rounded-full ham-span"></span>
                            </div>
                            </div>
                            <div>
                            <div data-status="not-dropped" className="flex items-center gap-2 slides" ref={sliderEleRef}>
                                <div className="w-32 h-20 lg:w-40 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg border-4 border-blue-500/50"></div>
                                <div className="w-32 h-20 lg:w-48 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg border-4 border-blue-500/50"></div>
                                <div className="w-32 h-20 lg:w-40 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg border-4 border-blue-500/50"></div>
                                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-400 absolute left-[5%] z-[1] shadow-xl flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z" fill="#2563eb"/></svg>
                                </span>
                                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-400 absolute right-[5%] z-[1] shadow-xl flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="#2563eb"/></svg>
                                </span>
                            </div>
                            </div>
                            <span data-status='not-dropped' className="text-xs w-24 h-7 px-3 py-2 lg:px-4 lg:py-2 rounded-full" ref={buttonEleRef}></span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainHero;
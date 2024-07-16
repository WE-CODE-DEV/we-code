"use client";

import { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import MainHero from "./components/MainHero";
import ComponentGrids from "./components/ComponentGrids";
import CodePreview from "./components/CodePreview";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="app flex flex-col w-full bg-white text-blue-800">
        <AppHeader sticky={isSticky}/>
        <div className="app-body">
            <MainHero/>
            <section className="components-showcase wrapper py-6 lg:py-8 flex flex-col gap-6 lg:gap-10">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Decorate your project with our components</h2>
              <div className="flex-1 flex flex-col relative">
                <ComponentGrids/>
                {/* <button className="pri-btn tracking-wide self-center">More Components</button> */}
                <button className="pri-btn self-center tracking-wide flex items-center justify-center relative">
                    More Components
                    <span className="inline-block w-5 h-5 ml-2 animate-pulse absolute right-4"></span>
                </button>
              </div>
            </section>
            <CodePreview/>
        </div>
        <div className="app-footer bg-gradient-to-b from-blue-50 to-blue-300 border border-dashed border-l-0 border-r-0 border-b-0 border-blue-400 shadow-inner">
          <footer className="wrapper py-6 lg:py-8">
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-6">
              <div className="max-w-96 flex flex-col gap-2">
                <h1 className="font-extrabold text-xl lg:text-2xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">We Code</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aut, saepe dolorem maxime laboriosam ullam, eius facere officia explicabo.</p>
                <ul className="flex gap-2 mt-4">
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                </ul>
              </div>
              {/* <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input type="text" id="request-component" placeholder="Request a component" className="px-4 py-2 rounded-full outline-none border-2 border-blue-300 shadow-inner focus:border-blue-400"/>
                  <label htmlFor="request-component" className="px-5 py-2 bg-gradient-to-br from-blue-400 to-blue-700 text-blue-50 rounded-full cursor-pointer shadow-lg flex items-center justify-center"><span>Request</span></label>
                </div>
                <div>
                  <p>Consider contributing</p>
                </div>
              </div> */}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import AppHeader from "./components/AppHeader";
import MainHero from "./components/MainHero";
import ComponentGrids from "./components/ComponentGrids";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="app flex flex-col w-full bg-blue-100 text-blue-800">
        <AppHeader/>
        <div className="app-body">
            <MainHero/>
            <section className="components-showcase wrapper py-10 flex flex-col gap-6 lg:gap-10">
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
            <section className="clipboard wrapper py-10 flex flex-col gap-4 min-h-svh">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Copy what you need</h2>
              <p>Copy it and customize it as you want.</p>
              <div className="flex border gap-4">
                {/* <div className="left min-w-80">
                  <ul>
                    <li>Get HTML + CSS + JS</li>
                    <li>Get React Code</li>
                  </ul>
                </div> */}
                <div className="right flex-1 overflow-hidden">
                  <div className="screen w-full h-full min-h-96 bg-[rgb(30,32,34)] rounded-xl shadow-2xl p-4">
                    <div className="w-full h-full flex flex-col">
                      <div className="screen-header flex items-center gap-6">
                        <ul className="flex gap-2 translate-y-[-.5rem]">
                          <li className="w-3 h-3 bg-red-500 rounded-full"></li>
                          <li className="w-3 h-3 bg-yellow-500 rounded-full"></li>
                          <li className="w-3 h-3 bg-green-500 rounded-full"></li>
                        </ul>
                        <div className="">
                          <ul className="tabs flex gap-2">
                            <li className="tab active html"><span>index.html</span></li>
                            <li className="tab css"><span>styles.css</span></li>
                            <li className="tab js"><span>index.js</span></li>
                            <li className="tab react"><span>app.jsx</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="screen-body flex-1 rounded-xl overflow-auto">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div className="app-footer"></div>
      </div>
    </div>
  );
}

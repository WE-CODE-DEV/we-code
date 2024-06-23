"use client";

import Image from "next/image";
import AppHeader from "./components/AppHeader";
import MainHero from "./components/MainHero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="app flex flex-col w-full bg-blue-100 text-blue-800">
        <AppHeader/>
        <div className="app-body">
            <MainHero/>
            <section className="components-showcase wrapper py-10 flex flex-col gap-10">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Decorate your project with our components</h2>
              <div className="flex-1">
                <div className="component-grids gap-8">
                  <div className="flex flex-col gap-6 justify-center">
                    <h3 className="font-bold text-2xl">We have showcased some of our components</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos quidem explicabo sunt nihil quae, ipsa molestias, minima reiciendis ea quo eligendi quibusdam asperiores aliquid, expedita ratione fuga esse autem!</p>
                    <button className="pri-btn self-start">Explore more</button>
                  </div>
                  <div className="component"><span>Gooey Navigation</span></div>
                  <div className="component"><span>Pagination 1</span></div>
                  <div className="component"><span>Pagination 2</span></div>
                  <div className="component"><span>Calendar</span></div>
                  <div className="component"><span>Search</span></div>
                  <div className="component"><span>Sidebar Navigation</span></div>
                </div>
              </div>
            </section>
        </div>
        <div className="app-footer"></div>
      </div>
    </div>
  );
}

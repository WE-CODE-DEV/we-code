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
              <div className="flex-1">
                <ComponentGrids/>
              </div>
            </section>
        </div>
        <div className="app-footer"></div>
      </div>
    </div>
  );
}

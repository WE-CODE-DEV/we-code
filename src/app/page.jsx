"use client";

import MainHero from "./reusable-components/MainHero";
import ComponentGrids from "./ComponentGrids";
import ComponentLargePreview from "./reusable-components/ComponentLargePreview";
import Link from "next/link";

export default function Home() {

  const component = {
    "_id": "66aae00acee507776b3673b1",
    "name": "3D Slider",
    "tags": [],
    "variants": [
      {
        "theme": "dark",
        "priClr": "#1e2022",
        "secClr": "#333539"
      },
      {
        "theme": "light",
        "priClr": "#fff",
        "secClr": "#cecece"
      },
      {
        "theme": "custom",
        "priClr": "#ccdff9",
        "secClr": "#60a5fa"
      }
    ],
    "isScale": true,
    "componentName": "SliderPreview",
    "keyWords": [],
    "dateAdded": "2024-08-01T01:08:26.908Z",
    "createdAt": "2024-08-01T01:08:26.930Z",
    "updatedAt": "2024-08-01T01:08:26.930Z",
    "__v": 0
  };

  return (
      <>
          <MainHero/>
          <section className="components-showcase wrapper py-6 lg:py-8 flex flex-col gap-6 lg:gap-10">
            <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Decorate your project with our components</h2>
            <div className="flex-1 flex flex-col relative">
              <ComponentGrids/>
              {/* <button className="pri-btn tracking-wide self-center">More Components</button> */}
              <Link href={"/components/"} className="pri-btn self-center tracking-wide flex items-center justify-center relative">
                  More Components
                  <span className="inline-block w-5 h-5 ml-2 animate-pulse absolute right-4"></span>
              </Link>
            </div>
          </section>
          {/* <CodePreview/> */}
          <section className="clipboard wrapper flex flex-col gap-6 py-6 lg:py-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Copy what you need</h2>
              <p>Preview the component, choose the variant which suits you, and copy it, it's that simple</p>
            </div>
            <ComponentLargePreview component={component} updateParams={false}/>
          </section>
      </>
  );
}

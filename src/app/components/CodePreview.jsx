import Slider from "./snippets/Slider";
import { useState, useRef, useEffect } from "react";

const ComponentPreview = () => {
  return(
    <div className="overflow-hidden component-preview">
      <div className="component light min-h-96">
          <Slider/>
      </div>
    </div>
  );
}

const CodeWindowPreview = () => {
  return(
    <>
      <div className="mb-4 code-tabs flex gap-4 items-center w-fit rounded-full mx-auto">
        <ul className="flex gap-4 flex-wrap">
          <li className="cursor-pointer active">HTML + CSS + JS Code</li>
          <li className="cursor-pointer">React Code</li>
        </ul>
      </div>
      <div className="screen bg-[rgb(30,32,34)] rounded-xl shadow-2xl p-4">
        <div className="flex flex-col">
          <div className="screen-header flex items-center gap-6">
            <ul className="flex gap-2 translate-y-[-.5rem]">
              <li className="w-3 h-3 bg-red-500 rounded-full"></li>
              <li className="w-3 h-3 bg-yellow-500 rounded-full"></li>
              <li className="w-3 h-3 bg-green-500 rounded-full"></li>
            </ul>
            <div className="overflow-x-auto overflow-y-hidden lg:overflow-visible mr-2">
              <ul className="tabs flex gap-2">
                <li className="tab active html"><span>index.html</span></li>
                <li className="tab css"><span>styles.css</span></li>
                <li className="tab js"><span>index.js</span></li>
                <li className="tab react"><span>app.jsx</span></li>
              </ul>
            </div>
          </div>
          <div className="screen-body min-h-80 rounded-xl overflow-auto">
          </div>
        </div>
      </div>
    </>
  );
}

const CodePreview = () => {
  const tabsRef = useRef(null);

  const [currentTab, setCurrentTab] = useState(0);

  const moveToTab = (index) => {
    const parent = tabsRef.current;

    if(parent){
      const tabs = parent.querySelectorAll('.tab');

      const {left:parentX} = parent.getBoundingClientRect();

      const {width, height, left} = tabs[index].getBoundingClientRect();
  
      tabsRef.current.style.setProperty('--tabW', `${width}px`);
      tabsRef.current.style.setProperty('--tabH', `${height}px`);
      tabsRef.current.style.setProperty('--tabX', `${left - parentX}px`);

      setCurrentTab(index);
    }
  }

  useEffect(() => moveToTab(currentTab), []);

    return(
        <section className="clipboard wrapper flex flex-col gap-6 min-h-svh">
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Copy what you need</h2>
              <p>Preview the component, choose the variant which suits you, and copy it, it's that simple</p>
            </div>
              
            <div className="flex flex-col gap-4 w-full preview">
              <ul className="flex gap-1 self-center tabs p-2" ref={tabsRef}>
                {
                  ['Preview', 'Code'].map((text, index) => 
                    <li className={(index === currentTab) ? 'tab active' : 'tab'} key={`tab-${index}`} onClick={()=>moveToTab(index)}>{text}</li>
                  )
                }
              </ul>
            </div>
            <div className="overflow-hidden">
              {(currentTab == 0) ? <ComponentPreview/> : <CodeWindowPreview/>}
            </div>              
            </section>
    );
}

export default CodePreview;
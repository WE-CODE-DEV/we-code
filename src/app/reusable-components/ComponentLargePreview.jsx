import { useEffect, useState, useRef, Suspense, lazy } from "react";
import ComponentLoader from "./ComponentLoader";
import HighlightCode from "../snippets/HighlightCode";
import './ComponentLargePreview.css';

const ComponentCode = ({ componentName }) => {
  const [curCodeVarIndex, setCurCodeVarIndex] = useState(0);
  const [curTabIndex, setCurTabIndex] = useState(0);
  const [codes, setCodes] = useState({});
  const [codeMap, setCodeMap] = useState(null);
  const [text, setText] = useState("");

  const copyToClipboard = async (event) => {
    try{
      await navigator.clipboard.writeText(text);
      const targetEle = event.target.closest('.floating');

      targetEle.setAttribute('data-iscopied', true);

      const timer = setTimeout(()=> {
        targetEle.setAttribute('data-iscopied', false);
        clearTimeout(timer);
      }, 1000);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const importModule = async () => {
      try {
        const module = await import(
          `../snippets/${componentName}/${componentName}Code`
        );
        // Extract variables from the imported module
        const { htmlCode, cssCode, jsCode, codeMap } = module;

        setCodes({ htmlCode, cssCode, jsCode });

        setCodeMap(codeMap);

        setText(codeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || "");
      } catch (error) {
        console.error("Error importing module:", error);
      }
    };

    importModule();
  }, [componentName]);

  useEffect(() => {
    setCurTabIndex(0);
  }, [curCodeVarIndex]);

  useEffect(() => {
    codeMap && setText(codeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || "");
  }, [curCodeVarIndex, curTabIndex, codeMap]);

  return (
    <>
      <div className="mb-4 code-tabs flex gap-4 items-center w-fit rounded-full mx-auto">
        <ul className="flex gap-4 flex-wrap">
          {["HTML + CSS + JS Code", "React Code"].map((txt, index) => {
            return (
              <li
                className={`cursor-pointer select-none ${
                  curCodeVarIndex === index ? "active" : ""
                }`}
                key={`code-variants-${index}`}
                onClick={() => setCurCodeVarIndex(index)}
              >
                {txt}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="screen bg-[rgb(30,32,34)] rounded-xl shadow-2xl p-4 min-h-96">
        <div className="flex flex-col">
          <div className="screen-header flex items-center gap-6">
            <ul className="flex gap-2 translate-y-[-.5rem]">
              <li className="w-3 h-3 bg-red-500 rounded-full"></li>
              <li className="w-3 h-3 bg-yellow-500 rounded-full"></li>
              <li className="w-3 h-3 bg-green-500 rounded-full"></li>
            </ul>
            <div className="overflow-x-auto overflow-y-hidden lg:overflow-visible mr-2 min-h-[37px]">
              <ul className="tabs flex gap-2">
                {
                  codeMap ? codeMap[curCodeVarIndex].map((arr, index) => {
                    const [code, language, fileName, styleClass] = arr;
                    return (
                      <li
                        className={`tab ${styleClass} ${
                          curTabIndex === index ? "active" : ""
                        }`}
                        key={`code-tab-${index}`}
                        onClick={() => setCurTabIndex(index)}
                      >
                        <span>{fileName}</span>
                      </li>
                    );
                  }) 
                  : 
                  <>
                    <li className="tab loading html active"><span></span></li>
                    <li className="tab loading css "><span></span></li>
                    <li className="tab loading js "><span></span></li>
                  </>
                }
              </ul>
            </div>
          </div>
          <div className="screen-body w-full h-80 rounded-xl overflow-auto relative">
            {
              codeMap ? (
                <>
                  <HighlightCode
                    code={text}
                    language={codeMap[curCodeVarIndex]?.[curTabIndex]?.[1] || ""}
                  />
                  <div className="floating fixed bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-300 shadow-2xl rounded-full cursor-pointer flex items-center justify-center active:scale-95 transition-all"
                    title="Copy to clipboard"
                    data-iscopied="false"
                    onClick={(event) => copyToClipboard(event)}
                  >
                    <div className="copy-to-cb w-7 h-7">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#1C274C" strokeWidth="1.5">
                          <path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" />
                          <path className="clipboard-path" d="M7 14.5h8M7 18h5.5" />
                          <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </>
              ) : <div className="w-full h-full text-blue-50 flex">
                <ul className="w-[60%] m-5 flex flex-col justify-between animate-pulse">
                  <li className="w-[80%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-full h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[90%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[60%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[70%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[50%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[75%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-full h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[60%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[70%] h-3 bg-slate-700 rounded-md"></li>
                  <li className="w-[50%] h-3 bg-slate-700 rounded-md"></li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

const Component = ({ componentName, theme, reload }) => {
  const [LoadedComponent, setLoadedComponent] = useState(null);

  useEffect(() => {
    const loadComponent = () => {
      const loaded = ComponentLoader(componentName);
      setLoadedComponent(() => loaded);
    };

    loadComponent();
  }, [componentName]);

  if (!LoadedComponent) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Component Loading</div>}>
      <LoadedComponent theme={theme} key={reload} />
    </Suspense>
  );
};

const ComponentLargePreview = ({ component }) => {
  const { variants, componentName } = component;

  const [currentTab, setCurrentTab] = useState(0);
  const [reload, setReload] = useState(false);

  const variantsRef = useRef(null);
  const themesObj = variants;

  const tabsRef = useRef(null);

  const moveToTab = (index) => {
    const parent = tabsRef.current;

    if (parent) {
      const tabs = parent.querySelectorAll(".tab");

      const { left: parentX } = parent.getBoundingClientRect();

      const { width, height, left } = tabs[index].getBoundingClientRect();

      tabsRef.current.style.setProperty("--tabW", `${width}px`);
      tabsRef.current.style.setProperty("--tabH", `${height}px`);
      tabsRef.current.style.setProperty("--tabX", `${left - parentX}px`);

      setCurrentTab(index);
    }
  };

  useEffect(() => moveToTab(currentTab), [currentTab]);

  const Preview = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = (event) => {
      if (event.target.tagName === "LI") {
        const getTheme = event.target.getAttribute("data-theme");

        const { top: parentY } = event.target
          .closest("ul")
          .getBoundingClientRect();

        const { top } = event.target.getBoundingClientRect();

        event.target
          .closest("ul")
          .style.setProperty("--circleY", `${top - parentY}px`);

        setTheme(getTheme);
      }
    };

    return (
      <div className="component flex items-center justify-center min-h-96">
        <button
          className="refresh-component"
          title="Reload Component"
          onClick={() => setReload(!reload)}
        ></button>
        <div
          className="absolute top-[50%] translate-y-[-50%] right-5 rounded-full z-[1]"
          ref={variantsRef}
          onClick={changeTheme}
        >
          <ul className="flex flex-col gap-3 themes">
            {themesObj &&
              themesObj.map(({ theme, priClr, secClr }, index) => (
                <li
                  style={{
                    background: `linear-gradient(to bottom right, ${priClr} 50%, ${secClr} 50%)`,
                  }}
                  data-theme={theme}
                  title={theme}
                  key={`${componentName}-theme-${index}`}
                ></li>
              ))}
          </ul>
        </div>
        <button
          className="go-to-code"
          title="Go to Code"
          onClick={() => setCurrentTab(1)}
        ></button>
        <Component
          componentName={componentName}
          theme={theme}
          reload={reload}
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full preview">
          <ul className="flex gap-1 self-center tabs p-2" ref={tabsRef}>
            {["Preview", "Code"].map((text, index) => (
              <li
                className={index === currentTab ? "tab active" : "tab"}
                key={`tab-${index}`}
                onClick={() => moveToTab(index)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden component-preview-lg">
          {currentTab === 0 ? (
            <Preview />
          ) : (
            <ComponentCode componentName={componentName} />
          )}
        </div>
      </div>
    </>
  );
};

export default ComponentLargePreview;

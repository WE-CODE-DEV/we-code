import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import ComponentLoader from "./ComponentLoader";
import HighlightCode from "../snippets/HighlightCode";
import './ComponentLargePreview.css';

const ComponentCode = ({ componentName, theme }) => {
  const [curCodeVarIndex, setCurCodeVarIndex] = useState(0);
  const [curTabIndex, setCurTabIndex] = useState(0);
  const [codeMap, setCodeMap] = useState(null);
  const [text, setText] = useState("");
  const [lineWrap, setLineWrap] = useState(false);

  const wrapLine = () => {
    const newLineWrap = !lineWrap;
    setLineWrap(newLineWrap);
    localStorage.setItem('LINE_WRAP', JSON.stringify(newLineWrap));
  }

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

        const { codeMap, themes } = module;

        const themeCode = themes[theme] || "";

        const updatedCodeMap = Object.keys(codeMap).reduce((acc, key) => {
          acc[key] = codeMap[key].map(([code, language, fileName, styleClass]) => {
            if (language === 'css') {
              const updatedCode = code.replace(/\$\{themeCode\}/g, themeCode);
              return [updatedCode, language, fileName, styleClass];
            }
            return [code, language, fileName, styleClass];
          });
          return acc;
        }, {});

        setCodeMap(updatedCodeMap);

        setText(updatedCodeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || "");
      } catch (error) {
        console.error("Error importing module:", error);
      }
    };

    importModule();
  }, [componentName, theme]);

  useEffect(() => {
    setCurTabIndex(0);
  }, [curCodeVarIndex]);

  useEffect(() => {
    codeMap && setText(codeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || "");
  }, [curCodeVarIndex, curTabIndex, codeMap]);

  useEffect(() => {
    const savedLineWrap = JSON.parse(localStorage.getItem('LINE_WRAP'));
    if (savedLineWrap !== null) {
      setLineWrap(savedLineWrap);
    }
  }, []);

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
      <div className="screen bg-[rgb(30,32,34)] rounded-xl shadow-2xl p-4 pb-2.5 min-h-96">
        <div className="flex flex-col">
          <div className="screen-header flex items-center gap-6">
            <ul className="flex gap-2 translate-y-[-.5rem]">
              <li className="w-3 h-3 bg-red-500 rounded-full"></li>
              <li className="w-3 h-3 bg-yellow-500 rounded-full"></li>
              <li className="w-3 h-3 bg-green-500 rounded-full"></li>
            </ul>
            <div className="overflow-x-auto overflow-y-hidden lg:overflow-visible mr-2 min-h-[34px]">
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
                    linewrap={lineWrap}
                    language={codeMap[curCodeVarIndex]?.[curTabIndex]?.[1] || ""}
                  />
                  <div className="floating fixed bottom-12 right-12 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-300 shadow-2xl rounded-full cursor-pointer flex items-center justify-center active:scale-95 transition-all"
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
        <div className="flex gap-1.5 mt-1.5 items-center justify-end transition-all"><input type="checkbox" name="Wrap Code" id="line-wrap" className="accent-zinc-300 opacity-80 hover:opacity-100 transition-all w-2.5 h-2.5 cursor-pointer" checked={lineWrap} onChange={wrapLine}/><label htmlFor="line-wrap" className="cursor-pointer text-zinc-300 text-xs select-none opacity-80 hover:opacity-100">Line wrap</label></div>
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

  const LoadingSkeleton = () => {
    return (
      <div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path d="M20 7h-2.151C17.35 7 17 6.498 17 6a3 3 0 1 0-6 0c0 .498-.351 1-.849 1H8a1 1 0 0 0-1 1v2.151C7 10.65 6.498 11 6 11a3 3 0 1 0 0 6c.498 0 1 .351 1 .849V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.151c0-.498-.503-.849-1-.849a3 3 0 1 1 0-6c.497 0 1-.351 1-.849V8a1 1 0 0 0-1-1Z" fill="#dbeafe87" stroke="#dbeafe" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <animate attributeName="stroke-dasharray" from="0, 68.1767349243164" to="68.1767349243164, 0" dur="2s" repeatCount="indefinite" />
          </path>
      </svg>
      </div>
    )
  }

  if (!LoadedComponent) {
    return <LoadingSkeleton/>
  }

  return (
    <Suspense fallback={<LoadingSkeleton/>}>
      <LoadedComponent theme={theme} key={reload} />
    </Suspense>
  );
};

const ComponentLargePreview = ({ component, updateParams = true }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  
  const params = new URLSearchParams(searchParams);

  // const hasTheme = params.has('theme');
  const initialTheme = params.get('theme') || 'dark';
  // const [theme, setTheme] = useState("dark");
  const [theme, setTheme] = useState(initialTheme);
  const { variants, componentName } = component;
  const [reload, setReload] = useState(false);
  
  const hasPreview = params.has('preview');
  const hasCode = params.has('code');

  const initialTab = updateParams
  ? (hasPreview || (!hasPreview && !hasCode) ? 0 : 1)
  : 0;

  const [currentTab, setCurrentTab] = useState(initialTab);

  const variantsRef = useRef(null);
  const themesObj = variants;

  const tabsRef = useRef(null);

  const moveToTab = (index) => {
    // if(index === currentTab) return;

    const parent = tabsRef.current;

    if(updateParams){
      const newParams = new URLSearchParams(searchParams);

      if (index === 0 && !newParams.has('preview')) {
        newParams.set('preview', 'true');
        newParams.delete('code');
      } else if (index === 1 && !newParams.has('code')){
        newParams.set('code', 'true');
        newParams.delete('preview');
      }

      router.push(`${pathName}?${newParams.toString()}`, undefined, { shallow: true });
    }

    if(parent) {
      const tabs = parent.querySelectorAll(".tab");

      const { left: parentX } = parent.getBoundingClientRect();

      const { width, height, left } = tabs[index].getBoundingClientRect();

      tabsRef.current.style.setProperty("--tabW", `${width}px`);
      tabsRef.current.style.setProperty("--tabH", `${height}px`);
      tabsRef.current.style.setProperty("--tabX", `${left - parentX}px`);
    }

    setCurrentTab(index);

    if(index === 0) changeThemeIndicator();
  };

  useEffect(() => {
    if (hasCode) {
      setCurrentTab(1);
    }
    else{
      setCurrentTab(0);
    }
  }, [hasCode, searchParams]); 

  useEffect(() => moveToTab(currentTab), [currentTab]);

  const changeTheme = (targetEle) => {
    const getTheme = targetEle.getAttribute("data-theme");

    const { top: parentY } = targetEle
      .closest("ul")
      .getBoundingClientRect();

    const { top } = targetEle.getBoundingClientRect();

    targetEle
      .closest("ul")
      .style.setProperty("--circleY", `${Math.ceil(top - parentY)}px`);

    if(theme !== getTheme){
      const newParams = new URLSearchParams(searchParams);
      newParams.set('theme', getTheme);
          
      router.replace(`${pathName}?${newParams.toString()}`, undefined, { shallow: true });
    }

    setTheme(getTheme);
  }

  const changeThemeIndicator = () => {
    if(variantsRef.current){
      const liElems = variantsRef.current.querySelectorAll('li');

      let targetLi = Array.from(liElems).filter(li => li.getAttribute('data-theme') === theme)[0];
      
      if(!targetLi){
        setTheme('dark');
        targetLi = liElems[0];
      }

      const timer = setTimeout(() => {
        changeTheme(targetLi);
      }, 200);
    
      return () => clearTimeout(timer);
    }
  }

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
              <div className="component flex items-center justify-center min-h-96">
                <button
                  className="refresh-component"
                  title="Reload Component"
                  onClick={() => setReload(!reload)}
                ></button>
                <div
                  className="absolute top-[50%] translate-y-[-50%] right-5 rounded-full z-[1]"
                  ref={variantsRef}
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
                          onClick={(event)=>changeTheme(event.target)}
                        ></li>
                      ))}
                  </ul>
                </div>
                <button
                  className="go-to-code"
                  title="Navigate to code"
                  onClick={() => setCurrentTab(1)}
                ></button>
                <Component
                  componentName={componentName}
                  theme={theme}
                  reload={reload}
                />
              </div>
            
          ) : (
            <ComponentCode componentName={componentName} theme={theme} />
          )}
        </div>
      </div>
    </>
  );
};

export default ComponentLargePreview;

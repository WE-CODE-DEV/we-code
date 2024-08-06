import { useEffect, useState, useRef, Suspense } from "react";
import ComponentLoader from "./ComponentLoader";

const ComponentToggler = () => {
    const tabsRef = useRef(null);

  const [currentTab, setCurrentTab] = useState(0);

  const navigateToCode = () => moveToTab(1);

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

  useEffect(() => moveToTab(currentTab), [currentTab]);

  return (
        <div className="flex flex-col gap-4 w-full preview">
            <ul className="flex gap-1 self-center tabs p-2" ref={tabsRef}>
                {
                ['Preview', 'Code'].map((text, index) => 
                    <li className={(index === currentTab) ? 'tab active' : 'tab'} key={`tab-${index}`} onClick={()=>moveToTab(index)}>{text}</li>
                )
                }
            </ul>
        </div>
    )
}

const ComponentLargePreview = ( props ) => {
    const { variants, children, componentName } = props.component;

    const [reload, setReload] = useState(false);
    const [theme, setTheme] = useState('dark');

    const [LoadedComponent, setLoadedComponent] = useState(null);
    const variantsRef = useRef(null);
    const [themesObj, setThemesObj] = useState([]);

    const changeTheme = (event) => {
        if(event.target.tagName === 'LI'){
            const getTheme = event.target.getAttribute('data-theme');

            const { top: parentY } = event.target.closest('ul').getBoundingClientRect();

            const { top } = event.target.getBoundingClientRect();

            event.target.closest('ul').style.setProperty('--circleY', `${top - parentY}px`);

            setTheme(getTheme);
        }
    }

    useEffect(() => {
        const LoadedComponent = ComponentLoader(componentName);

        setLoadedComponent(LoadedComponent);
        setThemesObj(variants);
        console.log(themesObj);
    }, [componentName, variants]);

    return (
        <>
        {
            LoadedComponent && themesObj ?
            <div className="flex flex-col gap-4">
                <ComponentToggler/>
                <div className="overflow-hidden component-preview-lg">
            <div className="component flex items-center justify-center min-h-96">
                <button className="refresh-component" title="Reload Component" onClick={()=>setReload(!reload)}></button>
                <div className="absolute top-[50%] translate-y-[-50%] right-5 rounded-full z-[1]" ref={variantsRef} onClick={changeTheme}>
                    <ul className="flex flex-col gap-3 themes">
                        {
                            themesObj && themesObj.map(({theme, priClr, secClr}, index) => <li style={{background: `linear-gradient(to bottom right, ${priClr} 50%, ${secClr} 50%)`}} data-theme={theme} title={theme} key={`${componentName}-theme-${index}`}></li>)
                        }
                    </ul>
                </div>
                <button className="go-to-code" title="Go to Code" onClick={()=>navigateToCode()}></button>
                <Suspense>
                    <LoadedComponent theme={ theme } key={ reload }/>
                </Suspense>
            </div>
                </div>
            </div> 
            : <div>Loading...</div>
        }
        </>
    );
}


export default ComponentLargePreview;
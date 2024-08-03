import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';

const ComponentLoader = (componentName) => lazy(() => import(`../snippets/${componentName}/${componentName}`));

const ComponentPreview = (props) => {
    const { name, isScale, componentName, variants } = props;
    
    const [LoadedComponent, setLoadedComponent] = useState(null);

    const variantsRef = useRef(null);
    const previewRef = useRef(null);
    const componentRef = useRef(null);
    const [scale, setScale] = useState(1);

    const [theme, setTheme] = useState('dark');

    const [themesObj, setThemesObj] = useState();

    const changeTheme = (event) => {
        if(event.target.tagName === 'LI'){
            const getTheme = event.target.getAttribute('data-theme');

            const { top: parentY } = event.target.closest('ul').getBoundingClientRect();

            const { top } = event.target.getBoundingClientRect();

            event.target.closest('ul').style.setProperty('--circleY', `${top - parentY}px`);

            setTheme(getTheme);
        }
    }

    const handleResize = () => {
        if (previewRef.current && componentRef.current) {
            const previewWidth = previewRef.current.offsetWidth;
            const previewHeight = previewRef.current.offsetHeight;
            const componentWidth = componentRef.current.scrollWidth;
            const componentHeight = componentRef.current.scrollHeight;

            const widthScale = (previewWidth / 1.25) / componentWidth;
            // const heightScale = (previewHeight / 1.25) / componentHeight;

            componentRef.current.style.opacity = '1';
            // console.log('testing');
            setScale(widthScale);
        }
    };

    useEffect(() => {
        const LoadedComponent = ComponentLoader(componentName);
        setLoadedComponent(LoadedComponent);
        setThemesObj(variants);
    }, [componentName, variants]);

    useEffect(() => {
        if (LoadedComponent && isScale) handleResize();

        isScale && window.addEventListener('resize', handleResize);

        return () => {
            isScale && window.removeEventListener('resize', handleResize);
        };
    }, [LoadedComponent, isScale]);

    return (
        <>
            { LoadedComponent ? <div className="component-preview relative">
                <button className="preview-component" title="Preview the Component" aria-label="Preview the Component"></button>
                <div className="absolute top-[50%] translate-y-[-50%] right-5 rounded-full z-[1]" ref={variantsRef} onClick={changeTheme}>
                    <ul className="flex flex-col gap-3 themes">
                        {
                            themesObj && themesObj.map(({theme, priClr, secClr}, index) => <li style={{background: `linear-gradient(to bottom right, ${priClr} 50%, ${secClr} 50%)`}} data-theme={theme} title={theme} key={`${componentName}-theme-${index}`}></li>)
                        }
                    </ul>
                </div>
                <button className="get-code z-[2]" title="Get Code" aria-label="Get Code"></button>
                <div className="preview-div w-full h-full overflow-hidden" ref={previewRef}>
                    <div className='transition-all' ref={componentRef} style={{ transform: `scale(${scale})`, opacity: isScale ? 0 : 1 }}>
                        <Suspense>
                            <LoadedComponent theme={theme}/>
                        </Suspense>
                    </div>
                </div>
                <div className='w-full h-14 absolute bottom-0 left-0 details px-4 py-2 flex flex-col gap-2'>
                    <a>
                        <p className='text-lg text-white truncate max-w-[85%]' title={name}>{name}</p>
                    </a>
                    {/* <ul className='flex gap-2'>
                        <li><a className='bg-blue-100 px-3 py-1 rounded-2xl text-xs font-bold tracking-wider' href="">slider</a></li>
                        <li><a className='bg-blue-100 px-3 py-1 rounded-2xl text-xs font-bold tracking-wider' href="">3D</a></li>
                        <li><a className='bg-blue-100 px-3 py-1 rounded-2xl text-xs font-bold tracking-wider' href="">perspective</a></li>
                    </ul> */}
                </div>
            </div> : <div className="component-preview relative"></div>}
        </>
    )
}

export default ComponentPreview;
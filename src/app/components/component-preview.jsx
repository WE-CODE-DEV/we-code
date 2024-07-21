import { useState, useRef } from 'react';

const ComponentPreview = () => {
    const variantsRef = useRef(null);

    const [theme, setTheme] = useState('dark');

    const changeTheme = (event) => {
        if(event.target.tagName == 'LI'){
            const getTheme = event.target.getAttribute('data-theme');

            const { top: parentY } = event.target.closest('ul').getBoundingClientRect();

            const { top } = event.target.getBoundingClientRect();

            console.log(event.target.closest('ul'));

            event.target.closest('ul').style.setProperty('--circleY', `${top - parentY}px`);

            setTheme(getTheme);
        }
    }

    return (
        <div className="component-preview relative">
            <button className="go-to-component" title="Go to Component" aria-label="Go to Component"></button>
            <div className="absolute top-[50%] translate-y-[-50%] right-5 rounded-full" ref={variantsRef} onClick={(event)=>changeTheme(event)}>
                <ul className="flex flex-col gap-3 themes">
                    <li className="from-[#1e2022] from-50% to-[#333539] to-50%" data-theme="dark" title="Dark"></li>
                    <li className="from-[#fff] from-50% to-[#cecece] to-50%" data-theme="light" title="Light"></li>
                    <li className="from-[#ccdff9] from-50% to-[#60a5fa] to-50%"  data-theme="custom" title="Custom"></li>
                </ul>
            </div>
            <button className="get-code" title="Get Code" aria-label="Get Code"></button>
            <div className='w-full h-20 absolute bottom-0 details'>

            </div>
        </div>
    )
}

export default ComponentPreview;
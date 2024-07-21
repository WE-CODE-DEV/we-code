import Slider from "./snippets/Slider";
import HighlightCode from "./snippets/HighlightCode";

import { useState, useRef, useEffect } from "react";

import './code-preview.css';

const ComponentPreview = ({ navigateToCode }) => {
  const [reload, setReload] = useState(false);

  return(
    <div className="overflow-hidden component-preview">
      <div className="component light min-h-96">
          <Slider key={reload}/>
          <button className="refresh-component" title="Reload Component" onClick={()=>setReload(!reload)}></button>
          <button className="get-code" title="Get Code" onClick={()=>navigateToCode()}></button>
      </div>
    </div>
  );
}

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  </head>
  <body>
    <div class="slider-container">
      <div class="slider">
        <div class="slide"><span>5</span></div>
        <div class="slide"><span>6</span></div>
        <div class="slide"><span>7</span></div>
        <div class="slide"><span>1</span></div>
        <div class="slide"><span>2</span></div>
        <div class="slide"><span>3</span></div>
        <div class="slide"><span>4</span></div>
      </div>
      <div class="slider-buttons">
        <button id="prev-slide" aria-label="Previous Slide" title="Go To Previous Slide">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #e4e4e7; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: #a1a1aa; stop-opacity: 1" />
              </linearGradient>
            </defs>
            <path
                  d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                  fill="url(#grad1)" />
          </svg>
        </button>
        <button id="nxt-slide" aria-label="Next Slide" title="Go To Next Slide">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #a1a1aa; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: #e4e4e7; stop-opacity: 1" />
              </linearGradient>
            </defs>
            <path
                  d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z" fill="url(#grad2)" />
          </svg>
        </button>
      </div>
    </div>
  </body>
</html>`;

const cssCode = `
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: clamp(22rem, 90%, 64rem);
  height: 20rem;
}

.slider {
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 500px;
  counter-reset: count;
}

.slide{
  width: clamp(8rem, 10rem, 25rem);
  height: clamp(10rem, 12rem, 27rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(113 113 122 / 0.5);
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #18181b var(--tw-gradient-to-position);
  transition: .5s;
  transition-timing-function: cubic-bezier(.9,0,.1,1);
  z-index: 1;
}

.slide img{
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: inherit;
}

.slide span{
  position: absolute;
  border-radius: inherit;
  display: flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #d4d4d8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(212 212 216 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #52525b var(--tw-gradient-to-position);
  -webkit-background-clip: text;
          background-clip: text;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  color: transparent;
  z-index: -1;
}

.slide:nth-of-type(1){
  transform: translate3d(-200%, -50%, 0) rotateY(45deg) scale(.85);
}

.slide:nth-of-type(2){
  transform: translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(.9);
}

.slide:nth-of-type(3){
  transform: translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(.95);
}

.slide:nth-of-type(4){
  transform: translate3d(-50%, -50%, 9rem);
}

.slide:nth-of-type(5){
  transform: translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(.95);
}

.slide:nth-of-type(6){
  transform: translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(.9);
}

.slide:nth-of-type(7){
  transform: translate3d(100%, -50%, 0) rotateY(-45deg) scale(.85);
}

.slider-buttons {
  display: flex;
  gap: 1.5rem;
}

.slider-buttons button {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #18181b var(--tw-gradient-to-position);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.slider-buttons button svg{
  width: 70%;
  height: 70%;
  opacity: .8;
  transition: .3s;
}

.slider-buttons button:hover svg{
  opacity: 1;
}

@media (max-width: 700px){
  .slide{
    width: clamp(4rem, 6rem, 25rem);
    height: clamp(6rem, 8rem, 27rem);
  }
}
`;

const jsCode = `
const slides = document.querySelectorAll('.slide');
let debounceTimeOut;

const navigate = (bool) => {
  clearTimeout(debounceTimeOut);
  debounceTimeOut = setTimeout(() => {
    const currentTransforms = Array.from(slides).map(slide => window.getComputedStyle(slide).transform);

    if (bool) {
      currentTransforms.unshift(currentTransforms.pop());
    } else {
      currentTransforms.push(currentTransforms.shift());
    }

    slides.forEach((slide, index) => {
      slide.style.transform = currentTransforms[index];
    })
  }, 500);
}

document.getElementById('prev-slide').addEventListener('click', () => navigate(false));
document.getElementById('nxt-slide').addEventListener('click', () => navigate(true));
`;

const CodeWindowPreview = () => {
  const [curCodeVarIndex, setCurCodeVarIndex] = useState(0);
  const [curTabIndex, setCurTabIndex] = useState(0);

  const codeMap = {
    0: [[htmlCode, 'html', 'index.html', 'html'], [cssCode, 'css', 'styles.css', 'css'], [jsCode, 'javascript', 'index.js', 'js']],
    1: [[jsCode, 'javascript', 'app.js', 'react'], [cssCode, 'css', 'styles.css', 'css']]
  };
  
  const [text, setText] = useState(codeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || '');

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
    setCurTabIndex(0);
  }, [curCodeVarIndex]);

  useEffect(() => {
    setText(codeMap[curCodeVarIndex]?.[curTabIndex]?.[0] || '');
  }, [curCodeVarIndex, curTabIndex]);

  return(
    <>
      <div className="mb-4 code-tabs flex gap-4 items-center w-fit rounded-full mx-auto">
        <ul className="flex gap-4 flex-wrap">
          {['HTML + CSS + JS Code', 'React Code'].map((txt, index) => {
            return <li className={`cursor-pointer select-none ${curCodeVarIndex === index ? 'active': ''}`} key={`code-variants-${index}`} onClick={()=>setCurCodeVarIndex(index)}>{txt}</li>
          })}
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
                {codeMap[curCodeVarIndex].map((arr, index) => {
                  const [code, language, fileName, styleClass] = arr;
                  return <li className={`tab ${styleClass} ${curTabIndex === index ? 'active' : ''}`} key={`code-tab-${index}`} onClick={() => setCurTabIndex(index)}><span>{fileName}</span></li>;
                })}
              </ul>
            </div>
          </div>
          <div className="screen-body max-h-80 rounded-xl overflow-auto relative">
            {              
              <HighlightCode code={text} language={codeMap[curCodeVarIndex]?.[curTabIndex]?.[1] || ''}/>
            }
            <div className="floating fixed bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-300 shadow-2xl rounded-full cursor-pointer flex items-center justify-center active:scale-95 transition-all" title="Copy to clipboard" data-iscopied="false" onClick={(event)=>copyToClipboard(event)}>
              <div className="copy-to-cb w-7 h-7">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#1C274C" strokeWidth="1.5">
                    <path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4"/>
                    <path className="clipboard-path" d="M7 14.5h8M7 18h5.5"/>
                    <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CodePreview = () => {
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

  useEffect(() => moveToTab(currentTab), currentTab);

    return(
        <section className="clipboard wrapper flex flex-col gap-6 py-6 lg:py-8">
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
              {(currentTab == 0) ? <ComponentPreview navigateToCode={navigateToCode}/> : <CodeWindowPreview/>}
            </div>              
        </section>
    );
}

export default CodePreview;
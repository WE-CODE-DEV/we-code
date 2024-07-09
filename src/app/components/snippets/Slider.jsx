import { useState, useRef, useEffect, useCallback } from "react";

import styled from "styled-components";

import './Themes.css';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: clamp(22rem, 90%, 64rem);
  height: 20rem;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: clamp(18rem, 90%, 64rem);
    height: 15rem;
    gap: 1rem;
  }

  &.dark{
    --bg: linear-gradient(to bottom right, #1e2022, #22262f);
    --txtBg: linear-gradient(
      to bottom right,
      #d4d4d8, #52525b
    );
    --borderClr: rgba(127, 127, 127, .5);
  }

  &.light{
    --bg: linear-gradient(to bottom right, #fff, #cecece);
    --txtBg: linear-gradient(to bottom right,#93c5fd, #1e3a8a);
    --borderClr: rgb(60 146 232 / 0.5);
  }

  &.custom{
    --bg: linear-gradient(to bottom right, #ccfbf1, #60a5fa);
    --txtBg: linear-gradient(to bottom right,#6996f8, #1e3a8a);
    --borderClr: rgba(230, 230, 230, 0.5);
  }
`;

const SliderEle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 500px;
`;

const Slide = styled.div`
  width: clamp(8rem, 10rem, 25rem);
  height: clamp(10rem, 12rem, 27rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 1px;
  transition: 0.5s;
  border-color: var(--borderClr);
  background: var(--bg);
  transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);

  @media (max-width: 950px) {
    width: clamp(4rem, 6rem, 25rem);
    height: clamp(6rem, 8rem, 27rem);
  }

  @media (max-width: 500px) {
    width: clamp(3rem, 5rem, 23rem);
    height: clamp(5rem, 7rem, 25rem);
  }

  span {
    position: absolute;
    border-radius: inherit;
    display: flex;
    height: 3rem;
    width: 3rem;
    align-items: center;
    justify-content: center;
    /* background-image: linear-gradient(
      to bottom right,
      #d4d4d8, #52525b
    ); */
    background-image: var(--txtBg);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    color: transparent;
  }
`;

const SliderButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    z-index: 1;

    button{
      display: flex;
      height: 2rem;
      width: 2rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-image: var(--bg);
      position: relative;
      /* background-image: linear-gradient(to bottom right,#f8fafc, #e2e8f0); */
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    button::before{
      content: '';
      width: 80%;
      height: 80%;
      background: var(--txtBg);
      position: absolute;
      border-radius: inherit;
      transition: .3s;
      opacity: .5;
    }

    button:hover::before{
      opacity: 1;
    }

    button:nth-of-type(1)::before{
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    }

    button:nth-of-type(2)::before{
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    }
`;

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

const Slider = () => {
    const variantsRef = useRef(null);

    const [theme, setTheme] = useState('dark');

    const changeTheme = (event) => {
      if(event.target.tagName == 'LI'){
        const getTheme = event.target.getAttribute('data-theme');

        const {top: parentY} = event.target.closest('ul').getBoundingClientRect();

        const {top} = event.target.getBoundingClientRect();

        event.target.closest('ul').style.setProperty('--circleY', `${top - parentY}px`);

        setTheme(getTheme);
      }
    }

    const generatedTransformsArr = ['translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)', 'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 'translate3d(-50%, -50%, 9rem)', 'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)'];

    const [transformsArr, setTransformsArr] = useState(generatedTransformsArr);

    const navigate = useCallback(
        (isNext) => {
          setTransformsArr(prevTransforms => {
            const newTransforms = [...prevTransforms];
            if (isNext) {
                // Move the last item to the start
                newTransforms.unshift(newTransforms.pop());
            } else {
                // Move the first item to the end
                newTransforms.push(newTransforms.shift());
            }
            return newTransforms;
          });
        },
        []
      );

    const debouncedNavigateNext = useCallback(debounce(() => navigate(true), 300), [navigate]);
    const debouncedNavigatePrev = useCallback(debounce(() => navigate(false), 300), [navigate]);

    const displayNumbers = [5, 6, 7, 1, 2, 3, 4];

    return (
      <>
        <SliderContainer className={theme}>
        <SliderEle>
            {
                transformsArr.map(
                    (currentTransform, index) => 
                        <Slide key={`slide-${index+1}`} style={{transform: currentTransform}}>
                            <span>{displayNumbers[index]}</span>
                        </Slide>)
            }
        </SliderEle>
        <SliderButtons>
            <button
            id="prev-slide"
            aria-label="Previous Slide"
            title="Go To Previous Slide"
            onClick={debouncedNavigatePrev}
            ></button>
            <button id="nxt-slide" aria-label="Next Slide" title="Go To Next Slide" onClick={debouncedNavigateNext}></button>
        </SliderButtons>
        </SliderContainer>
        <div className="absolute top-[50%] translate-y-[-50%] right-4 rounded-full" ref={variantsRef} onClick={(event)=>changeTheme(event)}>
          <ul className="flex flex-col gap-3 themes">
            <li className="w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-br from-[#1e2022] from-50% to-[#333539] to-50% rounded-full shadow-2xl cursor-pointer transition-all" data-theme="dark" title="Dark"></li>
            <li className="w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-br from-[#fff] from-50% to-[#cecece] to-50% rounded-full shadow-2xl cursor-pointer transition-all" data-theme="light" title="Light"></li>
            <li className="w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-br from-[#ccdff9] from-50% to-[#60a5fa] to-50% rounded-full shadow-2xl cursor-pointer transition-all"  data-theme="custom" title="Custom"></li>
          </ul>
        </div>
      </>
    );
};

export default Slider;

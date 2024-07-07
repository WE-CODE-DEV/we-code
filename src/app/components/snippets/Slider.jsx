import { useState, useRef, useEffect, useCallback } from "react";

import styled from "styled-components";

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
  border-color: rgb(113 113 122 / 0.5);
  background-image: linear-gradient(to bottom right, #1e2022, #22262f);
  /* background-image: linear-gradient(to bottom right,#f8fafc, #e2e8f0); */
  transition: 0.5s;
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
    background-image: linear-gradient(
      to bottom right,
      #d4d4d8, #52525b
    );
    /* background-image: linear-gradient(to bottom right,#93c5fd, #1e3a8a); */
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
        border-radius: 9999px;
        background-image: linear-gradient(to bottom right, #1e2022, #22262f);
        /* background-image: linear-gradient(to bottom right,#f8fafc, #e2e8f0); */
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        svg{
            width: 70%;
            height: 70%;
            opacity: .5;
            transition: .3s;
        }

        &:hover svg{
            opacity: 1;
        }
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
        <SliderContainer>
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
            >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop
                    offset="0%"
                    style={{ stopColor: "#e4e4e7", stopOpacity: 1 }}
                    />
                    <stop
                    offset="100%"
                    style={{ stopColor: "#a1a1aa", stopOpacity: 1 }}
                    />
                </linearGradient>
                </defs>
                <path
                d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z"
                fill="url(#grad1)"
                />
            </svg>
            </button>
            <button id="nxt-slide" aria-label="Next Slide" title="Go To Next Slide" onClick={debouncedNavigateNext}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop
                    offset="0%"
                    style={{ stopColor: "#a1a1aa", stopOpacity: 1 }}
                    />
                    <stop
                    offset="100%"
                    style={{ stopColor: "#e4e4e7", stopOpacity: 1 }}
                    />
                </linearGradient>
                </defs>
                <path
                d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
                fill="url(#grad2)"
                />
            </svg>
            </button>
        </SliderButtons>
        </SliderContainer>
    );
};

export default Slider;

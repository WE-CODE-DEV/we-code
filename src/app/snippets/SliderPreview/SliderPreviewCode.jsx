const darkThemeCSS = `/* Dark Theme */
    --bg: linear-gradient(to bottom right, #1e2022, #323439);
    --txtBg: linear-gradient(to bottom right,#d4d4d8, #52525b);
    --borderClr: rgb(65, 65, 65);
`;

const lightThemeCSS = `/* Light Theme */
    --bg: linear-gradient(to bottom right, #fff, #cccccc);
    --txtBg: linear-gradient(to bottom right,#93c5fd, #1e3a8a);
    --borderClr: rgb(255, 255, 255);
`;

const customThemeCSS = `/* Custom Theme */
    --bg: linear-gradient(to bottom right, #ccfbf1, #60a5fa);
    --txtBg: linear-gradient(to bottom right,#6996f8, #1e3a8a);
    --borderClr: rgba(230, 230, 230, 0.5);
`;

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Slider</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="container">
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
                <button id="prev-slide" aria-label="Previous Slide" title="Go To Previous Slide"></button>
                <button id="nxt-slide" aria-label="Next Slide" title="Go To Next Slide"></button>
            </div>
        </div>
    </div>
    <script src="./index.js"></script>
</body>
</html>

`;

const cssCode = `
.slider-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    width: clamp(22rem, 90%, 64rem);
    height: 20rem;
    margin: 0 auto;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    \${themeCode}\
}

.slider{
    position: relative;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    perspective: 500px;
}

.slide{
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
    border: 1px solid var(--borderClr);
    transition: 0.5s;
    background: var(--bg);
    transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
}

.slide span{
    position: absolute;
    border-radius: inherit;
    display: flex;
    height: 3rem;
    width: 3rem;
    align-items: center;
    justify-content: center;
    background-image: var(--txtBg);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    color: transparent;
}

.slider-buttons{
    display: flex;
    gap: 1.5rem;
    z-index: 1;
}

.slider-buttons button{
    display: flex;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: var(--bg);
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.slider-buttons button::before{
    content: '';
    width: 80%;
    height: 80%;
    background: var(--txtBg);
    position: absolute;
    border-radius: inherit;
    transition: .3s;
    opacity: .5;
}

.slider-buttons button:hover::before{
    opacity: 1;
}

.slider-buttons button:nth-of-type(1)::before{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
}

.slider-buttons button:nth-of-type(2)::before{
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
}

@media (max-width: 700px){
    .slider-container{
        gap: 0;
    }

    .slide{
        width: clamp(4rem, 6rem, 25rem);
        height: clamp(6rem, 8rem, 27rem);
    }
    
    .slide span{
        font-size: 1.6rem;
    }
}

`;

const jsCode = `
const slideTransforms = ['translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)', 'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 'translate3d(-50%, -50%, 9rem)', 'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)'];

const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
    const slideTransform = slideTransforms[index];

    slide.style.transform = slideTransform;
});

let debounceTimeOut;

const navigateTo = (bool) => {
    clearTimeout(debounceTimeOut);

    debounceTimeOut = setTimeout(() => {
        if (bool) {
            slideTransforms.unshift(slideTransforms.pop());
        } else {
            slideTransforms.push(slideTransforms.shift());
        }

        slides.forEach((slide, index) => {
            slide.style.transform = slideTransforms[index];
        });
    }, 500);
}

document.getElementById('prev-slide').addEventListener('click', () => navigateTo(false));
document.getElementById('nxt-slide').addEventListener('click', () => navigateTo(true));

`;

const reactCode = `
import "./styles.css";
import { useState, useCallback } from "react";

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const Slider = () => {
    const generatedTransformsArr = [
        "translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)",
        "translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)",
        "translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)",
        "translate3d(-50%, -50%, 9rem)",
        "translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)",
        "translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)",
        "translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)",
    ];

    const [transformsArr, setTransformsArr] = useState(generatedTransformsArr);

    const navigate = useCallback((isNext) => {
        setTransformsArr((prevTransforms) => {
            const newTransforms = [...prevTransforms];
            if (isNext) {
                newTransforms.unshift(newTransforms.pop());
            } else {
                newTransforms.push(newTransforms.shift());
            }
            return newTransforms;
        });
    }, []);

    const debouncedNavigateNext = useCallback(
        debounce(() => navigate(true), 300),
        [navigate]
    );
    const debouncedNavigatePrev = useCallback(
        debounce(() => navigate(false), 300),
        [navigate]
    );

    const displayNumbers = [5, 6, 7, 1, 2, 3, 4];

    return (
        <div className="slider-container">
            <div className="slider">
                {transformsArr.map((currentTransform, index) => (
                    <div
                        className="slide"
                        key={\`slide-\${index + 1}\`}
                        style={{ transform: currentTransform }}
                    >
                        <span>{displayNumbers[index]}</span>
                    </div>
                ))}
            </div>
            <div className="slider-buttons">
                <button
                    id="prev-slide"
                    aria-label="Previous Slide"
                    title="Go To Previous Slide"
                    onClick={debouncedNavigatePrev}
                ></button>
                <button
                    id="nxt-slide"
                    aria-label="Next Slide"
                    title="Go To Next Slide"
                    onClick={debouncedNavigateNext}
                ></button>
            </div>
        </div>
    );
};

export default Slider;

`;

const codeMap = {
    0: [[htmlCode, 'html', 'index.html', 'html'], [cssCode, 'css', 'styles.css', 'css'], [jsCode, 'javascript', 'index.js', 'js']],
    1: [[reactCode, 'javascript', 'app.js', 'react'], [cssCode, 'css', 'styles.css', 'css']]
};

const themes = {
  dark: darkThemeCSS,
  light: lightThemeCSS,
  custom: customThemeCSS
}

export { htmlCode, cssCode, jsCode, reactCode, themes, codeMap};
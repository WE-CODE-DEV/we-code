const darkThemeCSS = `/* Dark Theme */
  --priBg: #1e2022;
  --secBg: #323232;
  --txtClr: #e0e0e0;
  --shade: 1;
`;

const lightThemeCSS = `/* Light Theme */
  --priBg: #fff;
  --secBg: #e0e0e0;
  --txtClr: #383b41;
  --shade: .3;
`;

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flipper Clock</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="container">
        <div class="flipper-clock-container" data-theme="dark">
            <div class="flipper-clock">
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
                <div class="seperator"></div>
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
                <div class="seperator"></div>
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
                <ul class="flipper">
                    <li>
                        <div data-text="0"></div>
                        <div data-text="0"></div>
                    </li>
                    <li>
                        <div data-text="1"></div>
                        <div data-text="1"></div>
                    </li>
                    <li>
                        <div data-text="2"></div>
                        <div data-text="2"></div>
                    </li>
                    <li>
                        <div data-text="3"></div>
                        <div data-text="3"></div>
                    </li>
                    <li>
                        <div data-text="4"></div>
                        <div data-text="4"></div>
                    </li>
                    <li>
                        <div data-text="5"></div>
                        <div data-text="5"></div>
                    </li>
                    <li>
                        <div data-text="6"></div>
                        <div data-text="6"></div>
                    </li>
                    <li>
                        <div data-text="7"></div>
                        <div data-text="7"></div>
                    </li>
                    <li>
                        <div data-text="8"></div>
                        <div data-text="8"></div>
                    </li>
                    <li>
                        <div data-text="9"></div>
                        <div data-text="9"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <script src="./index.js"></script>
</body>
</html>

`;

const cssCode = `
.flipper-clock-container *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}
  
.flipper-clock-container{
  \${themeCode}\
}

.flipper-clock-container ul{
  list-style: none;
}

.flipper-clock{
  --brdrRad: 8px;
  display: flex;
  gap: 0.5rem;
  perspective: 500px;
}

@media (min-width: 1024px) {
  .flipper-clock {
    gap: 1rem;
  }
}

.flipper {
  position: relative;
  width: 2rem;
  height: 2.5rem;
  transform: rotateX(8deg);
  border-radius: var(--brdrRad);
  box-shadow: 0px 10px 30px rgb(0,0,0,.25), 0px 5px 0px var(--secBg);

  &::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 50%;
    z-index: 5;
    height: 2px;
    width: 100%;
    transform: translateY(-50%);
    background: var(--priBg);
  }
}

@media (min-width: 768px) {
  .flipper {
    width: 2.75rem;
    height: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .flipper {
    width: 4rem;
    height: 5rem;
  }
}

.flipper li {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  perspective: 200px;

  &:has(+ li.active){
    z-index: 3;
  }

  &.active{
    z-index: 2;
    animation: modify-z .5s .5s linear both;
  }
}

.flipper li div {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 50%;
  overflow: hidden;
  background: var(--priBg);

  &::before{
    content: attr(data-text);
    width: 100%;
    height: 200%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0px;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.25rem;
    color: var(--txtClr);
    text-shadow: 0 2px 4px rgba(0,0,0,.8);
    transform: translateY(3px);
  }

  @media (min-width: 768px) {
    &::before {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    &::before {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
  }
  
  &:nth-child(1){
    top: 0px;
    transform-origin: 50% 100%;
    border-top-left-radius: var(--brdrRad);
    border-top-right-radius: var(--brdrRad);

    &::after {
      top: 0px;
    }
    &::before {
      top: 0px;
    }
  }
  
  &:nth-child(2){
    bottom: 0px;
    transform-origin: 50% 0%;
    border-bottom-left-radius: var(--brdrRad);
    border-bottom-right-radius: var(--brdrRad);

    &::after {
      bottom: 0px;
    }

    &::before {
      bottom: 0px;
    }
  }
}

.flipper li{
  &.active div:nth-child(2){
    z-index: 2;
    animation: turn1 .5s .5s linear both;
  }

  &:has(+ li.active) div:nth-child(1) {
    z-index: 2;
    animation: turn2 .5s linear both;
  }

  &:has(+ li.active) div:nth-child(1)::after{
    background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, calc(var(--shade)/2)) 100%);
    animation: show-shadow .5s linear both;
  }

  &.active div:nth-child(1)::after{
    background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, calc(var(--shade)/2)) 100%);
    animation: hide-shadow .5s .3s linear both;
  }

  &:has(+ li.active) div:nth-child(2)::after{
    background: linear-gradient(to bottom, rgba(0, 0, 0, var(--shade)) 0%, rgba(0, 0, 0, .1) 100%);
    animation: show-shadow .5s linear both;
  }

  &.active div:nth-child(2)::after{
    background: linear-gradient(to bottom, rgba(0, 0, 0, var(--shade)) 0%, rgba(0, 0, 0, .1) 100%);
    animation: hide-shadow .5s .3s linear both;
  }
}

.seperator{
  width: 0.5rem;
  height: 0.5rem;
  align-self: center;
  border-radius: calc(var(--brdrRad)/4);
  background: var(--priBg);
  transform: rotateX(15deg) translateY(-5px);
  box-shadow: 0px 10px 30px rgb(0,0,0,.25), 0px 0px 0px var(--secBg);

  &::before{
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    transform: rotateX(15deg) translateY(10px);
    background: inherit;
    box-shadow: inherit;
    border-radius: inherit;
  }
}

@media (min-width: 768px) {
  .seperator {
    width: .75rem;
    height: .6rem;
    border-radius: calc(var(--brdrRad)/2);
    transform: rotateX(15deg) translateY(-10px);
    box-shadow: 0px 10px 30px rgb(0,0,0,.25), 0px 2.5px 0px var(--secBg);

    &::before{
      transform: rotateX(15deg) translateY(15px);
    }
  }
}

@media (min-width: 1024px) {
  .seperator {
    width: 1rem;
    height: 0.75rem;
    transform: rotateX(15deg) translateY(-15px);
    box-shadow: 0px 10px 30px rgb(0,0,0,.25), 0px 5px 0px var(--secBg);

    &::before{
      transform: rotateX(15deg) translateY(25px);
    }
  }
}

@keyframes modify-z {
  0%{
    z-index: 2;
  }

  5%, 100%{
    z-index: 4;
  }
}

@keyframes turn1 {
  0% {
    transform: rotateX(90deg);
  }

  100% {
    transform: rotateX(0deg);
  }
}

@keyframes turn2 {
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes show-shadow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hide-shadow {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

`;

const jsCode = `
const changeTime = () => {
  const time = new Date();

  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');
  const second = time.getSeconds().toString().padStart(2, '0');

  const combinedTime = \`\${hour}\${minute}\${second}\`;

  document.querySelectorAll('.flipper').forEach((flippers, index) => {
      const flipper = flippers.querySelectorAll('li');

      flipper.forEach(li => li.classList.remove('active'));

      const currentTimeIndex = +combinedTime[index];

      flipper[currentTimeIndex].classList.add('active');
  })
}

changeTime();

setInterval(changeTime, 1000);

`;

const reactCode = `
import "./styles.css";

import { useState, useEffect } from 'react';

const FlipperClock = () => {
    const [time, setTime] = useState({
        hour: '00',
        minute: '00',
        second: '00',
    });

    const renderFlipper = (digit) => {
        return (
            <ul className="flipper">
                {
                    Array.from({ length: 10 }).map(( _, i) =>
                        {
                            return (
                                <li key={i} className={i === digit ? 'active' : ''}>
                                    <div data-text={i}></div>
                                    <div data-text={i}></div>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        )
    }

    useEffect(() => {
        const updateClock = () => {
            const currentTime = new Date();
            const hour = currentTime.getHours().toString().padStart(2, '0');
            const minute = currentTime.getMinutes().toString().padStart(2, '0');
            const second = currentTime.getSeconds().toString().padStart(2, '0');

            setTime({ hour, minute, second,});
        };

        updateClock();

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flipper-clock-container" data-theme="dark">
            <div className="flipper-clock">
                { renderFlipper(parseInt(time.hour[0])) }
                { renderFlipper(parseInt(time.hour[1])) }
                <div className="seperator"></div>
                { renderFlipper(parseInt(time.minute[0])) }
                { renderFlipper(parseInt(time.minute[1])) }
                <div className="seperator"></div>
                { renderFlipper(parseInt(time.second[0])) }
                { renderFlipper(parseInt(time.second[1])) }
            </div>
        </div>
    )
}

export default FlipperClock;

`;

const codeMap = {
  0: [[htmlCode, 'html', 'index.html', 'html'], [cssCode, 'css', 'styles.css', 'css'], [jsCode, 'javascript', 'index.js', 'js']],
  1: [[reactCode, 'javascript', 'app.js', 'react'], [cssCode, 'css', 'styles.css', 'css']]
};

const themes = {
dark: darkThemeCSS,
light: lightThemeCSS,
}

export { htmlCode, cssCode, jsCode, reactCode, themes, codeMap};
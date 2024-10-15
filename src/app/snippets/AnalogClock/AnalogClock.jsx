// import './TogglingSidebar.css';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const AnalogClockComponent = styled.div`
    &[data-theme="dark"]{
        --priBg: rgb(30,32,34);
        --secBg: rgb(34,38,47);
        --needleBg: linear-gradient(to bottom right, #d4d4d8, #52525b);
        --secNeedleBg: linear-gradient(to right, #ef4444, #ef4444);
        --markingPriBg: rgb(82,82,91);
        --markingSecBg: rgb(161,161,170);
        --shadowIntensity: rgb(0 0 0 / 35%);
    }

    &[data-theme="light"]{
        --priBg: #f8fafc;
        --secBg: #e2e8f0;
        --needleBg: linear-gradient(to bottom right, #94a3b8, #334155);
        --secNeedleBg: linear-gradient(to right, #c2410c, #c2410c);
        --markingPriBg: #334155;
        --markingSecBg: #475569;
        --shadowIntensity: rgb(0 0 0 / 15%);
    }

    --wh: 13rem;
    width: var(--wh);
    height: var(--wh);
    position: relative;
    border-radius: 50%;
    background: var(--priBg);
    border: 10px solid var(--priBg);
    box-shadow: inset 0px 0px 10px var(--shadowIntensity);

    &::before{
        --wh: 35%;
        content: '';
        width: var(--wh);
        height: var(--wh);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: conic-gradient(from var(--start), var(--priBg) 2deg, var(--priBg) var(--end), var(--secBg) 2deg, var(--secBg));
    }

    &::after{
        --wh: 1rem;
        content: '';
        width: var(--wh);
        height: var(--wh);
        background: var(--needleBg);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid var(--secBg);
        box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    }

    @media (min-width: 1024px) {
        &::after {
            --wh: 1.5rem;
            border-width: 4px;
        }
    }

    .number {
        width: 100%;
        height: 100%;
        position: absolute;
        text-align: center;
        pointer-events: none;

        &::before{
            content: '';
            width: 2px;
            height: 0.5rem;
            position: absolute;
            top: .8em;
            background: var(--markingPriBg);
            border-radius: 5rem;
            box-shadow: 0px 0px 2px #cbd5e179;
        }

        @media (min-width: 1024px) {
            &::before {
                height: 0.625rem;
            }
        }

        &:nth-child(3n+3)::before {
            width: 2px;
            height: 1rem;
            background: var(--markingSecBg);
        }

        @media (min-width: 1024px) {
            &:nth-child(3n+3)::before {
                width: 3px;
            }
        }

        &:nth-child(1){
            transform: rotate(30deg);
        }

        &:nth-child(2){
            transform: rotate(60deg);
        }

        &:nth-child(3){
            transform: rotate(90deg);
        }

        &:nth-child(4){
            transform: rotate(120deg);
        }

        &:nth-child(5){
            transform: rotate(150deg);
        }

        &:nth-child(6){
            transform: rotate(180deg);
        }

        &:nth-child(7){
            transform: rotate(210deg);
        }

        &:nth-child(8){
            transform: rotate(240deg);
        }

        &:nth-child(9){
            transform: rotate(270deg);
        }

        &:nth-child(10){
            transform: rotate(300deg);
        }

        &:nth-child(11){
            transform: rotate(330deg);
        }
    }

    .hand {
        background: var(--needleBg);
        position: absolute;
        transform-origin: bottom center;
        bottom: 50%;
        left: 50%;
        border: 1px solid var(--secBg);
        border-radius: 2em 2em 0 0;
        transition: .6s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

        &.hour-needle {
            width: 7px;
            height: 25%;
            transform: translateX(-50%) rotateZ(var(--hourDeg, 0deg));
        }

        @media (min-width: 1024px) {
            &.hour-needle {
                width: 9px;
            }
        }

        &.minute-needle {
            width: 5px;
            height: 30%;
            transform: translateX(-50%) rotateZ(var(--minuteDeg, 0deg));
        }

        @media (min-width: 1024px) {
            &.minute-needle {
                width: 7px;
                height: 35%;
            }
        }

        &.second-needle {
            width: 4px;
            height: 35%;
            bottom: 43%;
            background: var(--secNeedleBg);
            transform-origin: center 80%;
            transform: translateX(-50%) rotateZ(var(--secDeg, 0deg));
        }

        @media (min-width: 1024px) {
            &.second-needle {
                height: 45%;
                bottom: 41%;
            }
        }
    }

    @media (min-width: 1024px) {
        --wh: 20rem;
        border-width: 15px;
    }
`;

const AnalogClock = (props) => {
    const theme = props.theme || 'dark';
    const componentRef = useRef(null);

    const [minuteDeg, setMinuteDeg] = useState(0);
    const [hourDeg, setHourDeg] = useState(0);
    const [secDeg, setSecDeg] = useState(0);
    const [startDeg, setStartDeg] = useState(0);
    const [endDeg, setEndDeg] = useState(0);

    const changeTime = () => {
        const time = new Date();
    
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();

        const secondsAngle = time.getSeconds() * 6;
        const minsAngle = time.getMinutes() * 6 + secondsAngle / 60;
        const hourAngle = ((time.getHours() % 12) / 12) * 360  + minsAngle / 12;

        let startPosition = minsAngle;
        let endPosition = hourAngle - minsAngle;

        if (minsAngle > hourAngle) {
            startPosition = minsAngle - 360;
            endPosition = hourAngle - startPosition;
        }

        setStartDeg(startPosition);
        setEndDeg(endPosition);
    
        setHourDeg((hour % 12) * 30 + minute * 0.5);
        setMinuteDeg(minute * 6);
        setSecDeg(second * 6);
      };
    
    useEffect(() => {
        changeTime();

        const intervalId = setInterval(changeTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if(componentRef.current) componentRef.current.style.opacity = 1;
      }, [componentRef.current]);

    return(
        <AnalogClockComponent data-theme={ theme } ref={componentRef} onClick={(e)=>e.stopPropagation()} style={{ opacity:0 ,'--minuteDeg': `${minuteDeg}deg`, '--hourDeg': `${hourDeg}deg`, '--secDeg': `${secDeg}deg`, '--start': `${startDeg}deg`, '--end': `${endDeg}deg`}}>
            <div className="clock">
                {Array(12)
                    .fill("_")
                    .map((_, index) => (
                    <div className="number" key={index}></div>
                    ))}
                <div className="hand minute-needle"></div>
                <div className="hand hour-needle"></div>
                <div className="hand second-needle"></div>
            </div>
        </AnalogClockComponent>
    );
}

export default AnalogClock;
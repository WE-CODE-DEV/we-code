import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const FlipperClockComponent = styled.div`
  &[data-theme="dark"] {
    --priBg: #1e2022;
    --secBg: #323232;
    --txtClr: #e0e0e0;
    --shade: 1;
  }

  &[data-theme="light"] {
    --priBg: #fff;
    --secBg: #e0e0e0;
    --txtClr: #383b41;
    --shade: 0.3;
  }

  .flipper-clock-container ul {
    list-style: none;
  }

  .flipper-clock {
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
    box-shadow: 0px 10px 30px rgb(0, 0, 0, 0.25), 0px 5px 0px var(--secBg);

    &::before {
      content: "";
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

    &:has(+ li.active) {
      z-index: 3;
    }

    &.active {
      z-index: 2;
      animation: modify-z 0.5s 0.5s linear both;
    }
  }

  .flipper li div {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 50%;
    overflow: hidden;
    background: var(--priBg);

    &::before {
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
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
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

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
    }

    &:nth-child(1) {
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

    &:nth-child(2) {
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

  .flipper li {
    &.active div:nth-child(2) {
      z-index: 2;
      animation: turn1 0.5s 0.5s linear both;
    }

    &:has(+ li.active) div:nth-child(1) {
      z-index: 2;
      animation: turn2 0.5s linear both;
    }

    &:has(+ li.active) div:nth-child(1)::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, calc(var(--shade) / 2)) 100%
      );
      animation: show-shadow 0.5s linear both;
    }

    &.active div:nth-child(1)::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, calc(var(--shade) / 2)) 100%
      );
      animation: hide-shadow 0.5s 0.3s linear both;
    }

    &:has(+ li.active) div:nth-child(2)::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, var(--shade)) 0%,
        rgba(0, 0, 0, 0.1) 100%
      );
      animation: show-shadow 0.5s linear both;
    }

    &.active div:nth-child(2)::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, var(--shade)) 0%,
        rgba(0, 0, 0, 0.1) 100%
      );
      animation: hide-shadow 0.5s 0.3s linear both;
    }
  }

  .seperator {
    width: 0.5rem;
    height: 0.5rem;
    align-self: center;
    border-radius: calc(var(--brdrRad) / 4);
    background: var(--priBg);
    transform: rotateX(15deg) translateY(-5px);
    box-shadow: 0px 10px 30px rgb(0, 0, 0, 0.25), 0px 0px 0px var(--secBg);

    &::before {
      content: "";
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
      width: 0.75rem;
      height: 0.6rem;
      border-radius: calc(var(--brdrRad) / 2);
      transform: rotateX(15deg) translateY(-10px);
      box-shadow: 0px 10px 30px rgb(0, 0, 0, 0.25), 0px 2.5px 0px var(--secBg);

      &::before {
        transform: rotateX(15deg) translateY(15px);
      }
    }
  }

  @media (min-width: 1024px) {
    .seperator {
      width: 1rem;
      height: 0.75rem;
      transform: rotateX(15deg) translateY(-15px);
      box-shadow: 0px 10px 30px rgb(0, 0, 0, 0.25), 0px 5px 0px var(--secBg);

      &::before {
        transform: rotateX(15deg) translateY(25px);
      }
    }
  }

  @keyframes modify-z {
    0% {
      z-index: 2;
    }

    5%,
    100% {
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

const FlipperClock = (props) => {
  const theme = props.theme || "dark";
  const componentRef = useRef(null);

  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
  });

  const renderFlipper = (digit) => {
    return (
      <ul className="flipper">
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <li key={i} className={i === digit ? "active" : ""}>
              <div data-text={i}></div>
              <div data-text={i}></div>
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      const hour = currentTime.getHours().toString().padStart(2, "0");
      const minute = currentTime.getMinutes().toString().padStart(2, "0");
      const second = currentTime.getSeconds().toString().padStart(2, "0");

      setTime({ hour, minute, second });
    };

    updateClock();

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (componentRef.current) componentRef.current.style.opacity = 1;
  }, [componentRef.current]);

  return (
    <FlipperClockComponent
      data-theme={theme}
      className="flipper-clock-container"
      style={{ opacity: 0 }}
      ref={componentRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flipper-clock">
        {renderFlipper(parseInt(time.hour[0]))}
        {renderFlipper(parseInt(time.hour[1]))}
        <div className="seperator"></div>
        {renderFlipper(parseInt(time.minute[0]))}
        {renderFlipper(parseInt(time.minute[1]))}
        <div className="seperator"></div>
        {renderFlipper(parseInt(time.second[0]))}
        {renderFlipper(parseInt(time.second[1]))}
      </div>
    </FlipperClockComponent>
  );
};

export default FlipperClock;

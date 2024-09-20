import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const DigitalClockComponent = styled.div`
  &[data-theme="dark"] {
    --priBg: 30 32 34;
    --secBg: 49 49 49;
    --bg: linear-gradient(to bottom, rgb(var(--priBg)), rgb(var(--secBg)));
    --txtClr: rgba(186, 229, 253, 0.8);
  }

  &[data-theme="light"] {
    --priBg: 255 255 255;
    --secBg: 226 232 240;
    --bg: linear-gradient(to bottom, rgb(var(--priBg)), rgb(var(--secBg)));
    --txtClr: #1e40af;
  }

  .clock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .clock {
    display: flex;
    gap: 1rem;
    transform: skewX(-10deg);
  }

  @media (min-width: 1024px) {
    .clock {
      gap: 1.5rem;
    }
  }

  .digit {
    & > * {
      transition: 0.3s;
    }

    width: 1.5rem;
    height: 3rem;
    position: relative;

    span {
      background: rgb(var(--priBg) / 15%);
      box-shadow: inset 0px 0px 6px rgb(var(--priBg) / 15%);
    }

    span:nth-of-type(1) {
      left: -0.25rem;
    }

    span:nth-of-type(2),
    span:nth-of-type(5) {
      width: 100%;
      height: 0.375rem;
      display: inline-block;
      position: absolute;
    }

    @media (min-width: 1024px) {
      span:nth-of-type(2),
      span:nth-of-type(5) {
        height: 0.625rem;
      }
    }

    span:nth-of-type(1),
    span:nth-of-type(3),
    span:nth-of-type(4),
    span:nth-of-type(6) {
      width: 0.375rem;
      height: 50%;
      display: inline-block;
      position: absolute;
      clip-path: polygon(50% 0, 100% 20%, 100% 90%, 50% 98%, 0 86%, 0 20%);
    }

    @media (min-width: 1024px) {
      span:nth-of-type(1),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(6) {
        width: 0.75rem;
      }
    }

    span:nth-of-type(2) {
      top: -0.125rem;
      clip-path: polygon(5% 0, 95% 0, 80% 100%, 20% 100%);
    }

    span:nth-of-type(3) {
      right: -0.25rem;
    }

    span:nth-of-type(4) {
      right: -0.25rem;
      bottom: 0px;
      clip-path: polygon(50% 3%, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 16%);
    }

    span:nth-of-type(5) {
      bottom: -0px;
      clip-path: polygon(8% 0, 92% 0, 80% 100%, 22% 100%);
      transform: rotate(180deg);
    }

    span:nth-of-type(6) {
      bottom: 0px;
      left: -0.25rem;
      clip-path: polygon(50% 3%, 100% 15%, 100% 80%, 50% 100%, 0 80%, 0 20%);
    }

    span:nth-of-type(7) {
      width: 0.375rem;
      height: 45%;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      clip-path: polygon(50% 0, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%);
    }

    @media (min-width: 1024px) {
      span:nth-of-type(7) {
        width: 0.75rem;
      }
    }

    &[data-digit="0"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(6) {
        background: var(--bg);
      }
    }
    &[data-digit="1"] {
      span:nth-of-type(3),
      span:nth-of-type(4) {
        background: var(--bg);
      }
    }

    &[data-digit="2"] {
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(7),
      span:nth-of-type(5),
      span:nth-of-type(6) {
        background: var(--bg);
      }
    }

    &[data-digit="3"] {
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-digit="4"] {
      span:nth-of-type(1),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-digit="5"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-digit="6"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(6),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-digit="7"] {
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4) {
        background: var(--bg);
      }
    }

    &[data-digit="8"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(6),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-digit="9"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }
  }

  @media (min-width: 1024px) {
    .digit {
      width: 3rem;
      height: 6rem;
    }
  }

  .format {
    display: flex;
    margin-left: 1rem;
    gap: 1rem;
  }

  .small-digit {
    height: 1.5rem;
    position: relative;

    .digit > * {
      transition: 0.3s;
    }

    span {
      background: rgb(var(--priBg) / 15%);
      box-shadow: inset 0px 0px 6px rgb(var(--priBg) / 15%);
    }

    span:nth-of-type(1),
    span:nth-of-type(3),
    span:nth-of-type(4),
    &[data-letter="m"] span:nth-of-type(7),
    &[data-letter="m"] span:nth-of-type(8),
    span:nth-of-type(6) {
      display: inline-block;
      width: 0.25rem;
      height: 50%;
      position: absolute;
      clip-path: polygon(50% 0, 100% 20%, 100% 90%, 50% 98%, 0 86%, 0 20%);
    }

    @media (min-width: 1024px) {
      span:nth-of-type(1),
      span:nth-of-type(3),
      span:nth-of-type(4),
      &[data-letter="m"] span:nth-of-type(7),
      &[data-letter="m"] span:nth-of-type(8),
      span:nth-of-type(6) {
        width: 0.5rem;
      }
    }

    span:nth-of-type(1) {
      left: -0.25rem;
    }

    span:nth-of-type(2),
    &[data-letter="a"] span:nth-of-type(5),
    &[data-letter="p"] span:nth-of-type(5) {
      display: inline-block;
      width: 100%;
      height: 0.25rem;
      position: absolute;
    }

    @media (min-width: 1024px) {
      span:nth-of-type(2),
      &[data-letter="a"] span:nth-of-type(5),
      &[data-letter="p"] span:nth-of-type(5) {
        height: 0.5rem;
      }
    }

    &[data-letter="m"] span:nth-of-type(2) {
      width: 50%;
      left: 0px;
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] span:nth-of-type(2) {
        left: 0.125rem;
      }
    }

    span:nth-of-type(2) {
      top: -0.125rem;
      clip-path: polygon(5% 0, 95% 0, 80% 100%, 20% 100%);
    }

    span:nth-of-type(3) {
      right: -0.25rem;
    }
    &[data-letter="m"] span:nth-of-type(3) {
      left: 50%;
    }
    &[data-letter="a"] span:nth-of-type(4),
    &[data-letter="p"] span:nth-of-type(4),
    &[data-letter="m"] span:nth-of-type(6) {
      bottom: 0px;
      right: -0.25rem;
      clip-path: polygon(50% 3%, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 16%);
    }

    &[data-letter="m"] span:nth-of-type(4) {
      display: inline-block;
      width: 0.25rem;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] span:nth-of-type(4) {
        width: 0.5rem;
      }
    }

    &[data-letter="m"] span:nth-of-type(5) {
      display: inline-block;
      width: 50%;
      height: 0.25rem;
      position: absolute;
      top: -0.125rem;
      right: -0.25rem;
      clip-path: polygon(5% 0, 95% 0, 80% 100%, 20% 100%);
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] span:nth-of-type(5) {
        height: 0.5rem;
        right: -0.375rem;
      }
    }

    &[data-letter="m"] span:nth-of-type(7) {
      right: -0.5rem;
      bottom: 0px;
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] span:nth-of-type(7) {
        right: -0.75rem;
      }
    }

    &[data-letter="a"] span:nth-of-type(5),
    &[data-letter="p"] span:nth-of-type(5) {
      bottom: -0px;
      clip-path: polygon(8% 0, 92% 0, 80% 100%, 22% 100%);
      transform: rotate(180deg);
    }

    &[data-letter="a"] span:nth-of-type(6),
    &[data-letter="p"] span:nth-of-type(6),
    &[data-letter="m"] span:nth-of-type(8) {
      left: -0.25rem;
      bottom: 0px;
    }

    &[data-letter="m"] span:nth-of-type(6) {
      top: 0px;
      right: -0.5rem;
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] span:nth-of-type(6) {
        right: -0.75rem;
      }
    }

    span:nth-of-type(6),
    &[data-letter="m"] span:nth-of-type(8) {
      clip-path: polygon(50% 3%, 100% 15%, 100% 80%, 50% 100%, 0 80%, 0 20%);
    }

    &[data-letter="a"] span:nth-of-type(7),
    &[data-letter="p"] span:nth-of-type(7) {
      display: inline-block;
      width: 0.25rem;
      height: 45%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      clip-path: polygon(50% 0, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%);
    }

    @media (min-width: 1024px) {
      &[data-letter="a"] span:nth-of-type(7),
      &[data-letter="p"] span:nth-of-type(7) {
        width: 0.5rem;
      }
    }

    &[data-letter="a"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(6),
      span:nth-of-type(7) {
        background: var(--bg);
      }
    }

    &[data-letter="m"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(4),
      span:nth-of-type(5),
      span:nth-of-type(6),
      span:nth-of-type(7),
      span:nth-of-type(8) {
        background: var(--bg);
      }
    }

    &[data-letter="p"] {
      span:nth-of-type(1),
      span:nth-of-type(2),
      span:nth-of-type(3),
      span:nth-of-type(7),
      span:nth-of-type(6) {
        background: var(--bg);
      }
    }

    &[data-letter="a"],
    &[data-letter="p"] {
      width: 0.75rem;
    }

    @media (min-width: 1024px) {
      &[data-letter="a"],
      &[data-letter="p"] {
        width: 1.5rem;
      }
    }

    &[data-letter="m"] {
      width: 1.25rem;
    }

    @media (min-width: 1024px) {
      &[data-letter="m"] {
        width: 2.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .small-digit {
      height: 3rem !important;
    }
  }

  .dots {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    span {
      display: inline-block;
      width: 0.625rem;
      height: 0.625rem;
      background: var(--bg);
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.15);
      border-radius: 100%;
    }

    @media (min-width: 1024px) {
      span {
        width: 0.875rem;
        height: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .dots {
      gap: 1rem;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    label {
      display: inline-block;
      width: 2.75rem;
      height: 1.25rem;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      padding: 0.125rem;
      border-radius: 1rem;
    }

    label {
      background: var(--bg);
      /* box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25); */
      box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1),
      1px 1px 5px 1px rgba(0, 0, 0, 0.15);

      &:active::before {
        width: 1.25rem;
      }

      &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        position: absolute;
        border-radius: 100%;
        top: 50%;
        left: 0.2rem;
        transform: translateY(-50%);
        transition: 0.3s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);
        background-image: linear-gradient(to bottom right, #3b82f6, #1d4ed8);
        z-index: 1;
      }

      &::after {
        content: "24";
        position: absolute;
        top: 50%;
        left: calc(100% - 1.2rem);
        color: var(--txtClr);
        transform: translateY(-45%);
        font-size: 0.6rem;
        font-weight: 600;
      }
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      pointer-events: none;
    }

    &:has(input[type="checkbox"]:checked) label:active::before {
      left: calc(100% - 16px - 0.45rem);
      transform-origin: left;
    }
    &:has(input[type="checkbox"]:checked) label::after {
      content: "12";
      left: 0.4rem;
    }
    &:has(input[type="checkbox"]:checked) label::before {
      left: calc(100% - 16px - 0.2rem);
    }
  }
`;

const DigitalClock = (props) => {
  const theme = props.theme || "dark";
  const componentRef = useRef(null);

  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
  });
  const [is24Hrs, setIs24Hrs] = useState(true);
  const [ampm, setAmpm] = useState("am");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      let hour = currentTime.getHours();
      const minute = currentTime.getMinutes().toString().padStart(2, "0");
      const second = currentTime.getSeconds().toString().padStart(2, "0");
      const ampmValue = hour >= 12 ? "pm" : "am";

      if (!is24Hrs) {
        hour = hour % 12 || 12;
        setAmpm(ampmValue);
      }

      setTime({
        hour: hour.toString().padStart(2, "0"),
        minute,
        second,
      });
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [is24Hrs]);

  const toggleFormat = () => setIs24Hrs(!is24Hrs);

  useEffect(() => {
    if (componentRef.current) componentRef.current.style.opacity = 1;
  }, [componentRef.current]);

  return (
    <DigitalClockComponent
      data-theme={theme}
      style={{ opacity: 0 }}
      ref={componentRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="clock-container">
        <div className="clock">
          <div className="digit" data-digit={time.hour[0]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="digit" data-digit={time.hour[1]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="dots">
            <span></span>
            <span></span>
          </div>
          <div className="digit" data-digit={time.minute[0]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="digit" data-digit={time.minute[1]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="dots">
            <span></span>
            <span></span>
          </div>
          <div className="digit" data-digit={time.second[0]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="digit" data-digit={time.second[1]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {!is24Hrs && (
            <div className="format">
              <div className="small-digit" data-letter={ampm[0]}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="small-digit" data-letter={ampm[1]}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
        <div className="toggle">
          <label htmlFor="clock-format"></label>
          <input
            type="checkbox"
            id="clock-format"
            checked={is24Hrs}
            onChange={toggleFormat}
          />
        </div>
      </div>
    </DigitalClockComponent>
  );
};

export default DigitalClock;

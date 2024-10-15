import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const DiceLoaderComponent = styled.div`
  &[data-theme="dark"] {
    --diceEdgeClr: rgb(34, 38, 47);
    --faceClr: rgb(30, 32, 34);
    --faceBeatClr: linear-gradient(to bottom right, #e2e8f0, #64748b);
  }

  &[data-theme="light"] {
    --diceEdgeClr: #f3f3f3;
    --faceClr: #fff;
    --faceBeatClr: linear-gradient(
      to bottom right,
      rgb(93, 93, 95),
      rgb(30, 32, 34)
    );
  }

  &[data-theme="custom"] {
    --diceEdgeClr: #c81a1a;
    --faceClr: #b91c1c;
    --faceBeatClr: linear-gradient(to bottom right, #fff, #e0e0e0);
  }

  --wh: 15rem;
  display: flex;
  width: var(--wh);
  height: var(--wh);
  align-items: center;
  justify-content: center;
  perspective: 600px;

  &::after {
    content: "";
    width: 7em;
    height: 7em;
    background: rgb(30 32 34 / 0.25);
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    transform: rotateX(85deg) translateZ(-50px);
    filter: blur(40px);
  }

  .dice {
    --wh: 80px;
    width: var(--wh);
    height: var(--wh);
    position: relative;
    transition: 1s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);
    background: var(--diceEdgeClr);
    transform-style: preserve-3d;
  }

  .dice .face {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    padding: 0.75rem;
    background: var(--faceClr);
    border: 2px solid var(--diceEdgeClr);
    transform-style: preserve-3d;
    display: grid;
    place-items: center;

    span {
      --wh: 0.8rem;
      width: var(--wh);
      height: var(--wh);
      background: var(--faceBeatClr);
      border-radius: 50%;
      box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.3);
    }

    & span:nth-of-type(1) {
      grid-area: a;
    }

    & span:nth-of-type(2) {
      grid-area: b;
    }

    & span:nth-of-type(3) {
      grid-area: c;
    }

    & span:nth-of-type(4) {
      grid-area: d;
    }

    & span:nth-of-type(5) {
      grid-area: e;
    }

    & span:nth-of-type(6) {
      grid-area: f;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--diceEdgeClr);
      border-radius: inherit;
      transform: translateZ(-2px) scale(1.08);
    }
  }

  .front {
    transform: translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      ". . ."
      ". a ."
      ". . .";
  }

  .top {
    transform: rotateX(90deg) translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      "a . ."
      ". . ."
      ". . b";
  }

  .left {
    transform: rotateY(-90deg) translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      "a . ."
      ". b ."
      ". . c";
  }

  .right {
    transform: rotateY(90deg) translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      "a . b"
      ". . ."
      "c . d";
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      "a . b"
      ". c ."
      "d . e";
  }

  .back {
    transform: rotateY(180deg) translateZ(calc(var(--wh) / 2 + 1px));
    grid-template-areas:
      "a . b"
      "c . d"
      "e . f";
  }

  .dice[data-face="1"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateX(20deg) rotateY(20deg);
  }

  .dice[data-face="2"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateX(-70deg) rotateZ(20deg);
  }

  .dice[data-face="3"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateY(70deg) rotateZ(25deg);
  }

  .dice[data-face="4"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateY(-107deg) rotateZ(20deg);
  }

  .dice[data-face="5"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateX(110deg) rotateZ(-20deg);
  }

  .dice[data-face="6"] {
    transform: translateZ(calc(var(--wh) / 2)) rotateY(158deg) rotateX(-20deg);
  }
`;

const DiceLoader = (props) => {
  const theme = props.theme || "dark";
  const componentRef = useRef(null);

  const [currentFace, setCurrentFace] = useState(1);

  const getRandomFace = () => {
    let newFace;

    do {
      newFace = Math.floor(Math.random() * 6) + 1;
    } while (newFace === currentFace);

    return newFace;
  };

  useEffect(() => {
    const rollDiceInterval = setInterval(() => {
      const randomFace = getRandomFace();

      setCurrentFace(randomFace);
    }, 500);

    return () => clearInterval(rollDiceInterval);
  }, [currentFace]);

  useEffect(() => {
    if (componentRef.current) componentRef.current.style.opacity = 1;
  }, [componentRef.current]);

  return (
    <DiceLoaderComponent
      className="dice-container"
      data-theme={theme}
      style={{ opacity: 0 }}
      ref={componentRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="dice" data-face={currentFace}>
        {["front", "top", "left", "right", "bottom", "back"].map(
          (direction, index) => (
            <div key={direction} className={`face ${direction}`}>
              {Array.from({ length: index + 1 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          )
        )}
      </div>
    </DiceLoaderComponent>
  );
};

export default DiceLoader;

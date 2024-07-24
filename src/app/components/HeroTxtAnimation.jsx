import { useState, useEffect } from "react";

const HeroTxtAnimation = () => {
    const texts = ['Component', 'Variant', 'Code'];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className='flex gap-2 relative'>
            <p className='font-extrabold text-2xl leading-snug lg:text-3xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text'>Choose the</p>
            <div key={currentTextIndex} className='anim-container'>
                {
                    texts[currentTextIndex].split('').map((character, index) => {
                        return <span key={index} style={{'--delay': `.${index}s`}}>{character}</span>
                    })
                }
            </div>
        </div>
    )
}

export default HeroTxtAnimation;
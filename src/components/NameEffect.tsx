import React, {useState, useEffect, useRef} from 'react';
import '../styles/NameEffect.css'


interface NameProps {
    fonts: string[];
}

const NameEffect: React.FC<NameProps> = ({fonts}: NameProps) => {
    const rollIntro = () => {
        // useRef to reference the DOM and get access to the letter elements
        /*
            letters.forEach(letter => {
                let randFontIdx = Math.floor(Math.random() * fonts.length);
                let randFont = fonts[randFontIdx];

                letter.style.fontFamily = randFont;
            })
        */
    };

    return(
        <div className="Bips-container">
            <h2 className="Bips">
                <p className="letter">B</p>
                <p className="letter">I</p>
                <p className="letter">P</p>
                <p className="letter">S</p>
            </h2>
        </div>
    );
}

export default NameEffect;
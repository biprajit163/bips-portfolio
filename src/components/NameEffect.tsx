import React from 'react';
import '../styles/NameEffect.css'


interface NameProps {
    fonts: [
        'Kirang Haerang',
        'Indie Flower',
        'Rye',
        'Amatic SC',
        'Bangers',
        'Fredericka the Great',
    ];
}

const NameEffect: React.FC<NameProps> = ({}: NameProps) => {
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
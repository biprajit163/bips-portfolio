import React, {useState, useEffect} from 'react';
import './App.css';
import NameEffect from './components/NameEffect';


interface AppProps {};

const App: React.FC<AppProps> = ({}: AppProps) => {
    const fonts = [
        'Kirang Haerang',
        'Indie Flower',
        'Rye',
        'Amatic SC',
        'Bangers',
        'Fredericka the Great',
    ];

    return(
        <div className="App">
            <header className="App-header">
                <NameEffect fonts={fonts}/>
            </header>
        </div>
    );
}

export default App;
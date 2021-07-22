import React, {useState, useEffect} from 'react';
import './App.css';
import NameEffect from './components/NameEffect';


interface AppProps {};

const App: React.FC<AppProps> = ({}: AppProps) => {
    return(
        <div className="App">
            <header className="App-header">
                <NameEffect/>
            </header>
        </div>
    );
}

export default App;
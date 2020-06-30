import React from 'react';
import SoundImageGrid from './components/container/SoundImageGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
    const data = [];

    return (
        <div className="App">
            <SoundImageGrid/>
        </div>
    );
}

export default App;

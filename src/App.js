import React from "react";
import './App.css';

import {Routes, Route} from 'react-router-dom';


const Home = () => {
    return <h1>Home</h1>
}

const About = () => {
    return <h1>About</h1>
}

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;

import React from "react";
import './App.css';

import {Routes, Route, Link} from 'react-router-dom';


const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to='about'>About</Link>
        </>
    )
}

const About = () => {
    return (
        <>
            <h1>About</h1>
            <Link to='/'>Home</Link>
        </>
    )
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

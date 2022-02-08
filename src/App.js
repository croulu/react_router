import React from "react";
import './App.css';

import {Routes, Route, Link, useParams} from 'react-router-dom';


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

const Course = () => {
    const {course} = useParams()
    return (
        <>
            <h1>Course : {course}</h1>
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
                <Route path='courses/:course' element={<Course/>}/>
            </Routes>
        </div>
    );
}

export default App;

import React from "react";
import './App.css';

import {Routes, Route, Link, useParams, Outlet} from 'react-router-dom';


const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to='about'>About</Link> - <Link to='courses'>Courses</Link>
        </>
    )
}

const Courses = () => {
    return (
        <>
            <h1>Courses</h1>
            <Outlet />
            <Link to='/'>Home</Link> - <Link to='js'>Javascript</Link> - <Link to='react'>React</Link> - <Link to='review'>Review</Link>
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

const Review = () => {
    return (
        <>
            <h1>Review</h1>
            <h2>La liste des cours</h2>
        </>
    )
}

const Course = () => {
    const {course} = useParams()
    return (
        <>
            <h1>Course : {course}</h1>
        </>
    )
}

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='courses' element={<Courses/>}>
                    <Route path=':course' element={<Course/>}/>
                    <Route path='review' element={<Review/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

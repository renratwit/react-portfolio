import React, { Component } from 'react'
import Typical from 'react-typical';
import react_icon from '../images/react_icon.jpg'
import python_logo from '../images/python_logo.png'
import './icons.css';


function About() {
    return(<div className='jumbo'>
        <h1>Hello, World!</h1>
        <p>I'm Raymond Ren</p>
        <div className='type'>
            <Typical
            steps = {['Aspiring Developer ', 2000, 'Student', 2000]}
            loop = {Infinity}
            wrapper = 'b'
            />
        </div>

        <div className='icons'>
            <img className='react_icon icon' src={react_icon} alt='React Icon'></img>
            <img className='python_icon icon' src={python_logo} alt='Python Icon'></img>
        </div>
        
            
        
    </div>)
}

export default About;
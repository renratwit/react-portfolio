import React, { Component } from 'react'
import Typical from 'react-typical';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faHtml5, faReact, faPython, faCSS3, faCss3, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './icons.css';


function About() {
    return(<div className='jumbo'>
        <div className='jumbo-inner'>
        <h1>Hello, World!</h1>
        <p>I'm Raymond Ren</p>
        <div className='type'>
            <Typical
            steps = {['Aspiring Developer ', 2000, 'Student', 2000, 'Tetris Enthusiast', 2000]}
            loop = {Infinity}
            wrapper = 'b'
            />
        </div>

        <div className='icons'>
            <FontAwesomeIcon className='icon' icon={faJsSquare}/>
            <FontAwesomeIcon className='icon' icon={faHtml5}/>
            <FontAwesomeIcon className='icon' icon={faCss3}/>
            <FontAwesomeIcon className='icon' icon={faReact}/>
            <FontAwesomeIcon className='icon' icon={faNodeJs}/>
            <FontAwesomeIcon className='icon' icon={faPython}/>

        </div>
        
            
        </div>
    </div>)
}

export default About;
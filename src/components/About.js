import React, { Component } from 'react'
import Typical from 'react-typical';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
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
            <FontAwesomeIcon icon={faJsSquare}/>
        </div>
        
            
        
    </div>)
}

export default About;
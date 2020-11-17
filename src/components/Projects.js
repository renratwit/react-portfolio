import React from 'react'
import Project from './Project.js'


export default function Projects() {
    return (
        <div id='projects'>
            <h1>Sample Projects</h1>
            <Project name='Amiibo' link="https://stoic-shaw-bc825e.netlify.app/"/>
            <Project name="A* Search Visual" link="https://renratwit.github.io/A_Star_Revisited/index.html"/>
            <Project name="Perlin Noise Brush" link="https://renratwit.github.io/PerlinBrush/index.html"/>
        </div>
    )
}

import React from 'react'
import './projects.css'

export default function Project({name, link}) {
    return (
        <a className='project' href={link} target='blank'>
            <h1>{name}</h1>
        </a>
    )
}


import React from 'react'
import './projects.css'

export default function Project({name, link}) {
    return (
        <div className='project'>
            <div className='top-row'>
                <h2>{name}</h2>
            </div>
            <div className='bottom-row'>
                <a href={link} target='blank' className='demo link'><div >Demo</div></a>
                <a href="#" target='blank' className='code link'><div >Code</div></a>
            </div>
        </div>
    )
}


import React, { Component } from 'react'
import WebDev from './WebDev'
import DataScience from './DataScience'
import OR from './OR'

function Info() {
    return (
        <div className='info'>
            <WebDev/>
            <DataScience/>
            <OR />
        </div>
    )
}

export default Info;
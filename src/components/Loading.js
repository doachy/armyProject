import React from 'react'
import './Loading.css';

function Loading() {
    return (
        <div className='container-head'>
            <h1 className='head'>
                Loading...
            </h1>
            <p className='contents'>
                This may take a few minutes.
            </p>
        </div>
    )
}

export default Loading
import React , {useState} from 'react';
import './Thread.css';

const Thread = (props) => {
    return(
    <div>
        <div className='frame'>
            
            <div className='diffframe'>
            <h3 className='title'>{props.title}</h3>
            </div>
            <div className='diffframe'>
            <p>{props.content}</p>
             </div>
        </div>
    </div>
    )
}

export default Thread;
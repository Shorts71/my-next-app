'use client';

import { useState } from 'react';
import React from 'react';

function ConditionFunction() {
    const [IsVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(true);
    };

    const handleInvisible = () => {
        setIsVisible(false);
    };
      const [hover, setHover] = useState(false);
      const [message, setMessage] = useState('When you hover your mouse over this square, Something interesting will show up on the screen!');
    
      const hoverStyle = { 
        color: 'white', 
        width: '200px', 
        height: '200px', 
        backgroundColor: 'darkred' 
      };
    
      const defaultStyle = {
        color: 'black',
        width: '200px',
        height: '200px',
        backgroundColor: 'grey'
      };
    
      const handleMouseOver = () => {
        setHover(true);
        setMessage('Something interesting')
      };
    
      const handleMouseLeave = () => {
        setHover(false);
        setMessage('When you hover your mouse over this square, something interesting will show up on the screen!')
      }
    return (
        <div>
            {IsVisible ? (
                <div>
                    <div>
                        <p>{message}</p>
                    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style = {hover ? hoverStyle : defaultStyle}>
                    </div>
                    </div>
                    <button onClick={handleInvisible}>Hide</button>
                </div>
            ) : (
                <div>
                    <p></p>
                    <button onClick={handleVisible}>Show</button>
                </div>
            )}
        </div>
    );
}

export default function Page3() {
    return (
        <div>
            <ConditionFunction/>
        </div>
    );
}
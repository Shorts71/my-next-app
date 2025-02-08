'use client';

import { useState } from 'react';
import React from 'react';

function HoverCounter() {
  const [hover, setHover] = useState(false);
  const [message, setMessage] = useState('Mouse not detected.');

  const hoverStyle = { 
    color: 'white', 
    width: '100px', 
    height: '100px', 
    backgroundColor: 'blue' 
  };

  const defaultStyle = {
    color: 'black',
    width: '100px',
    height: '100px',
    backgroundColor: 'white'
  };

  const handleMouseOver = () => {
    setHover(true);
    setMessage("Mouse detected.")
  };

  const handleMouseLeave = () => {
    setHover(false);
    setMessage("Mouse not detected.")
  }

  return (
    <div>
        <p>{message}</p>
      <div onMouseOver={handleMouseOver} 
      onMouseLeave={handleMouseLeave} 
      style = {hover ? hoverStyle : defaultStyle}>
      </div>
    </div>
  );
}

export default function Hover() {
  return (
    <div>
      <HoverCounter />
    </div>
  );
}


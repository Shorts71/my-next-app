"use client";

import React, { useState } from 'react';

function Counter() {
  
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);

    function Sum() {
      return 2 + count;
    }

    return (
      <div>
        <p>The counter is currently at a value of: {count}</p>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        
        <p><br/><br/>2 + ({count}) is equal to {Sum()}</p>
      </div>
    )
}

export default function Page2() {
  return <Counter />
}


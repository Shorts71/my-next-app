"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Home from "./components/Home";
import "./style.css";

export default function App() {
  return ( 
    <div id="webpage">
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#page2">Part 2</a></li>
          <li><a href="#page3">Part 3</a></li>
          <li><a href="#page4">Part 4</a></li>
        </ul><br />
      </nav>
      <br/><h1>Assignment 1</h1><br/>
      <section id='Home' className='section'>
        <h2>Part 1/Home</h2><br/>
        <Home/><br/><br/>
      </section>
      <section id='page2' className='section'>
        <h2>Part 2: Event Handling via Button Clicks</h2><br/>
        <p>
          This component revolves around button clicks to update a value in the browser.<br/>
          To demonstrate this, I've added a line that tracks the sum of an equation that changes<br/>
          when you increment or decrement the count value.
        </p><br/>
        <Page2/><br/><br/>
      </section>
      <section id='page3' className='section'>
        <h2>Part 3: Conditional Rendering</h2><br/>
        <p>
          This component focuses on conditional rendering. It renders a different state depending on whether<br/>
          the user has clicked the 'Show' button or not. On top of that, it will render another state on top of that <br/>
          depending on if the user hovers their mouse above the element.
        </p><br/>
        <Page3/><br/><br/>
      </section>
      <section id='page4' className='section'>
        <h2>Part 4: User Interactions via Submission Forms</h2><br/>
        <p>
          This last component focuses on User Interactions like Part 2 did, except in the form of a submission of text using<br/>
          an input field for the user to type in.
        </p><br/>
        <Page4/><br/><br/><br/><br/><br/>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import React from 'react';


function SubmissionHandler() {
    const[message, setMessage] = useState('');
    const [input, setinput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') {
            setMessage('Something must be entered into the field. Try again.');
        } else {
        setIsSubmitted(true);
        setMessage('You entered: ', {input});
        }
    };

    const InputChange = (event) => {
        setinput(event.target.value);
    };

    return (
        <div>
            <p>The message won't fully show until you input something into the field <br />
            and submit it. Otherwise, it will display an error message. <br/>
            Try it for yourself.</p>
            <br/>
            <input type="text" onChange={InputChange} value={input} placeholder="Enter input here" />
            <form onSubmit={handleSubmit}>
                <br/><button type="submit">Submit</button>
            </form>
            {isSubmitted && input && !message &&  (
                <div>fdsafdsa
                    <p>Input has been received.</p>
                </div>
            )}
            
            {message && <p>{message}{input}</p>}
        </div>
    );
}

export default function Page4() {
    return (
        <div>
            <SubmissionHandler/>
        </div>
    );
}

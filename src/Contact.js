import React, { useEffect, useState } from 'react'

const Contact = ({ name }) => {
    const [textVal, setTextVal] = useState("Animesh")

    const buttonClicked = (e) => {
        console.log('button clicked');
        console.log(textVal);
    };

    const textChanged = (e) => {
        console.log('text value', e.target.value);
        setTextVal(e.target.value);
    };

    return (
        <div>
            <h2>Contact Us Component</h2>
            <input type="text" onChange={textChanged} value={textVal} />
            <button onClick={buttonClicked}>Click Me</button>
        </div>
    )
}

export default Contact

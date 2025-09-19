import React, { useState } from 'react'

const App = () => {
    const [pin, setPin] = useState('');
    const [message, setMessage] = useState('');
    const correctPin = '100546240201'; // Change this to your desired pin

    const handlePinChange = (event) => {
        setPin(event.target.value);
    };

    const handleSubmit = () => {
        if (pin === correctPin) {
            setMessage('Correct! 🎉');
        } else {
            setMessage('Incorrect. Try again. 😞');
        }
    };

    return (
        <div className="pin-container">
            <h1>Enter the Pin</h1>
            <input
                type="password"
                value={pin}
                onChange={handlePinChange}
                placeholder="Enter 12-digit pin"
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            {message && <p className={`message ${pin === correctPin ? 'correct' : 'incorrect'}`}>{message}</p>}
        </div>
    );
};

export default App
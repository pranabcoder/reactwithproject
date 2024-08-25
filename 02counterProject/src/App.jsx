import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [counter, setCounter] = useState(15);
    const increaseValue = () => {
        if (counter === 20) {
            alert('Counter value reached 20');
        } else {
            setCounter(counter + 1);
        }
    };

    function decreaseValue() {
        if (counter === 0) {
            alert('Counter value reached 0');
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={increaseValue}>Increase Value</button>
            <br/>
            <button onClick={decreaseValue}>Decrease Value</button>
        </>
    )
}

export default App

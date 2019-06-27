import React,{useState}from 'react';
import './App.css';

const App = () => {

    const [cnt,setCount] = useState({
        counter: 0
    });
    const increment = () => {
        setCount({
            counter: cnt.counter + 1
        })
    };
    const decrement = ()=> {
        setCount({
            counter: cnt.counter - 1
        })
    };
    const addition = (num) => {
        setCount({
            counter: cnt.counter + num
        })
    };
    const subtraction = (num) => {
        setCount({
            counter: cnt.counter - num
        })
    };

    return (
        <div className="App">
            <h1>{cnt.counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => addition(5)}>Addition</button>
            <button onClick={() => subtraction(5)}>Subtraction</button>
        </div>
    )

};


export default App;

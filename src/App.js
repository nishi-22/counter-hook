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
            <button onClick={increment} className="btn-primary mx-2">Increment</button>
            <button onClick={decrement} className="btn-primary mx-2">Decrement</button>
            <button onClick={() => addition(5)} className="btn-primary mx-2">Addition</button>
            <button onClick={() => subtraction(5)} className="btn-primary mx-2">Subtraction</button>
        </div>
    )

};


export default App;

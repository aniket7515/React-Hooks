import React,{useState} from 'react'

function StateTutorial() {
    const [counter,setCounter]=useState(0);


    const increment=()=>{
        setCounter(counter+1)

    }
    const decrement=()=>{
        setCounter(counter-1)
    }

    const [inputValue,setInputValue]=useState("Learning React Hooks")

    let onChange=(event)=>{
        const newValue=event.target.value;
        setInputValue(newValue);

    }
    return (
        <div>
            <h1>Use States</h1>
            {counter}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h2>Second example Use States</h2>
            <input type="text" placeholder="enter something..." onChange={onChange} />
            {inputValue}
        </div>
    )
}

export default StateTutorial

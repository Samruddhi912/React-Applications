//updater function=A function passed as an argument to setState() usually
//                 eg: setyear(y=>y+1)
//                 Allow for safe updates and asynchronous functions
//                 Good practice to use updater functions
import React,{useState} from "react";
function MyComponent(){
    const [count,setCount]=useState(0);

    function increment(){
        //Uses the current state to calculate the NEXT state.
        //set functions do not trigger an update
        //React batches together state updates for performance reasons.
        //NEXT state becomes the CURRENT state after update
        //setCount(0+1);
        //setCount(0+1);

        //UPDATOR
        //Takes the PENDING state to calculate NEXT state.
        //React puts your updator function in a queue(waiting in line)
        //During the next render,it will call them in same order
        setCount(prevcount=>prevcount+1);
        setCount(prevcount=>prevcount+1);
        setCount(prevcount=>prevcount+1);
        
    }

    function decrement(){
        setCount(prevcount=>prevcount-1);
        setCount(prevcount=>prevcount-1);
    }
    function reset(){
        setCount(prevcount=>prevcount=0);
    }
    return(<>
        <div>
            <p>Count:{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
        </>);
}

export default MyComponent
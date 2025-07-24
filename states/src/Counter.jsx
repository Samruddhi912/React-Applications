import React,{useState} from "react";

function Counter(){
    const [cnt,setCnt]=useState(0);

    const increment=()=>{
        setCnt(cnt+1);
    }

    const decrement=()=>{
        setCnt(cnt-1);
    }

    const reset=()=>{
        setCnt(0);
    }


    return(<div className="counter-container">
        <p className="count-display">{cnt}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
        




            </div>);
}
export default Counter
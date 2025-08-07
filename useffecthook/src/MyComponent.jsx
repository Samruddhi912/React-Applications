import React,{useState,useEffect} from "react"

function MyComponent(){

    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green")

    useEffect(()=>{
        document.title=`count: ${count} ${color} `;
        return()=>{
            //SOME CleanUp Code
        }
    },[count,color]);


    function addCount(){
        setCount(c=>c+1);
    }

    function removeCount(){
        setCount(c=>c-1);
    }

    function ChnageColor(){
        setColor(c=>c=="green"?"red":"green");
    }


    return (<div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add Count</button>
        <button onClick={removeCount}>Delete Count</button>

        <button onClick={ChnageColor}>Chnage Colour</button>

    </div>)
}

export default MyComponent
import React,{useState} from "react";
function MyComponent(){

    let [name,setName]=useState("Guest");

    const [age,setAge]=useState(0);

    const [isEmployee,setIsEmployee]=useState();

    const updateName=()=>{
            setName("Sam");
            }

    const updateAge=()=>{
        setAge(age+1);
    }

    const ToggleStatus=()=>{
        setIsEmployee(!isEmployee);
    }

    return(<div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Is Employeed:{isEmployee ? "Yes":"No"}</p>
            <button onClick={ToggleStatus}>Toggle Status</button>
            </div>);
}
export default MyComponent
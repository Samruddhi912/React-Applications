import React,{useState} from "react";

function MyComponent(){
    const[food,SetFood]=useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood=document.getElementById("foodinput").value;
        document.getElementById("foodinput").value=" ";

        SetFood(f=>[...f,newFood]);
    }

    function handleRemoveFood(index){
        SetFood(food.filter((_,i)=>i!==index))


    }

    return(<div>
        <h1>List Items</h1>
        <ul>
            {food.map((food,index)=>
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                {food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder="Enter food name"/> 
        <button onClick={handleAddFood}>Add Food</button>

        </div>
    );

}
export default MyComponent
import React,{useState} from "react";
function Comp3(){

    const[food,setFood]=useState(["Apple","Orange","Banana"]);

    function AddFood(){

    }

    function RemoveFood(){

    }
    return(<div>
            <h2>List of Food</h2>
            <ul>
                {food.map((foodName,index)=><li key={index}>{foodName}</li>)}
            </ul>


            </div>);
}

export default Comp3
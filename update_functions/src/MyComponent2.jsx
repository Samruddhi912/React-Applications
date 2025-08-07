import React,{useState} from "react";
function Comp2(){

    const[car,setCar]=useState({year:2024,make:"Ford",model:"Mustang"})


    function YearChange(event){
        setCar(prevcar=>({...car,year:event.target.value}));
    }

    function MakeChange(event){
        setCar(prevcar=>({...car,make:event.target.value}));
    }

    function ModelChange(event){
        setCar(prevcar=>({...car,model:event.target.value}));
    }
    return (
        <>
        <div>
            <p>Your favoriate car is:{car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={YearChange}></input><br></br>
            <input type="text" value={car.make} onChange={MakeChange}></input><br></br>
            <input type="text" value={car.model} onChange={ModelChange}></input><br></br>
        </div>
        </>
    );
}

export default Comp2
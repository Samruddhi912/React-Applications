import React,{useState} from "react"

function MyComponent(){
    const [name,setName]=useState("Guest");

    const [quan,setQuan]=useState(1);

    const [comment,setComment]=useState("");

    const[payment,setPayment]=useState("");

    const[shipping,setShipping]=useState("Delivery");

    function handleChangeName(evet){
        setName(evet.target.value);
    }

    function handleQuanChnage(event){
        setQuan(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }
     
    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(<div>
            <input value={name} onChange={handleChangeName}></input>
            <p>Name:{name}</p>

            <input value={quan} onChange={handleQuanChnage} type="number"></input>
            <p>Quantity:{quan}</p>

            <input value={comment} onChange={handleCommentChange} placeholder="Enter Delivey Instruction"></input>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>Payment:{payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping=="Pick Up"} onChange={handleShipping}></input>
                Pick Up</label>
            <label><br></br>
                <input type="radio" value="Delivery" checked={shipping=="Delivery"} onChange={handleShipping}></input>
                Delivery</label>

            <p>Shipping:{shipping}</p>
            

            </div>);

}

export default MyComponent
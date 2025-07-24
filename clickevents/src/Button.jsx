function Button(){
   
        let count=0;
        const handleclick=(name)=>{
            if(count<3){
                count++;
                console.log(`${name} you clicked me ${count} time/s`);
            }
            else{
                console.log(`${name} stop clicking me`);
            }
        }
    

    //const handleclick2=(name)=>console.log(`${name} stop clicking me `);

    return (<button onClick={()=>handleclick("Sam")}>ClickMe</button>);
}
export default Button
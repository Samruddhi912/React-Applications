function List(){
    const fruits=[{id:1,name:"apple",calories:95},
        {id:2,name:"orange",calories:45},
        {id:3,name:"coconut",calories:159},
        {id:4,name:"pineapple",calories:37}];
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphabetical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //Reverse alphabetical
    //fruits.sort((a,b)=>a.calories-b.calories)//numeric order
    fruits.sort((a,b)=>b.calories-a.calories)//reverse numeric order

    const lowCalFruits=fruits.filter(fruit=>fruit.calories<100)

    const HighCalFruits=fruits.filter(fruit=>fruit.calories>=100)

    const listitems=fruits.map(fruit=><li key={fruit.name}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>)
    return(<ol>{listitems}</ol>);

}
export default List
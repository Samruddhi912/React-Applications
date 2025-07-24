
import List from "./List";
import List2 from "./List2";
function App() {

  const fruits=[{id:1,name:"apple",calories:95},
                {id:2,name:"orange",calories:45},
                {id:3,name:"coconut",calories:159},
                {id:4,name:"pineapple",calories:37}];

  const vegetables=[{id:1,name:"potatoes",calories:110},
                    {id:2,name:"celery",calories:15},
                    {id:3,name:"carrots",calories:25},
                    {id:4,name:"corn",calories:63}];
  return (
    <>
    <List></List>
    {fruits.length>0 ? <List2 items={fruits} category="Fruits"></List2> :null }
    <List2 items={vegetables} category="Vegetables"></List2>
    </>
  );
}

export default App;

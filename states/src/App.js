//React hook=Special func that allows functional components
//           to use react features without writing class components
//           (useState,useEffect,useContent,useReducer,useCallback,...)

//useState()=A react hook that allows the creation of stateful variable
//           and setter function to update its value in virtual DOM
//           [name,setName]

import MyComponent from "./MyComponent";
import Counter from "./Counter";
function App() {
  return (
    <>
    <MyComponent/>
    <Counter/>
    </>
    
  );
}

export default App;

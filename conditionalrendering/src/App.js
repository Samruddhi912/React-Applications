//Conditional Rendering= allows you to control what gets rendered in your application based on certain conditions
//                       (show,hide, or change components)
import UserGreet from "./UserGreeting";
function App() {
  return (
    <UserGreet isLoggedIn={true} username="Samruddhi"></UserGreet>
    
  );
}

export default App;

import Student from "./student";
function App() {
  return (
    <>
      <Student name="Samrudhhi" age={21} isStudent={false}></Student>
      <Student name="Pankaj" age={28} isStudent={true}></Student>
      <Student name="Larry"></Student>
      <Student></Student>
    </>
  );
}

export default App;

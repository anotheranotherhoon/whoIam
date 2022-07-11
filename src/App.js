import { useSelector } from "react-redux";



function App() {
  const state = useSelector(state => state.expReducer)
  const handleClick = () => {
    console.log(state)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
function App() {

  const handleClick=()=>{
    console.log("clicked")
  }

  return (
    <div className="App">
     <div>
      <h1>helllllllll</h1>
      <button onClick={handleClick}>click</button>
     </div>
    </div>
  );
}

export default App;

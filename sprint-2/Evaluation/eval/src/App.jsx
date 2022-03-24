import "./App.css";
import { Rentals } from "./Components/Rentals";
import { AddHouse } from "./Components/AddHouse";

function App() {
  return (
    <div className="App">
     <Rentals/>
     <AddHouse/>
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
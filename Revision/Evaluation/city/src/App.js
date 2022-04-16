import logo from './logo.svg';
import './App.css';
import {Home} from "./Components/Home"
import {Route,Routes} from "react-router-dom"
import { AddCity } from './Components/AddCity';
import { AddCountry } from './Components/AddCountry';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add-city" exact element={<AddCity/>}></Route>
        <Route path="/add-country" element={<AddCountry/>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;

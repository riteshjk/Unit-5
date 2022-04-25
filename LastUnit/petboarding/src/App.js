import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home} from './Components/Home';
import { CreateEntity } from './Components/CreateEntity';
import {Entity} from './Components/Entity';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing/create" element={<CreateEntity/>}/>
        <Route path="/listing/:id" element={<Entity/>}/>
      </Routes>
    </div>
  );
}

export default App;

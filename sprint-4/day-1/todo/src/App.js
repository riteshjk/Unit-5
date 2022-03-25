import logo from './logo.svg';
import './App.css';
import {Todo} from './components/Todo';
import {Routes , Route} from "react-router-dom"
import {TodoDetails} from "./components/TodoDetails" 

function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path="/" element={<Todo/>}/>
       <Route path="/todo/:id" element={<TodoDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;

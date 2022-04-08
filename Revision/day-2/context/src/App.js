import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Page1} from './components/Page1'
import {Page2} from './components/Page2'
import {Users} from './components/Users'



function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/registration/one" element={<Page1/>}></Route>
       <Route path="/registration/two" element={<Page2/>}></Route>
       <Route path="/registration/three" element={<Users/>}></Route>


     </Routes>
    </div>
  );
}

export default App;

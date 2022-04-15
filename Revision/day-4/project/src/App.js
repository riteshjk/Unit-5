import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link,Navigate} from 'react-router-dom';
import {Home} from './Components/Home';
import {Login} from './Components/Login';
 import { TodosCreate } from './Components/TodosCreate';
 import { TodosEdit } from './Components/TodosEdit';


const PrivateRoutes = ({isAuthenticated,children})=>{
  return isAuthenticated ? children : <Navigate to="/login"/>;
}

function App() {

  const isAuthenticated = true;


  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/todos">TodosCreate</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<PrivateRoutes isAuthenticated={isAuthenticated}><Login/></PrivateRoutes>}/>
        <Route path="/todos" element={<PrivateRoutes isAuthenticated={isAuthenticated}><TodosCreate/></PrivateRoutes>}/>
        <Route path="/todos/:id/edit" element={<PrivateRoutes isAuthenticated={isAuthenticated}><TodosEdit/></PrivateRoutes>}/>



      </Routes>
    </div>
  );
}

export default App;

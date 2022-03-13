import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button"
import {useState} from "react"

function App() {
  const [theme , setTheme] = useState("red")
  const [back , setBack] = useState("border")

  const x="ritesh"
  const y="themp"
  const z="dip"
  return (
    <div className="App">
   <Button onClick={()=>{
     console.log("hi")
   }}>Primary Button</Button>

<Button the ={theme}onClick={()=>{
     console.log("hi")
   }}>Default Button</Button>

<Button the={theme} then ={x}onClick={()=>{
     console.log("hi")
   }}>Dashed Button</Button>
   <div>
   <Button back={back} onClick={()=>{
     console.log("hi")
   }}>Text Button</Button>

   <Button themp={y} t={z} onClick={()=>{
     console.log("hi")
   }}>Link Button</Button>
   </div>
    </div>
    
  );
}

export default App;

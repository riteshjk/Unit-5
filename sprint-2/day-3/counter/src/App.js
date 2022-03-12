import { useState } from 'react'
import './App.css'
import { Stopwatch } from './components/Stopwatch'

function App() {

  const [show, setshow] = useState(true)
  function setshow1(){
    console.log("yes")
    setshow(false)
  }

  return (
    <div className="App">
      {show? <Stopwatch start={1} end={10}/>:null}

      <button onClick={setshow1}>{show?"Hide":"Show"}</button>

    </div>
  )
}

export default App
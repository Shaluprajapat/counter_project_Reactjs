import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter] = useState(0)


 // let counter = 0;
  const addValue = ()=>{
    console.log(" value added",counter);
   // counter =counter +1;
    setcounter(counter +1)
  }
  const removeValue = () => {
    setcounter(counter-1)
  }

  return (
    <>
       <h1> Counter project</h1>
       <h2> counter value : {counter}</h2>

       <button onClick={addValue}> Add Value : {counter}  </button> <br />
       <button onClick={removeValue} disabled={counter === 0}> Remove Value : {counter} </button>
    </>
  )
}

export default App

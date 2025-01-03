import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCouner] = useState(0) ; 
  const addvalue =()=>{
    if(counter < 20){
      counter = counter +1 ;
    setCouner(counter)
    }
  }
  const removeValue =()=>{
   if(counter > 0){
    counter = counter -1 ; 
    setCouner(counter)
   }
  }
  return (
    <>
     <h1>chai aur code !!</h1>
     <h2>ounter value : {counter} </h2>
     <button onClick={addvalue}>increase value</button>
     <br />
     <button onClick={removeValue}>decrease value </button>
    </>
  )
}

export default App

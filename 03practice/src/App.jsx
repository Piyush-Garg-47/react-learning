import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
let myObj ={
  username:"piyush" ,
  age : 21 ,
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test !!</h1>
      <Card username ="piyush"/> 
      <Card username ="jigar" /> 
    </>
  )
}

export default App

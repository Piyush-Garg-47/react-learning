import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos  from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>learn about the redux !!</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
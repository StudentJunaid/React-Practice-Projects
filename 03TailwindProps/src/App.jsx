import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let myobj = {
  username: "jerry",
  age: "22"
}
let newarr = [1,2,3]
  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

    <Card Username="chaiaurcode" someObj={newarr} btnText="visit mou site"/>
    <Card Username="Jerry" btnText='visit here'/>

    </>
  )
}

export default App

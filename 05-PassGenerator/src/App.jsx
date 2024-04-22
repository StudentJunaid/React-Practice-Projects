import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}:"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const coptToClipBoard = () =>{
    passRef.current?.select()
     passRef.current?.setSelectionRange(0,7)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
   passwordGenerator()
  }, [length,numAllowed,charAllowed,passwordGenerator])
  
   
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md bg-gray-700 mx-auto rounded p-8 text-white'>
        <div className='flex  justify-center'>
          <input 
          ref={passRef}
          type="text" className='w-full text-black outline-none p-2' value={password}/>
          <button 
          onClick={coptToClipBoard}
          className='bg-blue-700 p-1 '>copy</button>
        </div>
        <div className='flex gap-x-1 mt-4'>
          <input type="range" 
          value={length}
          min={6}
          max={100}
          className='cursor-pointer '
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length : {length}</label>
          <input type="checkbox" defaultChecked={numAllowed} className='cursor-pointer' 
          onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label>Number</label>
          <input type="checkbox" defaultChecked={charAllowed} className='cursor-pointer'
          onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className=" h-screen w-full  flex justify-center items-center duration-300"
     style={{backgroundColor: color}}
     >
      <div className="red  m-4" onClick={() => setColor("red")}>
      <button className='px-4 py-2 rounded text-white'  style={{backgroundColor:"red"}}>Red</button>
      </div>
      <div className="blue  m-4" onClick={() => setColor("blue")}>
      <button className='px-4 py-2 rounded text-white' style={{backgroundColor:"blue"}}>Blue</button>
      </div>
      <div className="green m-4" onClick={() => setColor("green")}>
      <button className='px-4 py-2 rounded text-white' style={{backgroundColor:"green"}}>Green</button>
      </div>
      <div className="yellow m-4" onClick={() => setColor("yellow")} >
      <button className='px-4 py-2 rounded text-white' style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
     </div>
    </>
  )
}

export default App

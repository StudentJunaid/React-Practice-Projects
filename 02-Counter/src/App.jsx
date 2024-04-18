import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () =>{

    // counter = counter + 1;
    setCounter(counter + 1)
    console.log(counter);
  }

  const removeValue = () =>{
    if(counter < 1){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Jerry And Berry</h1>
        <p>Counter value: {counter}</p>
        <button onClick={addValue}>Add value: {counter}</button>
        <br />
        <button onClick={removeValue}>Remove value: {counter}</button>
        <footer>footer: {counter}</footer>
    </>
  )
}

export default App

import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext, useState } from 'react'


function Login() {
   const [userName, setUserName] = useState("")
   const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

    const submitHandler = (e) =>{
        e.preventDefault()
        setUser({userName,password})
    }

  return (
    <div>
        <h2>Log In</h2>
        <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text" placeholder='userName'/>
        {" "}
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder='password'/>
        <button onClick={submitHandler}>Click</button>
    </div>
  )
}

export default Login
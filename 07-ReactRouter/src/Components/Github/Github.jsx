import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
      
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])
    

  return (
    <div className='m-4 text-3xl bg-gray-700 text-white'>Github Followers: {data.followers}
    <img className='m-auto' src={data.avatar_url} alt="img" width={300} />
    </div>
  )
}

export default Github


export const githubInfoloder = async () =>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return  response.json()
} 
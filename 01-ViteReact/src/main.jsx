import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   prop: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: "click me to visit"
// }

const anotherElement = (
  <a href="https://google.com" target='_blanck'>Visit Google</a>
)

let anotheruser = "Cherry whith Berry"

const reactElement = React.createElement(
     "a",
     {href: "https://google.com", target:"_blank"},
     "click me to visit",
     anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)

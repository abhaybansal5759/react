import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>heyy, How are you react !</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   Children:'click me to visit google'
// }

const anotherElem = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotheruser = "chai aur react"

const reactElem = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google',anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).
render(

    <App/>
    // reactElem
)
 
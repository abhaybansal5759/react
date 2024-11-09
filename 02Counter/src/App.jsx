import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

// let counter = 0

const addValue = () => {
  console.log("clicked", counter);
  counter = counter+1  
  setCounter( counter)
}
const removeValue = () => {
  if(counter>0){
console.log("remove click",counter);
counter = counter-1
setCounter(counter)
}
else {
  console.log("Counter value cannot go below 0");
}
}

return (
    <>
     <h1>yoo broo</h1>
     <h2>counter value :{counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br/>
     <button onClick={removeValue}>
      remove value</button>
    </>
  )
}

export default App

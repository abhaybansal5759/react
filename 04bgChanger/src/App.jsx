import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick= {() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900">Red</button>
        <button 
        onClick= {() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500">Yellow</button>
        <button 
        onClick= {() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700">Blue</button>
        <button 
        onClick= {() => setColor("gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600">Gray</button>
        <button 
        onClick= {() => setColor("aqua")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"aqua"}}>Aqua</button>
      </div>
    </div>
   </div>
  )
}

export default App

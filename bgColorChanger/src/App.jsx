import { useState } from "react"



function App() {
  const [color ,setColor] = useState("salmon")

  return (
 
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}
         >
          <h1 className="text-center font-bold text-white text-4xl py-70">Change Background Color <br/>With Help Of These Button !!!</h1>
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0  px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-500 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
         <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
         <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={()=>setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "grey"}}>Grey</button>
        <button onClick={()=>setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "skyblue"}}>Sky Blue</button>
        <button onClick={()=>setColor("maroon")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "maroon"}}>Maroon</button>
        <button onClick={()=>setColor("gold")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gold"}}>Gold</button>
        <button onClick={()=>setColor("crimson")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "crimson"}}>Crimson</button>
      </div>
      </div>
      </div>
  )
}

export default App

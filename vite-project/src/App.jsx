import { useState } from "react"

function App() {
  let [count,setCount]=useState(0);

  let addCount=()=>{
    // count=count+1
    setCount(count+1)
  }

  let removeCount = () => {
    setCount(count-1)
  }
  
  return (
    <>
        <p>{count}</p>
       <button onClick={addCount}>Click to add</button>
       <button onClick={removeCount}>Click to remove</button>
    </>
  )
}

export default App

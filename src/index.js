import { useState } from "react"
import ReactDOM from "react-dom/client"
import "../src/style.css"
const root=ReactDOM.createRoot(document.getElementById("root"))
function Counter(){
  const [num,setnum]=useState(0)
  const changeadd=(evt)=>{
    setnum(num+1);
  }
  const changemin=(evt)=>{
    if(num>0){
      setnum(num-1);
    }
    else{
      alert("Limit is Zero . Negative values are not allowed")
    }
  }
  const reset=(evt)=>{
    setnum(0)
  }
  return(
    <div className="container">
    <h1>{num}</h1>
    <button onClick={changeadd}>ADD</button>
    <button onClick={changemin}>MINUS</button>
    <button onClick={reset}>RESET</button>
    </div>
  )
}
root.render(<Counter></Counter>)
 import React,{useState} from "react";

 const Counter =()=> {
    const [count , setCount]=useState(0)

 const handleClick=()=>{
 setCount(count=>count+1)
 }


 const handleClick1=()=>{
    setCount(count=>count-1)
    }
   

    const handleClick2=()=>{
        setCount(count=>2*count)
        }
       
       

    return (
        <div className="mycount" >
         <h2 data-testid="Counter-header">Counter</h2>
        <h3 data-testid="count">{count}</h3>
         <button data-testid='add-btn' onClick={handleClick}>+</button>
         <button data-testid='subtract-btn' onClick={handleClick1}>-</button>
         <button data-testid='double-btn' onClick={handleClick2}>Double</button>

        </div>
    )
 }

 export default Counter
import React from 'react'
import {useState} from "react"

export default function SimpleState() {
    const [number, setNumber] = useState(0)
    const [user, setUser] = useState ("Anon")

    const handleIncrease = ()=>{
        setNumber(number + 1)
    }
    
    const handleDecrease = ()=>{
        if (number > 0) {
            setNumber(number - 1)
        }
    }
    const handleReset = ()=>{
        setNumber(0)
    }
    
    const handleSignIn = ()=>{
      if (user === "") {
        setUser ("Bruce Wayne")
      } else{
        setUser ("")
      }
    }

    const handleSignOut = ()=> {
      if (user === "Bruce Wayne")
        setUser ("")

    }    

  return (
    <div className="flex flex-col items-center my-[10%]">
        <h1 className="text-3xl font-extrabold">UseState</h1>
        <button onClick={handleIncrease} className="border-1 my-2 py-2 px-3 rounded-md bg-green-900 w-xs">Increase Number</button>
        <h1>{number}</h1>
         <button onClick={handleDecrease} className="border-1 my-2 py-2 px-3 rounded-md bg-red-900 w-xs">Decrease Number</button>

         <button onClick={handleReset} className="border-1 my-2 py-2 px-3 rounded-md bg-yellow-600 w-xs">Reset</button>
         <h1 className="text-lg">{user}</h1>
         <button onClick={handleSignIn} className="border-1 my-2 py-2 px-3 rounded-md bg-blue-700 w-xs">Sign In</button>

         <button onClick= {handleSignOut} className="border-1 my-2 py-2 px-3 rounded-md bg-violet-700 w-xs">Sign Out</button>

    </div>
  )
}

import React from 'react'
import {useState} from "react"


export default function SimpleForm() {
    const [email, setEmail] = useState ("")
    const [username, setUsername] = useState ("")
    const [fullname, setFullname] = useState ("")
    const [agree, setAgree] = useState ("")
    const [error, setError] = useState ("")

    const handleSubmit = (event) => {
        //prevent default behaviour of your button
        event.preventDefault()
        console.log(email, username,fullname, agree);
        //confirm user fills all fields else return an error message
        if (!email || !username || !fullname || !agree) {
            setError ("please fill all fields")
            return; //stop further execution if validation fails
        }
        //else condition 
        //after user fills all fields, and then submits... you want to reset the fields back to empty fields..... Reset
        setEmail("")
        setUsername("")
        setFullname("")
        setAgree("") 
        setError("")
    }




  return (
    <div>
        <form onSubmit={handleSubmit} className="w-md mx-auto my-[8%] shadow-lg py-3 px-4" action="">
            <h1 className="pb-5">Register with us</h1>
            
            <label htmlFor="email">Email Address</label>
            <input onChange={(event)=> setEmail(event.target.value)} value={email} className="block border-1 rounded-md my-2 w-full px-3 py-1" id="email" type="text" />

            <label htmlFor="username">Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} value ={username}  className="block border-1 rounded-md my-2 w-full px-3 py-1" id="username" type="text" />

            <label htmlFor="fullname">Full Name</label>
            <input onChange={(e)=> setFullname(e.target.value)} value = {fullname} className="block border-1 rounded-md my-2 w-full px-3 py-1" id="fullname" type="text" />

            <input checked= {agree} onChange={(e)=> setAgree(e.target.checked)} id="agree" type="checkbox"/>
            <label className="ml-2" htmlFor="agree">Agree to terms and conditions</label>

            <button  className="block border-1 w-full my-2 py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-900 hover:text-white" type="submit">Register</button>

            <p>{error}</p>

        </form>
    </div>
  )
}


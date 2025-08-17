import React from 'react'
import {useState} from "react"

export default function OtherForms() {
    const [email, setEmail] = useState("")
    const [profilePic, setProfilePic] = useState(null)

    const hadnleFormSubmit = ()=>{
        e.preventDefault()
        //perform actions
        //formData
        const formData = new formData()
        formData.append("email", email)
        formData.append("profilePic", profilePic)

        //server action, post request
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:value`);
        }
    }
  return (
    <div> <form  className="w-lg mx-auto my-5 p-3 shadow-lg">
        <label htmlFor="email" className="">
          Email Address
        </label>
        <input onChange={(e)=> setEmail(e.target.value)}  value={email} type="email" id="email" className="block border-1 w-sm px-3 py-1 rounded-md"/>
        <label htmlFor="photo" className="">
          Profile picture
        </label>
        <input onChange={(e)=> setProfilePic(e.target.files[0])} type="file" id="photo" className="block "  />
        <button className="py-2 px-4 border-1 bg-blue-800 rounded-md">Register</button>
      </form></div>
  )
}
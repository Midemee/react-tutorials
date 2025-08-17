import React from 'react'
import {useState} from 'react'

export default function ComplexForm() {
    const [user, setUser] = useState ({email: "", fullName: "", username: ""})
    const [error, setError] = useState ("")

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(user.email, user.fullName, user.username);
        
        if (!user.email.trim() || !user.fullName.trim () || !user.username.trim()) {
            setError ("please fill all fields")
            return;
        }
        setUser({email: "", fullName: "", username: ""})
        setError()
    }

    const handleChange = (e)=> {
        setUser ({...user, [e.target.name] : e.target.value})
    }

  return (
    <div>
        <form className="w-md flex flex-col items-center shadow-lg mx-auto my-5 p-3">
        <label htmlFor="email" className="">
          Email Address
        </label>
        <input 
        
        onChange = {handleChange}
        value = {user.email}
          name="email"
          type="email"
          className="block w-xs border-1 py-1 px-2 rounded-md"
        />
        <label htmlFor="email" className="form-label">
          Name
        </label>
        <input

        onChange = {handleChange}
        value = {user.fullName}
          name="fullName"
          type="text"
          className="block w-xs border-1 py-1 px-2 rounded-md"
        />
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
         onChange = {handleChange}
         value= {user.username}
          name="username"
          type="text"
          className="block w-xs border-1 py-1 px-2 rounded-md"
        />
        <button
          onClick = {handleSubmit}
          type="submit"
          className="w-[100px] bg-blue-900 rounded-md mt-2 border-1 py-2 "
        >
          Register
        </button>
        <p className='text-red-500 font-bold'>{error} </p>
      </form>

    </div>
  )
}
import React from 'react'
import {useState} from "react"

export default function PracticeForm() {
    const [name, setName] = useState ("")
    const [address, setAddress] = useState ("")
    const [gender, setGender] = useState ("")
    const [accept, setAccept] = useState (false)
    const [fail, setFail] = useState ("")

    const handleForm =(event) => {
        event.preventDefault()
        console.log(name, address, gender, accept);
        if (!name || !address || !gender || !accept) {
            setFail ("please fill all fields")
        }
        setName ("")
        setAddress ("")
        setGender ("")
        setAccept (false)  
    }
   
  return (
    <div>
        <form onSubmit={handleForm} action="">
        <h1>Fill the Form</h1>

        <label htmlFor='name'>Name</label>
        <input onChange={(event)=> setName (event.target.value)} value= {name} id='name' type='text' />

        <label htmlFor='address'>Address</label>
        <input onChange={(event)=>  setAddress (event.target.value)} value = {address} id='address' type='text'  />

        <label htmlFor='gender'>Gender</label>
        <input onChange={(e)=> setGender (e.target.value)} value= {gender} id='gender' type='text'  />

        <label htmlFor='accept'>Accept all terms and conditions</label>
        <input onChange={(e)=> setAccept (e.target.checked)} id='accept' type='checkbox'/>

        <button type="submit">Submit</button>

        <p>{fail}</p>

    </form> 
    </div>
  )
}

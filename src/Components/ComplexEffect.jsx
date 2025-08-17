import React from 'react'
import {useState, useEffect} from 'react'



export default function ComplexEffect() {
     const url = "https://jsonplaceholder.typicode.com/users"
     const [users, setUsers] = useState ([])
     const [isLoading, setIsLoading] = useState (true)

     useEffect (()=>{
        const getUsers= async ()=> {
            try {
                const response = await fetch (url)
                const data = await response.json()
                console.log(data);
                setUsers(data)
                setIsLoading (false)    
            } catch (error) {
                console.log(error);
            }
        };
        getUsers()
     },[])

     if (isLoading) {
        return ("Loading...")
     }

  return (
    <div>
      <h1>List of users</h1>
      <div>
        {users.map ((user)=>{
            return <div key= {user.id}>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.address.street}</h2>

            </div>

        })}
      </div>
    </div>
  )
}

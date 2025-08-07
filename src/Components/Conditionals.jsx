import React from 'react'

export default function Conditionals() {
    const isLoading = false
    const isError = false

    // if (isLoading){
    //     return <h1>Loading</h1>
    // }
    // if (isError) {
    //     return <h1>Network Error</h1>
    // }


  return (
    <div>
    <h1>Conditional</h1>
    { isLoading? <p>Loading...</p> : <p> Data</p>}  
    <button>
        {isLoading ? "logging in" : "login"}
    </button>
    {isError && <h1>Network Error</h1>}
    
    </div>
  )
}

import React from 'react'
import {useState, useEffect} from 'react'

export default function SimpleEffects() {
    const [num, setNum] = useState (1)
    const [age, setAge] = useState (45)

    useEffect (()=> {
      console.log("useEffect run");
    }, [])

    const [count, setCount] = useState(0);

    useEffect (()=>{
      setTimeout(()=>{
        setCount ((count)=> count + 1);
      }, 1000);

    }, []);

    // function increaseNum () {
    //     setNum (num + 1)
    // }

    // function increaseAge () {
    //     setAge (age + 1)
    // }
  return (
    <div className='mx-auto flex flex-col w-[200px]'>
        <h1>{num}</h1>
      <button onClick={()=> setNum (num + 1)} className='bordee-1 w-[100px] bg-green-900 rounded-md my-2 text-white'>Increase</button>
      <h1>{age} </h1>
      <button onClick={()=> setAge (num + 1)}  className='border-1 w-[100px] bg-green-900 rounded-md my-2 text-white'>Increase Age</button>
      <p>{count}</p>
    </div>
  )
}

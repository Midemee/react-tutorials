import React from 'react'
import {useState} from "react"
import products from '../../data'

export default function ComplexState() {
    const [user,setUser] = useState({
        fullName : "Peter Pan",
        age: 45,
        job: "Frontend Engineer"
    })
    const handleChangeUser = ()=>{
        setUser({...user, age: 50, job: "Backend Dev"})
    }

    const products = [{
        id:1,
        title: "Baseball Hat",
        price:500,
        img: "https://tse2.mm.bing.net/th/id/OIP.1ljVbvP2prSK8jIiiCu5-AHaF7?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id:2,
        title: "Hoodie",
        price:400,
        img:"https://tse2.mm.bing.net/th/id/OIP.QZ53r-j9nkNqvId1kG13lwHaGc?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id:3,
        title: "Trouser",
        price:1000,
        img:"https://tse2.mm.bing.net/th/id/OIP.Upy4rmqtmaMlnPLgghObVwHaJ3?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
]

const [cart, setCart] = useState(products)

const handleRemoveItem = (itemId)=> {
    const remainInProducts = cart.filter((cartitem)=> cartitem.id !== itemId)
    setCart(remainInProducts)
}

const handleClearCart =()=>{
    setCart([])
}
if (cart.length === 0) {
    return (
        <div className='flex flex-col items-center mt-[5%^]'>
            <h1>your cart is empty</h1>
            <button onClick={() => setCart (products)} className='border-1 px-3 py-2 bg-blue-800'>continue shopping</button>
        </div>
    )
}



  return (
    <div className="flex flex-col items-center justify-center mt-[5%] ">
        <h1>Fullname:{user.fullName}</h1>
        <h2>Age:{user.age}</h2>
        <p>Job:{user.job}</p>
        <button onClick={handleChangeUser} className="border-1 px-3 py-2 bg-amber-400">Change User</button>
        <div>
            <h2>Your Bag</h2>
           <div className="border-2 p-3 rounded-md w-[200px] flex flex-col items-center">{cart.map((cartitem)=>{
            return <div className="border-b-2" key={cartitem.id}>
                <img className="w-[100px]" src={cartitem.img} alt={cartitem.title} />
                <h3>{cartitem.title}</h3>
                <p>${cartitem.price}</p>
                <button className="bg-red-800 px-3 py-2 rounded-md mb-1 w-full" onClick={()=> handleRemoveItem(cartitem.id)}>Remove</button>
            </div>
           })}
           <button onClick={handleClearCart} className="bg-slate-600 px-3 py-2 rounded-md mt-2">Clear bag</button>
           </div>
        </div></div>
  )
}

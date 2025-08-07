//key props in React js
import React from 'react'

export default function SimpleList() {
    const customers = ["west", "ruby", "aisha", "abiola"]
    const products = [
        {
            id:1,
            title: "Baseball Hat",
            price:500
        },
        {
            id:2,
            title: "Hoodie",
            price:1000
        },
        {
            id:3,
            title: "Trouser",
            price:500
        },
    ]

  return (
   <div>
    <h1>List of customers</h1>
        <div>
       {customers.map((customer, index)=>{
        return <h3 className="text-green-800" key={index}>
            {customer}
            </h3>
       })}
        <h1>Available Products</h1>
    </div>
    <div>
    <h1>List of products</h1>
    <div>
        {products.map((product)=>{
            return(
                <div key={product.id}>
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
                </div>
            )
        })}
    </div>
    </div>
   </div>
  )
}



   
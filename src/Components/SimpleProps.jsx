import React from 'react'


const Test= ({image, title, price, itemsLeft, discountPrice, child})=>{
    return(
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{price} </p>
            <p>{itemsLeft} </p>
            <p>{discountPrice} </p>
            <p>{child} </p>
        </div>
    )
}

export default function SimpleProps() {
  return (
    <div>
        <Test discountPrice={50} itemsLeft={70} price={5000} title="Image Neymar" image={"/Neymar.jpeg"} />
        <Test discountPrice={50} itemsLeft={70} price={5000} title="Image Neymar" image={"/Neymar.jpeg"} />
    </div>
  )
}


import React from 'react'

const Products = ({image, title, price, discountPrice, quality})=>{
    return(
        <div>
            <img src={image} alt=""  />
            <h1>{title} </h1>
            <p>{price}</p>
            <p>{discountPrice}</p>
            <p>{quality}</p>
        </div>
    )
}


export default function Product() {
  return (
    <div>
      <Products title="Female Handbag" image={"/Neymar.jpeg"}  price={10000} discountPrice={5000} quality="Croc Leather" />

      <Products title="Female Handbag" image={"/Neymar.jpeg"}  price={10000} discountPrice={5000} quality="Croc Leather" />

      <Products title="Female Handbag" image={"/Neymar.jpeg"}  price={10000} discountPrice={5000} quality="Croc Leather" />
    </div>
  )
}

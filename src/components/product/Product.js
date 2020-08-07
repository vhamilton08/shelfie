import React from 'react'

const Product = (props) => {
    const {name, price, image} = props.productList
    return (
       <div>
           <h1>{name}</h1>
           <h3>${price}</h3>
           <img alt="product" src={image}/>
       </div>
        )
    }
    export default Product

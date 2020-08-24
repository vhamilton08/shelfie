import React from 'react'
import axios from 'axios'


const getInventory = () => {
    axios
      .get("/api/inventory")
      .then(res => this.setState({ inventory: res.data }))
      .catch(err => console.log(err));
}
 const deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(() => {
        this.getInventory();
      })
      .catch(err => console.log(err))

    }
const Product = (props) => {
    const {name, price, image} = props.productList
    return (
       <div>
           {getInventory}
           <h1>{name}</h1>
           <h3>${price}</h3>
           <img alt="product" src={image}/>
           <button onClick>Edit</button>
           <button onClick={deleteProduct}>Delete</button>
       </div>
        )
    }
    export default Product

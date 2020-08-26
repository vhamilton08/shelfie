import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Product = (props) => {
  
  const [input, setInput] = useState({
    product: ''})
 
 const editProductHandler = (e) => {
    setInput({
        [e.target.name]: e.target.value
    })
 }

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
    const editProduct = (id) => {
      console.log(input)
      const {price} = input
      axios.put(`/api/product/${id}?price=${price}`)
      .then(() => {
        this.getInventory()
      }).catch(err => console.log(err))
    }
    useEffect(() => {
      axios.get('/api/inventory')
      .then((res) => {
        setInput(res.data)
      }).catch((err) => {console.log(err)
    })
   }, [])
  // console.log(props)
    const {id, name, price, imageurl} = props.data

    return (
       <div>
           {getInventory}
           <h1>{name}</h1>
           <h3>${price}</h3>
           <img alt="product" src={imageurl}/>
           <button onClick={deleteProduct}>Delete</button>
           <input name='price' value={input.price} onChange={editProductHandler}/>
           <button onClick={e => editProduct(id)}>Edit</button>
       </div>
        )
    }
    export default Product

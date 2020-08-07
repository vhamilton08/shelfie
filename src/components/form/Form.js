import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            productName: "",
            price: ""
        }
    }

    addProductHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancelProductHandler(event) {
        this.setState({
            imageUrl: "", productName: "", price: ""
        })
    }
   addProduct = () => {
      const get_inventory = this.props.get_inventory
       const {name, price, imageUrl} = this.state
       axios.post('/api/product', {name, price, imageUrl})
       .then(res => {
           get_inventory()
        this.setState({
            imageUrl: "",
            productName: "",
            price: ""
        })
       })

   }

    render() {
        const {imageUrl, productName, price} = this.state
        return (
            <div>
                <form>

                    <input
                    name="imageUrl"
                    value={imageUrl}
                    type="url"
                    onChange={e => this.addProductHandler(e)}/>
                
                    <input
                    name="productName"
                    value={productName}
                    type="text"
                    onChange={e => this.addProductHandler(e)}/>
                    
                    <input
                    name="price"
                    value={price}
                    type="text"
                    onChange={e => this.addProductHandler(e)}/>
               
                    <button onClick={e => this.cancelProductHandler(e)}>Cancel</button>
                    <button>Add to Inventory</button>
                </form>
            <div>Form</div>
            </div>
        )
    }
}
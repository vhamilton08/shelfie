import React, {Component} from 'react'
import Product from '../product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory: []
        }
    }
    
    componentDidMount(){
        // const getInventory = () => {
            axios
              .get("/api/inventory")
              .then(res => this.setState({ inventory: res.data }))
              .catch(err => console.log(err));
        }
        
        
    render(){
        console.log(this.state.inventory)
        const productList = this.state.inventory.map((el, i) => {
          return <Product key={i} data={el}/>
         } )
        return (

            <div>

        
         <div>Dashboard</div>
         {/* <Product productList={productList}/> */}
         {productList}
        
        </div>
            )
        }
        }
        export default Dashboard
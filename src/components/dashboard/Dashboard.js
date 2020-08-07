import React from 'react'
import Product from '../product/Product'

const Dashboard = (props) => {
    
    
    
    const productList = props.inventory.map((el, i) => (
        <Product key={i} data={el}/>
        ))
    
    return (
        <div>

        
         <div>Dashboard</div>
         <Product productList={productList}/>
         
        
        </div>
            )
        }
        export default Dashboard


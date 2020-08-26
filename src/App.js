import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
    inventory: [],
    selected: []
    }
    this.get_inventory = this.get_inventory.bind(this)
  }
  componentDidMount(){
    this.get_inventory()
  }
  get_inventory = () => {
    axios.get("/api/inventory")
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div>
          <Header/>
          <Dashboard inventory = {this.state.inventory} get_inventory = {this.get_inventory}/>
          <Form get_inventory = {this.get_inventory} selected={this.state.selected}/>
      </div>
         
         
         );
        }
      }
export default App;

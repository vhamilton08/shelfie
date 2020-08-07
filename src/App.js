import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
    inventory: []
    }

  }
  componentDidMount(){
    this.get_inventory()
  }
  get_inventory = () => {
    Axios.get("/api/inventory")
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
          <Dashboard inventory = {this.state.inventory}/>
          <Form/>
      </div>
         
         
         );
        }
      }
export default App;

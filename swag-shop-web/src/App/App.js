import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

const http = new HttpService();

class App extends Component {
  
  constructor(props){
    super(props);

    //Bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products)
    }, err =>{

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Swag Shop</h2>
        </div>
        <div className="App-main">
          <Product price="4.23" title="Cool Toy Gun" imgUrl="https://sad.hasbro.com/d4385acb7ccfebf5743d81a3bc180b6678fbad68/07929145dd531a9b19f4fed65a190937.png"/>
        </div>
      </div>
    );
  }
}

export default App;

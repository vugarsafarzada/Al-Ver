import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import React, { Component } from 'react'

class App extends Component {
  state = {
    categories: [],
    products: [],
  }

  getAPI_categories = () => {
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
  }

  getAPI_products = () => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  componentDidMount() {
    this.getAPI_categories();
    this.getAPI_products();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigator />
        <Content products={this.state.products}/>
        <Footer />
      </div>
    )
  }
}

export default App;
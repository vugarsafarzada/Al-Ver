import './App.css'
import Product from './components/Product';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import Error from './components/Error';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import Search from './components/Search';

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
      .then(data => this.setState({ products: data.reverse() }))
  }

  componentDidMount() {
    this.getAPI_categories();
    this.getAPI_products();
  }

  render() {
    return (
      <div className="App">
        <Header products={this.state.products}/>
        <Navigator />
        <Switch>
          <Route exact path={"/"} render={ props => (<Main products={this.state.products} />) } />
          <Route exact path={"/main"} render={ props => (<Main products={this.state.products} />) } />
          <Route exact path={"/products"} component={Product} />
          <Route exact path={"/search"} component={Search} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
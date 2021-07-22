//Tools
import './App.css'
import Product from './components/Product';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { productsContext } from './contexts/productsContext';

//Components
import Error from './components/Error';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  const [products, setProducts] = useState([""]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data.reverse()))
  }, []);

  return (
    <productsContext.Provider value={products}>
      <div className="App">
        <Header products={products} />
        <Navigator />
        <Router>
          <Switch>
            <Route exact path={"/"} render={props => (<Main />)} />
            <Route exact path={"/main"} render={props => (<Main />)} />
            <Route exact path={"/favorites"} render={props => (<Favorites />)} />
            <Route exact path={"/products"} render={props => (<Product />)} />
            <Route exact path={"/search"} component={Search} />
            <Route component={Error} /> 
          </Switch>
        </Router>
        <Footer />
      </div>
    </productsContext.Provider>
  )
}
  
export default App;
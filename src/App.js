import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigator />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
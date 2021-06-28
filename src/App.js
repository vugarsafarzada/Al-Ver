import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Navigator from './components/Navigator';
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigator/>
          <Row className="row">
            <Col xs="2">
              <Sidebar />
            </Col>
            <Col xs="10">
              <Content />
            </Col>  
          </Row>
        <Footer />
      </div>
    )
  }
}

export default App;
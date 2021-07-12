import React, { Component } from 'react'
import Content from './Content';

class Main extends Component {
    render() {
        return (
            <div>
                <Content products={this.props.products} route={this.props.route}/>
            </div>
        )
    }
}

export default Main;

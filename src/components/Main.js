import React, { Component } from 'react'
import Content from './Content';

class Main extends Component {
    render() {
        return (
            <div>
                <Content products={this.props.products} />
            </div>
        )
    }
}

export default Main;

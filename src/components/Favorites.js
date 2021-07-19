import React, { Component } from 'react'
import Content from './Content'

class Favorites extends Component {

    check = () => {
        console.log("CHECK",this.props.favorites);
    }

    componentDidMount(){
        this.check();
    }

    render() {
        return (
            <div>
                <h2>Favorites</h2>
                <Content products={this.props.favorites} />
            </div>
        )
    }
}
export default Favorites;
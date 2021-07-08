import React, { Component } from 'react'

class Product extends Component {
    state = {
        productData: []
    }

    getProductById = () => {
        var id = new URLSearchParams(this.props.location.search).get("id");
        var productUrL = `http://localhost:3000/products?id=${id}`
        fetch(productUrL)
            .then(response => response.json())
            .then(data => this.setState({ productData: data }))
    }

    componentDidMount() {
        this.getProductById()
    }
    render() {
        return (
            <div className="content">
                {
                    this.state.productData.map(item => (
                        <div key={item.id} className="product">
                            <h1 >{item.productName}</h1>
                            <span className="product-img">{item.quantityPerUnit}</span>
                        </div>

                    ))
                }
            </div>
        )
    }
}
export default Product;
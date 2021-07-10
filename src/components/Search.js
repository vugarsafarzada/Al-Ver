import React, { Component } from 'react';
import Filter from './Filter';
import Post from './Post';

export default class Search extends Component {
    state = {
        searchValue: "",
        resultProducts: [],
    }

    getSearchValue = () => {
        var value = new URLSearchParams(this.props.location.search).get("id");
        this.setState({ searchValue: value });
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => this.filterValue(data));
    }

    filterValue = (products) =>{
        var searchValue = this.state.searchValue;
        var filterResults = products.filter(item => item.productName.toLowerCase().startsWith(searchValue.toLowerCase()));
        this.setState({resultProducts: filterResults})
    }


    componentDidMount() {
        this.getSearchValue()
    }
    render() {
        return (
            <div className="content">
                <h6 className="text-light">Nəticə: {this.state.resultProducts.length}</h6>
                <Filter hidden={true}></Filter>
                <hr />
                <div className="posts">
                    {
                        this.state.resultProducts.map(post => (
                            <a key={post.id} href={"/products?id=" + post.id} className="text-dark">
                                <Post
                                    id={post.id}
                                    category_id={post.categoryId}
                                    product_name={post.productName}
                                    quantity_per_unit={post.quantityPerUnit}
                                    product_price={post.unitPrice}
                                    favorite={post.favorite}
                                    product_stocks={post.unitsInStock} />
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}

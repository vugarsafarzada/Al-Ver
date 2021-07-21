import React, { Component } from 'react';
import Content from './Content';
import Error from './Error';

export default class Search extends Component {
    state = {
        resultProducts: [],
        searched:""
    }

    SearchProducts = () => {

        var request = document.location.search;
        var requestType = decodeURI(request).split("=")[0];

        if (requestType === "?key") {
            fetch('http://localhost:3000/products')
                .then(response => response.json())
                .then(data => filterData(data))

            var filterData = (data) => {
                var value = decodeURI(request).split("?key=")[1];
                var filterResults = data.filter(item => item.productName.toLowerCase().startsWith(value.toLowerCase()));
                this.setState({ resultProducts: filterResults.reverse() });
                this.setState({searched: value});
            }

        }
    }


    componentDidMount() {
        this.SearchProducts()
    }
    render() {
        return (
            <div>
                <h6 className="s-results">Nəticə: {this.state.resultProducts.length}</h6>
                {
                    this.state.resultProducts.length > 0 ? <Content label={`Axtarıldı: "${this.state.searched}"`} products={this.state.resultProducts}/> : <Error message="Axtarılan növdə məhsul mövcut deyil"/>
                }
            </div>
        )
    }
}

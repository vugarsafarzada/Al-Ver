//Tools
import { useEffect, useState } from 'react';

//Components
import Content from './Content';
import Error from './Error';

function Search(props) {
    const [resultProducts, setResultProducts] = useState([""]);
    const [searched, setSearched] = useState();

    var SearchProducts = () => {
        var request = document.location.search;
        var requestType = decodeURI(request).split("=")[0];
        
        if (requestType === "?key") {
            fetch('http://localhost:3000/products')
                .then(response => response.json())
                .then(data => filterData(data))

            var filterData = (data) => {
                var value = decodeURI(request).split("?key=")[1];
                var filterResults = data.filter(item => item.productName.toLowerCase().startsWith(value.toLowerCase()));
                setResultProducts(filterResults);
                setSearched(`Axtarılan: ${value}`)
            }
        }

        if(requestType === "?categoryId"){
            var value = decodeURI(request).split("?categoryId=")[1];
            fetch(`http://localhost:3000/products${request}`)
            .then(response => response.json())
            .then(data => setResultProducts(data))

            fetch(`http://localhost:3000/categories?id=${value}`)
            .then(response => response.json())
            .then(data => setSearched(data[0] ? data[0].categoryName : window.location.assign("/error")))
        }
    }

    useEffect(() => {
        SearchProducts();
    }, [])

    return (
        <div>
            <h6 className="s-results">{resultProducts.length} Məhsul</h6>
            {
                resultProducts.length > 0 ? <Content label={searched} filter={false} products={resultProducts} /> : <Error message="Axtarılan növdə məhsul mövcut deyil" />
            }
        </div>
    )
}

export default Search;
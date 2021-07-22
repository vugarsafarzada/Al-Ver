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
                setSearched(value)
            }
        }
    }

    useEffect(() => {
        SearchProducts();
    }, [])

    return (
        <div>
            <h6 className="s-results">Nəticə: {resultProducts.length}</h6>
            {
                resultProducts.length > 0 ? <Content label={`Axtarıldı: "${searched}"`} products={resultProducts} /> : <Error message="Axtarılan növdə məhsul mövcut deyil" />
            }
        </div>
    )
}

export default Search;
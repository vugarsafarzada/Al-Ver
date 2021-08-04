import React from "react";
import { useState, useEffect } from "react";
import Content from "./Content";
import Error from "./Error";

function Search() {
  const [resultProducts, setResultProducts] = useState([""]);
  const [searched, setSearched] = useState();

  var SearchProducts = () => {
    var request = decodeURI(window.location.search);
    var requestType = request.split("=")[0];

   if (requestType === "?key") {
      fetch(process.env.PRODUCTS_API)
        .then((response) => response.json())
        .then((data) => filterData(data));

      var filterData = (data) => {
        var value = request.split("?key=")[1];
        var filterResults = data.filter((item) =>
          item.productName.toLowerCase().startsWith(value.toLowerCase())
        );
        setResultProducts(filterResults);
        setSearched(`Axtarılan: "${value}"`);
      };
    }
  };
  useEffect(() => {
    SearchProducts();
  }, []);
  return resultProducts.length > 0 ? (
    <Content products={resultProducts} label={searched} />
  ) : (
    <Error message="Axtarılan növdə məhsul mövcut deyil!" />
  );
}

export default Search;

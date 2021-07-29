import React from "react";
import Product from "../components/Product";
import Error from "../components/Error";

function productById(props) {
  return (
    <div>
      {props.productData.length > 0 ? (
        <Product productData={props.productData} category={props.categoryName}/>
      ) : (
        <Error message="Məhsul mövcut deyil!" />
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3001/products?id=${context.params.id}`
  );
  const productData = await res.json();
  const categoryId = productData[0].categoryId;
  const res2 = await fetch(
    `http://localhost:3001/categories?id=${categoryId}`
  );
  const category = await res2.json();
  const categoryName = category[0].categoryName;
  return {
    props: {
      productData,
      categoryName
    },
  };
};

export default productById;

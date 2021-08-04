import React from "react";
import Product from "../components/Product";
import Error from "../components/Error";

function productById(props) {
  return (
    <div>
      {props.productData.length > 0 ? (
        <Product
          productData={props.productData}
          category={props.categoryName}
        />
      ) : (
        <Error message="Məhsul mövcut deyil!" />
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.PRODUCTS_API}/${context.params.id}`);
  const productData = await res.json();
  const { categoryId } = productData[0];
  const res2 = await fetch(`${process.env.CATEGORIES_API}/${categoryId}`);
  const category = await res2.json();
  const { categoryName } = category[0];
  return {
    props: {
      productData,
      categoryName,
    },
  };
};

export default productById;

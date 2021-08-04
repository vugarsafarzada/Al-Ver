import React from 'react';
import Content from '../components/Content';

function category(props) {
    return (
      <div>
        <Content
          filter={true}
          label={`Kateqoriya: "${props.categoryName}"`}
          products={props.productsByCategories}
        />
      </div>
    );
}

export const getStaticPaths = async () =>{
    const res = await fetch(process.env.PRODUCTS_API);
    const allProducts = await res.json();
    const getPaths = allProducts.map(product => {
      return {
        params: { id: product.categoryId.toString() },
      };
    })

    return{
      paths: getPaths,
      fallback: false
    }
    
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${process.env.PRODUCTS_API}/categoryid/${context.params.id}`);
  const res2 = await fetch(`${process.env.CATEGORIES_API}/${context.params.id}`);
  const productsByCategories = await res.json();
  const categoryName = (await res2.json())[0].categoryName;   
  return {
    props: {
      productsByCategories,
      categoryName
    },
  };
};

export default category;
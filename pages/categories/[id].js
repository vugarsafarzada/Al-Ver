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
    const res = await fetch('http://localhost:3001/products');
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
  const res = await fetch(`http://localhost:3001/products?categoryId=${context.params.id}`);
  const category = await fetch(`http://localhost:3001/categories/${context.params.id}`);
  const productsByCategories = await res.json();
  const categoryName = (await category.json()).categoryName;
  return {
    props: {
      productsByCategories,
      categoryName
    },
  };
};

export default category;
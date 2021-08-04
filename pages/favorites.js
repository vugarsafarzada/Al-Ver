import React from 'react'
import Content from './components/Content';

function favorites(props) {
    return (
        <div>
            <Content products={props.getProductsByFavorite} label="Favoritlər"/>
        </div>
    )
}

export const getServerSideProps = async ()=> {
    const res = await fetch(process.env.PRODUCTS_API);
    const allProducts = await res.json();

    const getProductsByFavorite = allProducts.filter((item) => item.favorite);

    return{
        props:{
            getProductsByFavorite,
        }
    }
}

export default favorites

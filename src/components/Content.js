//Tools
import React from 'react';
import { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';
//Components
import Filter from './Filter';
import Post from './Post';

function Content(props) {
    let posts, posts2;
    var products = useContext(productsContext);
    var searchResult = props.products;

    if(products){
        posts = products.map(post => (
            <a key={post.id-1} href={"/products?id=" + post.id} className="text-dark">
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

    if(searchResult){
        posts2 = searchResult.map(post => (
            <a key={post.id-1} href={"/products?id=" + post.id} className="text-dark">
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


    return (
        <div className="content">
            <h2 className="content-label">{props.label}</h2>
            <Filter hidden={false} />
            <div className="posts">
                { posts2 ?  posts2 : posts }
            </div>
        </div>
    )
}

export default Content;
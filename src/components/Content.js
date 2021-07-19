//Tools
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Filter from './Filter';
import Post from './Post';

function Content(props) {
    return (
        <div className="content">
            <Filter hidden={false} />
            <div className="posts">
                {
                    props.products.map(post => (
                        <Link key={post.id-1} to={"/products?id=" + post.id} className="text-dark">
                            <Post
                                id={post.id}
                                category_id={post.categoryId}
                                product_name={post.productName}
                                quantity_per_unit={post.quantityPerUnit}
                                product_price={post.unitPrice}
                                favorite={post.favorite}
                                product_stocks={post.unitsInStock} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;
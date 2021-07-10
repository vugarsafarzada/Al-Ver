import React, { Component } from 'react';
import Filter from './Filter';
import Post from './Post';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Filter hidden={true} />
                <div className="posts">
                    {
                        this.props.products.map(post => (
                            <a key={post.id} href={"/products?id=" + post.id} className="text-dark">
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
                </div>
            </div>
        )
    }
}

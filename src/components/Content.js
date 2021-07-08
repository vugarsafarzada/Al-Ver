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
                            <Post
                                id={post.id}
                                category_id={post.categoryId}
                                product_name={post.productName}
                                quantity_per_unit={post.quantityPerUnit}
                                product_price={post.unitPrice}
                                favorite={false}
                                product_stocks={post.unitsInStock} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

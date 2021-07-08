import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="post" title={this.props.product_name}>
                <div className="post-img">
                    <button className="btn post-fav-btn">
                        <i className={this.props.favorite ? "fas fa-heart text-danger" : "far fa-heart"} />
                    </button>
                </div>
                <br />
                <b className="post-price">{this.props.product_price} ₼</b>
                <br />
                <span className="post-name">{this.props.product_name}</span>
                <br />
                <span className="post-date">Paylaşıldı: dd-mm-yyyy</span>
            </div>
        )
    }
}

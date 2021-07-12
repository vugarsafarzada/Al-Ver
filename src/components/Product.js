import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Error from './Error';

class Product extends Component {
    state = {
        productData: [],
    }

    getProductByRequest = () => {
        var request = document.location.search;
        var requestType = decodeURI(request).split("=")[0];

        var check = (data) =>{
            data.length !== 0 ? this.setState({productData:data}) : window.location.assign("/error");
        }

        if (requestType === "?id") {
            if (request !== null) {
                var productUrL = `http://localhost:3000/products${request}`
                fetch(productUrL)
                    .then(response => response.json())
                    .then(data => check(data))
            } else{
                window.location.assign("/main")
            }
        }

    }

    componentDidMount() {
        this.getProductByRequest()
    }
    render() {
        return (
            <div className="content">
                {
                    this.state.productData.map(item => (
                        <div className="product" key={item.id}>
                            <h2 className="text-center text-light">{item.productName}({item.quantityPerUnit})</h2>
                            <br />
                            <Row>
                                <Col>
                                    <div className="product">

                                        <div className="product-img">

                                        </div>
                                    </div>
                                </Col>
                                <Col className="product-info">
                                    <h6>Məlumat:</h6>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto
                                        beatae doloremque fugiat laboriosam nesciunt, quae veniam vitae voluptatem!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut blanditiis dolor iure nostrum officiis pariatur reiciendis suscipit tempora velit!</p>
                                    <hr />
                                    <h5>Əlaqə</h5>
                                    <ul>
                                        <li>John Doe</li>
                                        <li>Baku / Azerbaijan</li>
                                        <li>TEL: +994-00-000-00-00</li>
                                        <li>E-POÇT: example@mail.com</li>
                                    </ul>
                                    <div style={{ width: "100px", display: "inline" }} className="price-fav-box">
                                        <Row>
                                            <Col xs='7'>
                                                <b className="post-price-sec text-center">{item.unitPrice} ₼</b>
                                            </Col>
                                            <Col xs='5'>
                                                <button className="btn post-fav-btn-sec">
                                                    <i className={item.favorite ? "fas fa-heart text-danger" : "far fa-heart"} />
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Product;
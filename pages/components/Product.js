import React from "react";
import styles from "../../styles/Product.module.css";

function Product(props) {
  const product = props.productData[0];

  return (
    <div className={styles.productPage}>
      <h2 className="text-center text-light" style={{padding:"15px"}}>
        {product.productName}({product.quantityPerUnit})
      </h2>
      <div className={styles.product}>
        <div className={styles.product_img}></div>

        <div className={styles.product_info}>
          <h6>Məlumat:</h6>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium amet architecto beatae doloremque fugiat laboriosam
            nesciunt, quae veniam vitae voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aut blanditiis dolor iure nostrum officiis pariatur
            reiciendis suscipit tempora velit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aut blanditiis dolor iure nostrum officiis pariatur
            reiciendis suscipit tempora velit!
          </p>
          <hr />
          <h5>Əlaqə</h5>
          <ul>
            <li>John Doe</li>
            <li>Baku / Azerbaijan</li>
            <li>TEL: +994-00-000-00-00</li>
            <li>E-POÇT: example@mail.com</li>
          </ul>
          <div className={styles.price_fav_box}>
            <b className={styles.product_price}>{product.unitPrice} ₼</b>
            <button
              className="btn"
              style={{ fontSize: "30px" }}
              id={styles.product_fav_btn} >
              <i
                className={
                  product.favorite ? "fas fa-heart text-danger" : "far fa-heart"
                } />
            </button>
            <br />
          </div>
          <span>Kategoriya: </span>
          <a
            href={`/categories/${product.categoryId}`}
            className="text-secondary">
            {props.category}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React from "react";
import Post from "./Post";
import styles from "../../styles/PostListing.module.css";
import Link from "next/link";

function PostListing(props) {
  var posts = props.products.map((post) => (
    <Link key={post.id} href={"/products/" + post.id}>
      <a key={post.id} className="text-dark">
        <Post
          id={post.id}
          key={post.id}
          category_id={post.categoryId}
          product_name={post.productName}
          quantity_per_unit={post.quantityPerUnit}
          product_price={post.unitPrice}
          favorite={post.favorite}
          product_stocks={post.unitsInStock}
          date={post.date}
        />
      </a>
    </Link>
  ));

  return <div className={styles.posts}>{posts.reverse()}</div>;
}

export default PostListing;
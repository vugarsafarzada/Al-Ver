import React from "react";
import styles from "../../styles/Content.module.css";
import PostListing from "./PostListing";
import Categories from "./Categories";

function Content(props) {
  return (
    <div className={styles.content}>
      <h3 className={styles.content_label}>{props.label}</h3>
      {props.products ? <PostListing products={props.products} /> : ""}
      {props.categories ? <Categories categories={props.categories} /> : ""}
    </div>
  );
}

export default Content;

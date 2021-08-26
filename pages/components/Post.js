import styles from "../../styles/Post.module.css";

function Post(props) {
  return (
    <div className={styles.post} title={props.product_name}>
      <div className={styles.post_img}>
        <button className="btn" id={styles.post_fav_btn}>
          <i
            className={
              props.favorite ? "fas fa-heart text-danger" : "far fa-heart"
            }
          />
        </button>
      </div>
      <br />
      <b className={styles.post_price}>{props.product_price} ₼</b>
      <br />
      <span className={styles.post_name}>{props.product_name}</span>
      <br />
      <span className={styles.post_date}>Paylaşıldı: {props.date}</span>
    </div>
  );
}

export default Post;

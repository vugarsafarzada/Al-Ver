import styles from "../../styles/Categories.module.css";
import Link from "next/link";

function Categories(props) {
  if (props.categories) {
    var categorieList = props.categories.map((item) => (
      <Link href={"/categories/" + item.id} key={item.id}>
        <a className={styles.category_box}>
          <b className={styles.category_label}>{item.categoryName}</b>
        </a>
      </Link>
    ));
  }

  return (
    <div className={styles.categories}>
      <div className={styles.categories_box}>{categorieList}</div>
    </div>
  );
}

export default Categories;
import styles from "../styles/Home.module.css";
import Content from "./components/Content";

function Home(props) {
  return (
    <div className={styles.container}>
      <Content
        filter={true}
        label="Ən yeni məhsullar"
        products={props.products}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.PRODUCTS_API);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Home;

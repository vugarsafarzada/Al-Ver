import styles from "../../styles/Error.module.css";

function Error(props) {
  return (
    <div>
      <div
        className={styles.error}
        style={{
          marginTop: "8%",
          color: "white",
          padding: "50px",
          width: "500px",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>XƏTA!</h2>
        <h3>{props.message ? props.message : "Səhifə mövcut deyil"}</h3>
      </div>
    </div>
  );
}

export default Error;

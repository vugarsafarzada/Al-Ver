import React from "react";
import styles from "../../styles/Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(process.env.PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  var searchBoxHandler = (e) => {
    var search = e.target.value;
    if (search.length >= 3) {
      document
        .getElementById("search_box")
        .setAttribute("list", "search_box_list");
    } else {
      document.getElementById("search_box").setAttribute("list", "");
    }
  };

  let didumeans;
  if (products) {
    didumeans = products.map((item) => {
      return <option key={item.id} value={item.productName} />;
    });
  }

  var search = () => {
    var searchValue = document.getElementById("search_box").value;
    if (searchValue.length >= 1) {
      window.location.assign(`/search?key=${searchValue}`);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo_grad}>
        <Link href="/">
          <a href="">
            <Image src={logo} alt="Logo" />
          </a>
        </Link>
      </div>

      <div className={styles.searchbox_area}>
        <input
          type="search"
          id="search_box"
          className={styles.searchbox}
          placeholder="Axtar..."
          onChange={searchBoxHandler} />
        <datalist id="search_box_list">{didumeans}</datalist>
        <button
          type="search"
          title="Axtar"
          onClick={() => search()}
          className={styles.search_btn}>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div id={styles.login_area}>
        <Link href="/">
          <a className={styles.login_link}>
            <i className="fas fa-user-lock login-icon"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;

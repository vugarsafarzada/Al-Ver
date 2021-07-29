import React from "react";
import styles from "../../styles/Navi.module.css";
import { Nav, NavItem } from "reactstrap";
import Link from "next/link";

function Navi() {
  return (
    <div className={styles.navigator}>
      <Nav className={styles.navs}>
        <NavItem>
          <Link href="/">
            <a className={styles.nav_link} title="Ana Səhifə">
              <i className="fas fa-home" />
              <span className={styles.navs_name}>Ana Səhifə</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/categories">
            <a className={styles.nav_link} title="Kategoriya">
              <i className="fas fa-th-large"></i>
              <span className={styles.navs_name}>Kategoriya</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/favorites">
            <a className={styles.nav_link} title="Favoritlər">
              <i className="fas fa-heart"></i>
              <span className={styles.navs_name}>Favoritlər</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/delivery">
            <a className={styles.nav_link} title="Çatdırılma">
              <i className="fas fa-shipping-fast"></i>
              <span className={styles.navs_name}>Çatdırılma</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
            <a className={styles.nav_link} title="Əlaqə">
              <i className="fas fa-headset"></i>
              <span className={styles.navs_name}>Əlaqə</span>
            </a>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navi;

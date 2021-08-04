import nProgress from "nprogress";
import Router from "next/router";
import styles from "../../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Navi from "./Navi";

const Layout = ({ children }) => {
  Router.onRouteChangeStart = (url) => {
    nProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    nProgress.done();
  };

  Router.onRouteChangeError = () => {
    nProgress.done(); 
  };

  return (
    <div className={styles.container}>
      <Header />
      <Navi />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

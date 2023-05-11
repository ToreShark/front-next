import { Sen } from "next/font/google";
import React from "react";
import styles from "../components/layout.module.css";
import Footer from "./Footer/footer";
import Header from "./Header/headers";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

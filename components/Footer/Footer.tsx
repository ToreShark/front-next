import React from "react";
import styles from ".//footer.module.css";
import { VscLaw } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <IconContext.Provider value={{ style: { color: "white" } }}>
              <VscLaw size={50} />
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.col}>
          <h3>Онлайн уроки по защите своих прав</h3>
          <p className={styles.emailid}>torekhan@gmail.com</p>
          <h4>+ 7 707 381 60 81</h4>
        </div>
        <div className={styles.col}>
          <h3>Cсылки</h3>
          <ul className={styles.ulbox}>
            <li className={styles.listItem}>
              <Link href="/">Домой</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/about">O нас</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/contacts">Домой</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Подписывайтесь на нас</h3>
          <form>
            <input type="email" placeholder="Введите ваш email" required/>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

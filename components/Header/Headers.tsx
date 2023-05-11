import { VscLaw } from "react-icons/vsc";
import Link from "next/link";
import styles from ".//header.module.css";
import { IconContext } from "react-icons/lib";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useModalContext } from "../Contexts/ModalContext";
import { useAtom } from "jotai";
import { authAtom } from "np/state/atoms/atom";
import { useLogout } from "np/state/utils/atomutils";

const Header = () => {
  const handleLoginClick = () => {
    console.log("Кнопка Войти нажата");
  };
  const { openSendPhoneModal } = useModalContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth] = useAtom(authAtom);
  const logout = useLogout();

  const handleLogoutClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className={styles.logo}>
        <IconContext.Provider value={{ style: { color: "white" } }}>
          <VscLaw size={50} />
        </IconContext.Provider>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={`${styles.navbarsoft} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Домой
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              О нас
            </Link>
          </li>
          <li>
            <Link href="/contacts" className={styles.link}>
              Контакты
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}>
              Жалобы на бездействие ЧСИ
            </Link>
          </li>
          {auth.isAuthenticated && (
            <li>
              <FaUser size={24} color="white" />
            </li>
          )}
          <li>
            {auth.isAuthenticated ? (
              <button
                onClick={handleLogoutClick}
                className={`${styles.link} ${styles.loginButton}`}
              >
                Выйти
              </button>
            ) : (
              <button
                onClick={openSendPhoneModal}
                className={`${styles.link} ${styles.loginButton}`}
              >
                Войти
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

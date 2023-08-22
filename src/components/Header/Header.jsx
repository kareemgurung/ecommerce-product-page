import { useState } from "react";
import styles from "./header.module.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Cart from "../Cart/Cart";

const Header = () => {
  const [click, setClick] = useState(false);

  const ctx = useContext(CartContext);

  const handleClick = () => setClick((prevState) => !prevState);
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <button className={styles.iconHamburger} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM16 12H0V15H16V12Z"
                fill="#69707D"
              />
            </svg>
          </button>
          <div className={styles.logo}>
            <img
              src="/images/logo.svg"
              alt="sneakers"
              width="138"
              height="20"
            />
          </div>
          <nav
            className={
              click ? `${styles.navbar} ${styles.active}` : styles.navbar
            }
            role="navigation"
          >
            <button className={styles.iconClose} onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.99998 5.37868L2.40379 0.782486L0.282471 2.90381L4.87866 7.5L0.282471 12.0962L2.40379 14.2175L6.99999 9.62132L11.5962 14.2175L13.7175 12.0962L9.12131 7.5L13.7175 2.90381L11.5962 0.782486L6.99998 5.37868Z"
                  fill="#69707D"
                />
              </svg>
            </button>
            <ul className={styles.menu}>
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div
            className={
              click ? `${styles.backdrop} ${styles.active}` : styles.backdrop
            }
          ></div>
        </div>
        <div className={styles.avatarContainer}>
          <div className={styles.cartContainer}>
            {ctx.finalCount > 0 && (
              <div className={styles.count}>
                {ctx.finalCount}
              </div>
            )}
            <svg
              className={styles.cartIcon}
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={ctx.toggleCart}
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className={styles.avatar}
          />
        </div>
      </div>
      <hr className={styles.underline} />
      {ctx.showCart && <Cart />}
    </header>
  );
};

export default Header;

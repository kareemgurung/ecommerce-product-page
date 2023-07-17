import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(prevState => !prevState)
  return (
    <header>
      <nav>
        <div className={styles.icon} onClick={handleClick}>
          {click ? (
            <img src="/images/icon-close.svg" alt="close icon" width="16" height="15"/>
          ) : (
            <img src="/images/icon-menu.svg" alt="menu icon" width="16" height="15"/>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Header;

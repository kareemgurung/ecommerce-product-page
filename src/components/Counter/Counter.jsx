import { useContext } from "react";
import styles from "./counter.module.css";
import CartContext from "../../context/CartContext";

const Counter = ({decreaseCount, increaseCount, productCount}) => {
  const ctx = useContext(CartContext);

  return (
    <div className={styles.container}>
      <svg
        width="12"
        height="4"
        xmlns="http://www.w3.org/2000/svg"
        onClick={ctx.decreaseCount}
      >
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
          fill="#FF7E1B"
        />
      </svg>
      <p>{ctx.productCount}</p>
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        onClick={ctx.increaseCount}
      >
        <path
          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
          id="b"
          fill="#FF7E1B"
        />
      </svg>
    </div>
  );
};

export default Counter;

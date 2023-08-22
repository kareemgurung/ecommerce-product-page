import styles from "./button.module.css";

const Button = ({ type, text, img, onClick }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      aria-label={text}
    >
      {img && <img src={img} alt="cart icon" />}
      {text}
    </button>
  );
};

export default Button;

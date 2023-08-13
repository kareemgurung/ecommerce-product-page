import styles from "./button.module.css";

const Button = ({ type, text, img }) => {
  return (
    <button className={styles.button} type={type}>
      {img && <img src={img} alt="" />}
      {text}
    </button>
  );
};

export default Button;

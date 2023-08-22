import styles from "./button.module.css";

const Button = ({ type, text, img, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} title={text}>
      {img && <img src={img} alt="" />}
      {text}
    </button>
  );
};

export default Button;

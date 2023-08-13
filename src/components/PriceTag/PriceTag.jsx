import styles from "./pricetag.module.css";

const PriceTag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.discountContainer}>
        <p className={styles.discountPrice}>$125.00</p>
        <div className={styles.discount}>
          <p>50%</p>
        </div>
      </div>
      <p className={styles.originalPrice}>$250.00</p>
    </div>
  );
};

export default PriceTag;

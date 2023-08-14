import styles from "./pricetag.module.css";

const PriceTag = ({discountPrice, discount, originalPrice}) => {
  return (
    <div className={styles.container}>
      <div className={styles.discountContainer}>
        <p className={styles.discountPrice}>${discountPrice}</p>
        <div className={styles.discount}>
          <p>{discount}%</p>
        </div>
      </div>
      <p className={styles.originalPrice}>${originalPrice}</p>
    </div>
  );
};

export default PriceTag;

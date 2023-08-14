import { useContext } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import PriceTag from "../PriceTag/PriceTag";
import styles from "./productPage.module.css";
import CartContext from "../../context/CartContext";

const ProductPage = () => {
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const thumbnails = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  const ctx = useContext(CartContext);

  return (
    <div className={styles.container}>
      <ImageCarousel images={images} thumbnails={thumbnails} />
      <div className={styles.descContainer}>
        <h3 className={styles.header}>Sneaker company</h3>
        <h2 className={styles.title}>Fall limited edition sneakers</h2>
        <p className={styles.desc}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <PriceTag discountPrice="125.00" discount="50" originalPrice="250.00"/>
        <div className={styles.quantityContainer}>
          <Counter
          />
          <Button
            text="Add to cart"
            type="submit"
            img="/images/icon-cart.svg"
            onClick={ctx.addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

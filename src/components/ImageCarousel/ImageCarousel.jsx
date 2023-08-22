import { useContext } from "react";
import styles from "./imageCarousel.module.css";
import Modal from "./Modal";
import ImageContext from "../../context/ImageContext";
import Images from "../../data";

const ImageCarousel = () => {
  const ctx = useContext(ImageContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image} onClick={ctx.openModal}>
          <img src={Images[ctx.currentIndex].image} alt="product" />

          <div className={styles.prev} onClick={ctx.prevImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
                stroke="#1D2026"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className={styles.next} onClick={ctx.nextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
                stroke="#1D2026"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        <div className={styles.thumbnails}>
          {Images.map((image) => (
            <img
              src={image.thumbnail}
              alt=""
              key={image.id}
              className={
                ctx.currentIndex === image.id
                  ? `${styles.thumbnail} ${styles.active}`
                  : `${styles.thumbnail}`
              }
              onClick={() => ctx.selectImage(image.id)}
            />
          ))}
        </div>
      </div>
      {ctx.modalState && <Modal />}
    </>
  );
};

export default ImageCarousel;

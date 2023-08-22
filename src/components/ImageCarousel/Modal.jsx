import { useContext } from "react";
import styles from "./modal.module.css";
import ImageContext from "../../context/ImageContext";
import Images from "../../data";

const Modal = () => {
  const ctx = useContext(ImageContext);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.closeButton} onClick={ctx.closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
              fill="#FF7E1B"
            />
          </svg>
        </div>
        <img src={Images[ctx.currentIndex].image} alt="product" />

        <div className={styles.prev} onClick={ctx.prevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="white" />
            <path d="M32 20L24 28L32 36" stroke="#1D2026" strokeWidth="3" />
          </svg>
        </div>
        <div className={styles.next} onClick={ctx.nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="white" />
            <path d="M24 20L32 28L24 36" stroke="#1D2026" strokeWidth="3" />
          </svg>
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
    </div>
  );
};

export default Modal;

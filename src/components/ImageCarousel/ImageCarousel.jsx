import { useState } from "react";
import styles from "./imageCarousel.module.css";

const ImageCarousel = ({ images, thumbnails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={images[currentIndex]} alt="product" />

        <div className={styles.prev} onClick={prevImage}>
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
        <div className={styles.next} onClick={nextImage}>
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
        {thumbnails.map(thumbnail => (
          <img src={thumbnail} alt="" key={thumbnail}/>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

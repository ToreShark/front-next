import { DefaultService } from "np/generated";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";

interface CarouselItem {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageSlider = () => {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    DefaultService.subcategoriesControllerFindAll()
      .then((subcategories) => {
        const items: CarouselItem[] = subcategories.map((subcategory) => ({
          imageUrl: subcategory.image,
          title: subcategory.name,
          description: subcategory.description,
        }));
        setCarouselItems(items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselItems]);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
      {carouselItems.map((item, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ display: index === activeSlide ? "block" : "none" }}
          >
            <img src={item.imageUrl} alt={item.title} className={styles.carouselItemImage} />
            <div className={styles.carouselItemContent}>
              <div className={styles.carouselItemTitle}>{item.title}</div>
              <div className={styles.carouselItemDescription}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

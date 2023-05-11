import { DefaultService } from "np/generated";
import { useEffect, useState } from "react";
import styles from "./card.module.css";
import { AiFillCar } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import Link from "next/link";

interface CardCategories {
  id: string;
  name: string;
  description: string;
  slug: string;
  //   icon: string;
}

const categoryIcons: Record<string, JSX.Element> = {
  "ugolovnoe-delo": <GoLaw size={30} />,
  "grazhdanskoe-delo": <GoLaw size={30} />,
  "administrativnoe-delo": <AiFillCar size={30} />,
};

const CardCategories = () => {
  const [categories, setCategories] = useState<CardCategories[]>([]);

  useEffect(() => {
    DefaultService.categoriesControllerFindAll()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <div key={category.id} className={styles.card}>
          <div className={styles.header}>
            {categoryIcons[category.slug] ?? null}
            <h2>{category.name}</h2>
          </div>
          <div>
            <p>{category.description}</p>
            <Link href={`/subcategories/${category.slug}`}>
              <button className={styles.buttonEnter}>Войти</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCategories;

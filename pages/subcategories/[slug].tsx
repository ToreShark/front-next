import Link from "next/link";
import { useRouter } from "next/router";
import { Category, Subcategory } from "np/generated";
import { DefaultService } from "np/generated/services/DefaultService";
import { useEffect, useState } from "react";
import styles from "./subcategory.module.css";

const SubcategoriesPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    if (typeof slug === "string") {
      DefaultService.categoriesControllerFindBySlug(slug)
        .then((category: Category) => {
          if (category && category.subcategories) {
            setSubcategories(category.subcategories);
            console.log("subcategories", subcategories);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [slug]);

  return (
    <div className={styles.grid}>
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className={styles.card}>
          <div className={styles.header}>
            <h4>{subcategory.name}</h4>
          </div>
          <div>
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className={styles.imgsub}
            />
            <p>{subcategory.description}</p>
            <Link href={`/subcategoriescontent/${subcategory.slug}`}>
              <button className={styles.buttonEnter}>Войти</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubcategoriesPage;

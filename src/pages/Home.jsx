import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { ApiFetch } from "../api/apifetch";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await ApiFetch("/products");
      console.log(data);
      setProducts(data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Featured Products</h1>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <img className={styles.productImage} src={product.image} alt="" />
            </div>
            <h2 className={styles.productName}>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <Link to={`/product/${product.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

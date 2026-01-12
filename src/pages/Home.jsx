import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 99.99 },
  { id: 2, name: 'Smart Watch', price: 199.99 },
  { id: 3, name: 'Running Shoes', price: 79.99 },
  { id: 4, name: 'Laptop Backpack', price: 49.99 },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imagePlaceholder}></div>
            <h2 className={styles.productName}>{product.name}</h2>
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

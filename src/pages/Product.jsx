import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = () => {
  const { id } = useParams();
  
  // Mock data fetching based on ID
  const product = {
    id,
    name: 'Sample Product',
    price: 99.99,
    description: 'This is a great product with amazing features. It is built to last and provides excellent value for money.'
  };

  const handleAddToCart = () => {
    alert(`Added product ${id} to cart!`);
    // In a real app, we would use context here
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Back to Home</Link>
      <div className={styles.wrapper}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.details}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <button onClick={handleAddToCart} className={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  // Mock cart state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1 },
    { id: 3, name: 'Running Shoes', price: 79.99, quantity: 1 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>
        <p className={styles.empty}>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.cartList}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div>
              <p className={styles.itemName}>{item.name}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        Total: ${total.toFixed(2)}
      </div>
      <button className={styles.checkoutButton} onClick={() => alert('Proceeding to checkout...')}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

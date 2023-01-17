import { useEffect, useState } from 'react';
import styles from './Cart.module.css';
const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => {
      return (total += item.jumlah * item.harga);
    });
    setPrice(total);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  useEffect(() => {
    handlePrice();
  });

  const handleTambah = (item, d) => {
    let ind = 0;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const newCart = [...cart];

    newCart[ind].jumlah += d;

    if (newCart[ind].jumlah === 0) {
      newCart[ind].jumlah = 1;
      newCart.splice(ind, 1);
    }

    setCart([...newCart]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.cartWrap}>
        {cart.map((item, index) => {
          return (
            <>
              <div key={item.id} className={styles.cartItems}>
                <div className={styles.imageBox}>
                  <img src={item.img} style={{ height: '120px' }} alt="foto" />
                </div>
                <div className={styles.about}>
                  <h1 className={styles.title}>{item.nama}</h1>
                  <h3 className={styles.subtitle}>250ml</h3>
                </div>
                <div className={styles.counter}>
                  <button className={styles.btn} onClick={() => handleTambah(item, +1)}>
                    +
                  </button>
                  <div className={styles.count}>{cart[index].jumlah}</div>
                  <button className={styles.btn} onClick={() => handleTambah(item, -1)}>
                    -
                  </button>
                </div>
                <div className={styles.prices}>
                  <div className={styles.amount}>{cart[index].harga * cart[index].jumlah}</div>
                  <button className={styles.remove} onClick={() => handleRemove(item.id)}>
                    <u>Remove</u>
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <hr />
        <div className={styles.checkout}>
          <div className={styles.total}>
            <div>
              <div className={styles.subtotal}>Sub-Total</div>
              <div className={styles.items}>{`${cart.length} items`}</div>
            </div>
            <div className={styles.totalAmount}>{price}</div>
          </div>
          <button className={styles.button}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

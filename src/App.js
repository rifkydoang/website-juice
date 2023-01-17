import Navbar from './components/Navbar';
import Content from './components/Content';
import Cart from './components/Cart';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (e.id === product.id) isPresent = true;
    });

    

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 0);
      return;
    }

    setCart([...cart, e]);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? <Content handleSubmit={handleSubmit} /> : <Cart cart={cart} setCart={setCart} />}
      {warning && alert('Item sudah dimasukkan kedalam keranjang')}
    </React.Fragment>
  );
}

export default App;

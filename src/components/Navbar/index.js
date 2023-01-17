import styles from './Navbar.module.css';
import shoping from '../../assets/shoping-removebg-preview.png';

const Navbar = ({ size, setShow }) => {
  return (
    <header>
      <nav>
        <a id={styles['title']} href="#" onClick={() => setShow(true)}>
          <h1>Keyla Juice</h1>
        </a>
        <div className={styles.loginCart}>
          <a href="#">Login</a>
          <div className={styles.garis}></div>
          <a href="#">
            <img src={shoping} alt="foto" width="20" onClick={() => setShow(false)} />
          </a>
          {size <= 0 ? <span>kosong</span> : <span>{size}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

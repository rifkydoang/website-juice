import styles from './Content.module.css';
import Section1 from '../Section1';
import Section2 from '../Section2';
import React from 'react';
import juice from '../../data';

const Content = ({ handleSubmit }) => {
  return (
    <React.Fragment>
      <Section1 />
      <Section2 />
      <div className={styles.section3}>
        <div className={styles.contentContainer}>
          {juice.map((item, index) => {
            return (
              <div key={index} className={styles.content}>
                <div className={styles.image}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.description}>
                  <h1>{item.nama}</h1>
                  <h2>RP. {item.harga}</h2>
                  <p className={styles.desc}>{item.deskripsi}</p>
                  <div className={styles.buttons}>
                    <button onClick={() => handleSubmit(item)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;

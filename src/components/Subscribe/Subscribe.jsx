import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <p className={styles.mainHeading}>Subscribe Our Newsletter</p>
        <div className={styles.secondWrapper}>
          <input type="text" placeholder="Name:" />
          <input type="text" placeholder="Enter Your Emial" />
          <button className={styles.sendButton}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

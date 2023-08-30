import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/HeroImage.svg";
import { ReactComponent as MessageIcon } from "../../assets/MessageIcon.svg";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.header}>You don’t have to Fight them Alone.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className={styles.input}>
          <MessageIcon className={styles.message} />
          <input
            id="email"
            className={styles.input1}
            type="email"
            placeholder="Enter your email address"
            sx={{
              height: "30px",
              borderRadius: "10px",
              backgroundColor: "black",
            }}
          />
          <button
            id="btnEmail"
            className={styles.emailButton}
            onClick={(e) => console.log(e.target)}
          >
            Let’s Talk
          </button>
        </div>
      </div>

      <div className={styles.img}>
        <img
          src={HeroImage}
          alt="HeroImg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;

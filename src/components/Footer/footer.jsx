import React from "react";
// import Footer from "../../assets/Footer.svg";
import styles from "./footer.module.css";
import Logo from "../logo/Logo";
import Instagram from "../../assets/FooterIcons/Instagram.svg";
import Facebook from "../../assets/FooterIcons/facebook.svg";
import Twitter from "../../assets/FooterIcons/twitter.svg";
import Pinterest from "../../assets/FooterIcons/Pinterest.svg";

const footer = () => {
  //   return <img src={Footer} alt="footer" width={2000} />;
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Logo />
        <div className={styles.menuWrapper}>
          <p>Home</p>
          <p>Attroneys</p>
          <p>Practice areas</p>
          <p>About us</p>
        </div>
        <div className={styles.iconsWrapper}>
          <img src={Instagram} alt="InstagramIcon" />
          <img src={Facebook} alt="FacebookIcon" />
          <img src={Twitter} alt="TwitterIcon" />
          <img src={Pinterest} alt=" PinterestIcon" />
        </div>
      </div>
      <div className={styles.wrapper2}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default footer;

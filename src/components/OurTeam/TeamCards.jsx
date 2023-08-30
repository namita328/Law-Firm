import React from "react";
import styles from "./TeamCard.module.css";
import Cesforila from "../../assets/Team/Cesforila.png";
import Colleen from "../../assets/Team/Colleen.png";
import DanialDef from "../../assets/Team/DanialDef.png";
import Haldone from "../../assets/Team/Haldone.png";
import NikJeo from "../../assets/Team/NikJeo.png";
import Sanfole from "../../assets/Team/Sanfole.png";

const TeamCards = () => {
  const cardsData = [
    {
      icon: (
        <img
          src={DanialDef}
          alt="DanialDef"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 1,
      main_heading: "Danial Def",
      sub_heading: "301 Cases",
    },
    {
      icon: (
        <img
          src={Sanfole}
          alt="Sanfole"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 2,
      main_heading: "Sanfole",
      sub_heading: "850 Cases",
    },
    {
      icon: (
        <img
          src={Cesforila}
          alt="Cesforila"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 3,
      main_heading: "Cesforila",
      sub_heading: "470 Cases",
    },
    {
      icon: (
        <img
          src={Colleen}
          alt="Colleen"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 4,
      main_heading: "Colleen",
      sub_heading: "180 Cases",
    },
    {
      icon: (
        <img
          src={Haldone}
          alt="Haldone"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 5,
      main_heading: "Haldone",
      sub_heading: "212 Cases",
    },
    {
      icon: (
        <img
          src={NikJeo}
          alt="NikJeo"
          style={{ padding: "5% 5% 0 5%", width: "100%" }}
        />
      ),
      id: 6,
      main_heading: "Nik Jeo",
      sub_heading: "350 Cases",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Our Team</div>
      <div className={styles.wrapper1}>
        {cardsData.map((cardData) => (
          <div className={styles.card} key={cardData.id}>
            <div>{cardData.icon}</div>
            <div className={styles.textContent}>
              <p className={styles.mainHeading}>{cardData.main_heading}</p>
              <p className={styles.sub_heading}>{cardData.sub_heading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;

import React from "react";
import styles from "./ClientCard.module.css";
import JaneCooper from "../../assets/Clients/JaneCooper.png";
import DevonLane from "../../assets/Clients/DevonLane.png";
import RobertFox from "../../assets/Clients/RobertFox.png";

const ClientCard = () => {
  const cardDataObj = {
    sub_heading: "Ceo of Hunt",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer",
  };
  const cardsData = [
    {
      ...cardDataObj,
      icon: (
        <img
          src={JaneCooper}
          alt="JaneCooper"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      id: 1,
      main_heading: "Jane Cooper",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={DevonLane}
          alt="DevonLane"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      id: 2,
      main_heading: "Devon Lane",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={RobertFox}
          alt="RobertFox"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      id: 3,
      main_heading: "Robert Fox",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>What says our happy clients?</div>
      <div className={styles.wrapper1}>
      {cardsData.map((cardData) => (
        <div className={styles.card} key={cardData.id}>
          <div className={styles.circleFOrDP}>{cardData.icon}</div>
          <p className={styles.mainHeading}>{cardData.main_heading}</p>
          <p className={styles.sub_heading}>{cardData.sub_heading}</p>
          <p className={styles.content}>{cardData.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ClientCard;

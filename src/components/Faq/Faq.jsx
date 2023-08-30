import React from "react";
import styles from "./Faq.module.css";
import Accordian from "./Accordian";

const Faq = () => {
  const AccordianData = [
    {
      key: "first",
      value: {
        title: "How much is my case worth?",
        content: "Default Example of Law Firn NewsLetter",
      },
    },
    {
      key: "second",
      value: {
        title: "What should I do right after car accidect",
        content: "Default Example of Law Firn NewsLetter",
      },
    },
    {
      key: "third",
      value: {
        title: "How much is my case worth?",
        content: "Default Example of Law Firn NewsLetter",
      },
    },
  ];
  return (
    <div className={styles.MainWrapper}>
      <p className={styles.mainHeading}>FAQ</p>

      <div className={styles.wrapper}>
        <div>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint
          </p>
        </div>
        <div style={{ width: "45%" }}>
          <p className={styles.contentHeading}>
            Do I need a personal injury report?
          </p>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <Accordian data={AccordianData} />
        </div>
      </div>
    </div>
  );
};

export default Faq;

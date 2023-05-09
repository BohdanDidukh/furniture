import React, { FC } from "react";

import background1 from "../../assets/images/background/background1.png";
import background2 from "../../assets/images/background/background2.png";
import background3 from "../../assets/images/background/background3.png";

import styles from "./SofaChangeColor.module.scss";

interface SofaChangeColorProps {
  onClick: (background: string) => void;
}

const SofaChangeColor: FC<SofaChangeColorProps> = ({ onClick }) => {
  function handleBackground(value: string) {
    return () => {
      onClick(value);
    };
    
  }
  return (
    <div className={styles.SofaChangeColor}>
      <button
        className={styles.SofaChangeColor__button}
        onClick={handleBackground(background1)}
        style={{ backgroundColor: "#E58411" }}
      ></button>
      <button
        className={styles.SofaChangeColor__button}
        onClick={handleBackground(background2)}
        style={{ backgroundColor: "#002992" }}
      ></button>
      <button
        className={styles.SofaChangeColor__button}
        onClick={handleBackground(background3)}
        style={{ backgroundColor: "#670022" }}
      ></button>
    </div>
  );
};
export default SofaChangeColor;

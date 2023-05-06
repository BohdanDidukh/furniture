import React, { FC } from "react";

import experience from "../../assets/images/experience1.png";

import styles from "./ExperiencePhoto.module.scss";

interface ExperiencePhotoProps {}

const ExperiencePhoto: FC<ExperiencePhotoProps> = () => (
  <div className={styles.ExperiencePhoto}>
    <img src={experience} alt="furniture"></img>
    <div className={styles.ExperiencePhoto__elements}></div>
  </div>
);

export default ExperiencePhoto;

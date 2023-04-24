import React, { FC } from "react";

import ExperiencePhoto from "../ExperiencePhoto/ExperiencePhoto";
import AdvantagesInfo from "../AdvantagesInfo/AdvantagesInfo";

import styles from "./Experience.module.scss";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => (
  <div className={styles.Experience}>
    <ExperiencePhoto></ExperiencePhoto>
    <AdvantagesInfo
      subtitle="Experiences"
      title="We provide you the best experience"
      text="You don’t have to worry about the result 
      because all of these interiors are made by people 
      who are professionals in their fields with an 
      elegant and lucurious style and with premium quality materials"
    ></AdvantagesInfo>
  </div>
);

export default Experience;

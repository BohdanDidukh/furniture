import React, { FC } from "react";

import MoreLink from "../MoreLink/MoreLink";
import Title from "../common/Title/Title";
import Subtitle from "../common/Subtitle/Subtitle";

import styles from "./AdvantagesInfo.module.scss";

interface AdvantagesInfoProps {
  subtitle: string;
  title: string;
  text: string;
}

const AdvantagesInfo: FC<AdvantagesInfoProps> = ({subtitle,title,text}) => (
  <div className={styles.AdvantagesInfo}>
    <div className={styles.AdvantagesInfo__subtitle}>
      <Subtitle label={subtitle} />
    </div>
    <div className={styles.AdvantagesInfo__title}>
      <Title label={title} />
    </div>
    <p className={styles.AdvantagesInfo__text}>
      {text}
    </p>
    <MoreLink label="More Info" link=""></MoreLink>
  </div>
);

export default AdvantagesInfo;

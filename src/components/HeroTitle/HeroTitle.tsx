import React, { FC } from "react";

import styles from "./HeroTitle.module.scss";

interface HeroTitleProps {
  label: string;
}

const HeroTitle: FC<HeroTitleProps> = ({label}) => (
  <h1 className={styles.HeroTitle}>
    {label}
  </h1>
);

export default HeroTitle;

import React, { FC } from "react";

import styles from "./HeroSubtitle.module.scss";

interface HeroSubtitleProps {
  label: string;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({label}) => (
  <h4 className={styles.HeroSubtitle}>
    {label}
  </h4>
);

export default HeroSubtitle;

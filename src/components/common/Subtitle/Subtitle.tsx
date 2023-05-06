import React, { FC } from "react";

import styles from "./Subtitle.module.scss";

interface SubtitleProps {
  label: string;
}

const Subtitle: FC<SubtitleProps> = ({label}) => (
  <div className={styles.Subtitle}>
    {label}
  </div>
);

export default Subtitle;

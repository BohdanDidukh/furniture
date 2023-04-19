import React, { FC } from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  label: string;
}

const Title: FC<TitleProps> = ({ label }) => {
  return <h1 className={styles.Title}>{label}</h1>;
};
export default Title;

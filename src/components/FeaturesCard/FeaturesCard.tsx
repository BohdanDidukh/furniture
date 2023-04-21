import React, { FC } from "react";

import MoreLink from "../MoreLink/MoreLink";

import styles from "./FeaturesCard.module.scss";

interface FeaturesCardProps {
  title: string;
  text: string;
  link: string;
}

const FeaturesCard: FC<FeaturesCardProps> = ({ title, text, link }) => (
  <div className={styles.FeaturesCard}>
    <h4 className={styles.FeaturesCard__title}>{title}</h4>
    <p className={styles.FeaturesCard__text}>{text}</p>
    <MoreLink label={"More Info"} link={link}></MoreLink>
  </div>
);

export default FeaturesCard;

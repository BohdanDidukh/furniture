import React, { FC } from "react";

import Container from "../common/Container/Container";
import Title from "../common/Title/Title";
import FeaturesList from "../FeaturesList/FeaturesList";

import styles from "./Features.module.scss";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = () => (
  <section className={styles.Features}>
    <Container>
      <div className={styles.Features__content}>
        <div className={styles.Features__title}>
          <Title label="Why Choosing Us"></Title>
        </div>
        <FeaturesList></FeaturesList>
      </div>
    </Container>
  </section>
);

export default Features;

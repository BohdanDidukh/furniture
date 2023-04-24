import React, { FC } from "react";

import Container from "../common/Container/Container";
import Material from "../Material/Material";
import Experience from "../Experience/Experience";

import styles from "./Advantages.module.scss";

interface AdvantagesProps {}

const Advantages: FC<AdvantagesProps> = () => (
  <section className={styles.Advantages}>
    <Container>
      <Experience></Experience>
      <Material></Material>
    </Container>
  </section>
);

export default Advantages;

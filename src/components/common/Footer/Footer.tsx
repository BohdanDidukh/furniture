import React, { FC } from "react";

import Container from "../Container/Container";
import FooterAdvantages from "../../FooterAdvantages/FooterAdvantages";
import FooterNavigation from "../../FooterNavigation/FooterNavigation";
import FooterPrivacy from "../../FooterPrivacy/FooterPrivacy";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <section className={styles.Footer}>
    <Container>
      <div className={styles.Footer__body}>
        <FooterAdvantages></FooterAdvantages>
        <FooterNavigation></FooterNavigation>
      </div>
      <FooterPrivacy></FooterPrivacy>
    </Container>
  </section>
);

export default Footer;

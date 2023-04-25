import React, { FC } from "react";

import Logo from "../common/Logo/Logo";

import styles from "./FooterAdvantages.module.scss";

interface FooterAdvantagesProps {}

const FooterAdvantages: FC<FooterAdvantagesProps> = () => (
  <div className={styles.FooterAdvantages}>
    <Logo isBlack={true}></Logo>
    <p className={styles.FooterAdvantages__text}>
      The advantage of hiring a workspace with us is that givees you comfortable
      service and all-around facilities.
    </p>
  </div>
);

export default FooterAdvantages;

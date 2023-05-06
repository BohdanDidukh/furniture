import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./FooterPrivacy.module.scss";

interface FooterPrivacyProps {}

const FooterPrivacy: FC<FooterPrivacyProps> = () => (
  <div className={styles.FooterPrivacy}>
    <p className={styles.FooterPrivacy__copyright}> Copyright &copy; 2021 </p>
    <div className={styles.FooterPrivacy__policy}>
      <Link to={""}>Terms & Conditions</Link>
      <Link to={""}>Privacy Policy</Link>
    </div>
  </div>
);

export default FooterPrivacy;

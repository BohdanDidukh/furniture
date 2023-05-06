import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

interface LogoProps {
  isBlack: boolean;
}

const Logo: FC<LogoProps> = ({ isBlack }) => {
  const logoStyle = isBlack ? styles.black : styles.white;

  return <Link to="/" className={`${styles.Logo} ${logoStyle}`}>Panto</Link>;
};

export default Logo;

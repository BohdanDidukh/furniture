import React, { FC } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../../Navigation/Navigation";
import ShopingCart from "../../ShopingCart/ShopingCart";
import MenuButton from "../../MenuButton/MenuButton";

import styles from "./Header.module.scss";

interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__content}>
        <Logo isBlack={false}></Logo>
        <Navigation />
        <div className={styles.Header__buttons}>
          <ShopingCart />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

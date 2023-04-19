import React, { FC} from "react";

import Logo from "../Logo/Logo";
import Navigation from "../../Navigation/Navigation";
import ShopingCart from "../../ShopingCart/ShopingCart";
import MenuButton from "../../MenuButton/MenuButton";
import Container from "../Container/Container";

import styles from "./Header.module.scss";

interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Header__content}>
          <Logo isBlack={false}></Logo>
          <Navigation />
          <div className={styles.Header__buttons}>
            <MenuButton />
            <ShopingCart />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import React, { FC } from "react";
import { useSelector } from "react-redux";

import NavMenu from "../NavMenu/NavMenu";

import { RootState } from "../../reducers/rootReducer";

import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const isMenuOpen = useSelector(
    (state: unknown) => (state as RootState).menu.isOpen
  );

  return (
    <nav
      className={
        isMenuOpen
        ? `${styles.Navigation} ${styles["Menu-open"]}`
        : `${styles.Navigation} ${styles["Menu-close"]}`
      }
    >
      <NavMenu></NavMenu>
    </nav>
  );
};

export default Navigation;

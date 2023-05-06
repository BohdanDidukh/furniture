import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import NavMenu from "../NavMenu/NavMenu";

import { RootState } from "../../store/rootReducer";

import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const isMenuOpen = useSelector(
    (state: unknown) => (state as RootState).menu.isOpen
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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

import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../../store/menuSlice";
import { RootState } from "../../store/rootReducer";

import styles from "./MenuButton.module.scss";

interface MenuButtonProps {}

const MenuButton: FC<MenuButtonProps> = ({}) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: unknown) => (state as RootState).menu.isOpen
  );

  const handleMenuButtonClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      type="button"
      className={
        isMenuOpen
          ? `${styles.MenuButton} ${styles["Menu-open"]}`
          : `${styles.MenuButton} ${styles["Menu-close"]}`
      }
      onClick={handleMenuButtonClick}
    >
      <span></span>
    </button>
  );
};
export default MenuButton;

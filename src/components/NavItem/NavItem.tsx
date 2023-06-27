import React, { FC, MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { scrollToSection } from "../../utils/scrollUtils";
import { toggleMenu } from "../../store/slices/menuSlice";

import styles from "./NavItem.module.scss";
interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ link, label }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: unknown) => (state as RootState).menu.isOpen
  );
  const handleClick =
    (link: string): MouseEventHandler<HTMLAnchorElement> =>
      (event) => {
        event.preventDefault();
        if (isMenuOpen) {
          dispatch(toggleMenu());
        }
        scrollToSection(link);
      };

  return (
    <li className={styles.NavItem}>
      <a href={link} onClick={handleClick(link)}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;

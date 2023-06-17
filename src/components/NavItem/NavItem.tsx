import React, { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

import { scrollToSection } from "../../utils/scrollUtils";
import { toggleMenu } from "../../store/slices/menuSlice";

import styles from "./NavItem.module.scss";
interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ link, label }) => {
  const dispatch = useDispatch();
  const handleClick =
    (link: string): MouseEventHandler<HTMLAnchorElement> =>
      (event) => {
        event.preventDefault();
        dispatch(toggleMenu());
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

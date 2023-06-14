import React, { FC, MouseEventHandler } from "react";

import { scrollToSection } from "../../utils/scrollUtils";

import styles from "./NavItem.module.scss";
interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ link, label }) => {
  const handleClick =
    ( link: string): MouseEventHandler<HTMLAnchorElement> =>
      (event) => {
        event.preventDefault();
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

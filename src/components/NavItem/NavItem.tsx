import React, { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./NavItem.module.scss";

interface NavItemProps {
  link: string;
  label: string;
}


const NavItem: FC<NavItemProps> = ({ link, label }: NavItemProps) => (
  <li className={styles.NavItem}>
    <Link to={link}>{label}</Link>
  </li>
);

export default NavItem;

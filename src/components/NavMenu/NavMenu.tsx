import React, { FC } from "react";

import NavItem from "../NavItem/NavItem";
import DropMenu from "../DropMenu/DropMenu";

import styles from "./NavMenu.module.scss";

interface NavMenuProps {}

const NavMenu: FC<NavMenuProps> = () => {
  const items = [
    ["Chair", "#"],
    ["Beds", "#"],
    ["Sofa", "#"],
    ["Lamps", "#"],
  ];

  return (
    <ul className={styles.NavMenu}>
      <DropMenu title="Furniture" items={items}></DropMenu>
      <NavItem link="#" label="Shop"></NavItem>
      <NavItem link="#" label="About us"></NavItem>
      <NavItem link="#" label="Contact"></NavItem>
    </ul>
  );
};

export default NavMenu;

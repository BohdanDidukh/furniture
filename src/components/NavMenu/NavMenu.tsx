import React, { FC } from "react";

import NavItem from "../NavItem/NavItem";
import DropMenu from "../DropMenu/DropMenu";

import styles from "./NavMenu.module.scss";

interface NavMenuProps {}

const NavMenu: FC<NavMenuProps> = () => {
  const items = [
    ["Chairs", "#shop", "Chair"],
    ["Beds", "#shop", "Beds"],
    ["Lamps", "#shop", "Lamps"],
    ["Sofa", "#shop", "Sofa"],
  ];

  return (
    <ul className={styles.NavMenu}>
      <DropMenu title="Furniture" items={items}></DropMenu>
      <NavItem link="#shop" label="Shop"></NavItem>
      <NavItem link="#about" label="About us" />
      <NavItem link="#contact" label="Contact" />
    </ul>
  );
};
export default NavMenu;

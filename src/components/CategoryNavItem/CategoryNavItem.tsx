import React, { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./CategoryNavItem.module.scss";

interface CategoryNavItemProps {
  link: string;
  label: string;
  icon?: string;
}

const CategoryNavItem: FC<CategoryNavItemProps> = ({ link, label, icon }) => {
  if (icon) {
    return (
      <div className={styles.CategoryNavItem}>
        <img className={styles.CategoryNavItem__icon} src={icon} alt="icon" />
        <Link to={link}>{label}</Link>
      </div>
    );
  } else {
    return (
      <div className={styles.CategoryNavItem}>
        <Link to={link}>{label}</Link>
      </div>
    );
  }
};
export default CategoryNavItem;

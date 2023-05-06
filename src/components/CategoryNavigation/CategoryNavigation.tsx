import React, { FC} from "react";

import CategoryNavItem from "../CategoryNavItem/CategoryNavItem";

import styles from "./CategoryNavigation.module.scss";

interface LinkItem {
  text: string;
  icon?: string;
}

interface CategoryNavigationProps {
  children: LinkItem[];
  title: string;
}

const CategoryNavigation: FC<CategoryNavigationProps> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.CategoryNavigation}>
      <h5 className={styles.CategoryNavigation__title}>{title}</h5>
      <ul className={styles.CategoryNavigation__body}>
        {children.map((item) => (
          <CategoryNavItem
            link="#"
            label={item.text}
            icon={item.icon}
          ></CategoryNavItem>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;

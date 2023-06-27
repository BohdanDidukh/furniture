import React, { FC, MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { toggleMenu } from "../../store/slices/menuSlice";
import { scrollToSection } from "../../utils/scrollUtils";
import { setActiveFilter } from "../../store/slices/productSlice";

import styles from "./DropMenu.module.scss";

interface DropMenuProps {
  title: string;
  items: Array<Array<string>>;
}

const DropMenu: FC<DropMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: unknown) => (state as RootState).menu.isOpen
  );

  const handleClick =
    (category: string, link: string): MouseEventHandler<HTMLAnchorElement> =>
      (event) => {
        event.preventDefault();
        dispatch(setActiveFilter(category));
        if (isMenuOpen) {
          dispatch(toggleMenu());
        }
        scrollToSection(link);
      };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.DropMenu} ${isOpen ? styles.isOpen : ""}`}
      onClick={handleToggle}
    >
      <Link to="" className={styles.DropMenu__toggle}>
        {title}
        <svg
          width="10"
          height="7"
          className={styles.DropMenu__icon}
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.95911e-05 1.49554C-0.000313759 1.62361 0.0232353 1.75016
               0.0689659 1.86588C0.114697 1.98159 0.181446 2.08354 0.264311 
               2.16423L4.54962 6.30498C4.67742 6.43107 4.83772 6.5 5.00315 
               6.5C5.16858 6.5 5.32888 6.43107 5.45668 6.30498L9.74199 2.01849C9.88784 
               1.87297 9.97957 1.66387 9.99698 1.43718C10.0144 1.21048 9.95607 
               0.984775 9.83484 0.8097C9.71361 0.634626 9.5394 0.524529 9.35054 
               0.503628C9.16168 0.482727 8.97364 0.552735 8.82779 0.698252L4.99958 
               4.53037L1.17137 0.826847C1.06653 0.722013 0.93887 0.655421 0.803492 
               0.63495C0.668113 0.614478 0.53068 0.640983 0.407457 0.711329C0.284235 
               0.781675 0.180379 0.892918 0.108179 1.03189C0.0359783 1.17087 
               -0.00154495 1.33177 4.95911e-05 1.49554Z"
            fill="white"
          />
        </svg>
      </Link>

      <ul className={styles.DropMenu__items}>
        {items.map(([item, link], index) => (
          <li className={styles.DropMenu__item} key={index}>
            <a href={link} onClick={handleClick(item, link)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;

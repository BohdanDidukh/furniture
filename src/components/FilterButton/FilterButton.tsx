import React, { FC } from "react";

import styles from "./FilterButton.module.scss";

interface FilterButtonProps {
  category: string;
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({category,onClick}) => {
  return (
    <button
      key={category}
      onClick={onClick}
      className={styles.FilterButton}
    >
      {category}
    </button>
  );
};

export default FilterButton;

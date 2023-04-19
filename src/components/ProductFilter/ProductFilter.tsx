import React, { FC, useState } from "react";

import FilterButton from "../FilterButton/FilterButton";

import styles from "./ProductFilte.module.scss";

interface ProductFilterProps {}

const ProductFilter: FC<ProductFilterProps> = () => {
  const filters = [
    { category: "Chair", position: "0 " },
    { category: "Lamp", position: "25%" },
    { category: "Bed", position: "50%" },
    { category: "Sofa", position: "75%" },
  ];
  const [activeFilter, setActiveFilter] = useState<string>("Chair");

  const handleFilterClick = (name: string) => {
    setActiveFilter(name);
  };

  return (
    <div className={styles.ProductFilter}>
      <div className={styles.ProductFilter__wrapper}>
        <div className={styles.ProductFilter__slider}>
          <div
            className={styles.ProductFilter__background}
            style={{
              left:
                activeFilter === "Chair"
                  ? "0"
                  : filters.find((filter) => filter.category === activeFilter)
                      ?.position,
            }}
          />
        </div>
        <ul className={styles.ProductFilter__nav}>
          {filters.map((button, index) => (
            <li className={styles.ProductFilter__item} key={index}>
              <FilterButton
                category={button.category}
                onClick={() => handleFilterClick(button.category)}
              ></FilterButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;

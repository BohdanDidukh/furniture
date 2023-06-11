import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveFilter } from "../../store/slices/productSlice";
import { RootState } from "../../store";
import FilterButton from "../FilterButton/FilterButton";

import styles from "./ProductFilte.module.scss";

interface ProductFilterProps {
}

const ProductFilter: FC<ProductFilterProps> = () => {
  const filters = useSelector((state: RootState) => state.product.filters);
  const activeFilter = useSelector(
    (state: RootState) => state.product.activeFilter
  );
  const dispatch = useDispatch();

  const handleFilterClick = (name: string) => {
    dispatch(setActiveFilter(name));
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

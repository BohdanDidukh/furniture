import React, { FC } from "react";

import MoreLink from "../MoreLink/MoreLink";

import cardViewAll from "../../assets/images/cardViewAll.png";

import styles from "./ProductCardMore.module.scss";


interface ProductCardMoreProps {}

const ProductCardMore: FC<ProductCardMoreProps> = () => (
  <div className={styles.ProductCardMore}>
    <img src={cardViewAll} className={styles.ProductCardMore__img} />
    <div className={styles.ProductCardMore__body}>
      <div className={styles.ProductCardMore__main}>
        <p className={styles.ProductCardMore__category}></p>
        <p className={styles.ProductCardMore__title}></p>
        <div className={styles.ProductCardMore__rating}></div>
      </div>
      <div className={styles.ProductCardMore__footer}>
        <MoreLink link="#" label="View All"></MoreLink>
      </div>
    </div>
  </div>
);

export default ProductCardMore;

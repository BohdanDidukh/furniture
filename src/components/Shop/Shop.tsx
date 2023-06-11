import React, { FC } from "react";

import Title from "../common/Title/Title";
import ProductFilter from "../ProductFilter/ProductFilter";
import Container from "../common/Container/Container";
import ProductSlider from "../ProductSlider/ProductSlider";
import MoreLink from "../MoreLink/MoreLink";

import styles from "./Shop.module.scss";

interface ShopProps {}

const Shop: FC<ShopProps> = () => {
  return (
    <section className={styles.Shop}>
      <Container>
        <div className={styles.Shop__title}>
          <Title label="Best Selling Product" />
        </div>
        <ProductFilter></ProductFilter>
        <ProductSlider></ProductSlider>
        <div className={styles.Shop__action}>
          <MoreLink link="#" label="View All"></MoreLink>
        </div>
      </Container>
    </section>
  );
};
export default Shop;

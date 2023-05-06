import React, { FC } from "react";

import Title from "../common/Title/Title";
import ProductFilter from "../ProductFilter/ProductFilter";
import Container from "../common/Container/Container";
import ProductSlider from "../ProductSlider/ProductSlider";
import MoreLink from "../MoreLink/MoreLink";

import chair1 from "../../assets/images/products/chair1.png";
import chair2 from "../../assets/images/products/chair2.png";
import chair3 from "../../assets/images/products/chair3.png";
import chair4 from "../../assets/images/products/chair4.png";
import chair5 from "../../assets/images/products/chair5.png";
import chair6 from "../../assets/images/products/chair6.png";
import chair7 from "../../assets/images/products/chair7.png";
import chair8 from "../../assets/images/products/chair8.png";

import styles from "./Shop.module.scss";

interface ShopProps {}

const Shop: FC<ShopProps> = () => {
  const items = [
    [
      {
        img: chair1,
        title: "Sakarias Armchair",
        category: "Chair",
        price: 392,
      },
    ],
    [
      {
        img: chair2,
        title: "Baltsar Chair",
        category: "Chair",
        price: 299,
      },
    ],
    [
      {
        img: chair3,
        title: "Anjay Chair",
        category: "Chair",
        price: 519,
      },
    ],
    [
      {
        img: chair4,
        title: "Nyantuy Chair",
        category: "Chair",
        price: 921,
      },
    ],
    [
      {
        img: chair5,
        title: "Sakarias Armchair",
        category: "Chair",
        price: 730,
      },
    ],
    [
      {
        img: chair6,
        title: "Anjay Chair",
        category: "Chair",
        price: 369,
      },
    ],
    [
      {
        img: chair7,
        title: "Baltsar Chair",
        category: "Chair",
        price: 250,
      },
    ],
    [
      {
        img: chair8,
        title: "Nyantuy Chair",
        category: "Chair",
        price: 155,
      },
    ],
  ];

  return (
    <section className={styles.Shop}>
      <Container>
        <div className={styles.Shop__title}>
          <Title label="Best Selling Product" />
        </div>
        <ProductFilter></ProductFilter>
        <ProductSlider items={items}></ProductSlider>
        <div className={styles.Shop__action}>
          <MoreLink link="#" label="View All"></MoreLink>
        </div>
      </Container>
    </section>
  );
};
export default Shop;

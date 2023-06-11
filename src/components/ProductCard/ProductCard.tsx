import React, { FC } from "react";

import { Product } from "../../interfaces/Product";
import RatingStar from "../RatingStar/RatingStar";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  show: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, show }) => {
  return (
    <div
      className={`${styles.ProductCard} ${show ? styles.fadeIn : ""}`}
      key={product.id}
    >
      <img alt="" src={product.image} className={styles.ProductCard__img} />
      <div className={styles.ProductCard__body}>
        <div className={styles.ProductCard__main}>
          <p className={styles.ProductCard__category}>
            {product.category.name}
          </p>
          <p className={styles.ProductCard__title}>{product.name}</p>
          <div className={styles.ProductCard__rating}>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
          </div>
        </div>
        <div className={styles.ProductCard__footer}>
          <p className={styles.ProductCard__price}>{product.price}</p>
          <button className={styles.ProductCard__button}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1342 10.2102C20.1342 9.44107 19.5107 8.81756
                 18.7415 8.81756H11.7782V1.85427C11.7782 1.08512 11.1547
                  0.461609 10.3856 0.461609C9.61643 0.461609 8.99291 1.08512
                   8.99291 1.85427V8.81756H2.02962C1.26048 8.81756 0.636963 
                   9.44107 0.636963 10.2102C0.636963 10.9794 1.26048 11.6029 
                   2.02962 11.6029H8.99291V18.5662C8.99291 19.3353 9.61643 
                   19.9588 10.3856 19.9588C11.1547 19.9588 11.7782 19.3353 
                   11.7782 18.5662V11.6029H18.7415C19.5107 11.6029 20.1342 
                   10.9794 20.1342 10.2102Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

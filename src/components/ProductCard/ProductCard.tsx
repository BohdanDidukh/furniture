import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import {
  addToCart,
  removeFromCart,
} from "../../store/slices/shoppingCartSlice";
import { Product } from "../../interfaces/Product";
import RatingStar from "../RatingStar/RatingStar";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  show: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, show }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) =>
    state.cart.cart.some((item) => item.id === product.id)
  );

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

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
          <button
            className={
              isInCart
                ? `${styles.ProductCard__button} ${styles["active"]}`
                : `${styles.ProductCard__button}`
            }
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

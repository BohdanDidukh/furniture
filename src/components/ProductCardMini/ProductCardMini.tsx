import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import {
  addToCart,
  removeFromCart,
} from "../../store/slices/shoppingCartSlice";
import { Product } from "../../interfaces/Product";

import styles from "./ProductCardMini.module.scss";

interface ProductCardMiniProps {
  product: Product;
  show: boolean;
}

const ProductCardMini: FC<ProductCardMiniProps> = ({ product, show }) => {
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
      className={`${styles.ProductCardMini} ${show ? styles.fadeIn : ""}`}
      key={product.id}
    >
      <div className={styles.ProductCardMini__info}>
        <img
          alt=""
          src={product.image}
          className={styles.ProductCardMini__img}
        />
        <div className={styles.ProductCardMini__body}>
          <p className={styles.ProductCardMini__category}>
            {product.category.name}
          </p>
          <p className={styles.ProductCardMini__title}>{product.name}</p>
        </div>
      </div>
      <div className={styles.ProductCardMini__action}>
        <p className={styles.ProductCardMini__price}>{product.price}</p>
        <button
          className={
            isInCart
              ? `${styles.ProductCardMini__button} ${styles["active"]}`
              : `${styles.ProductCardMini__button}`
          }
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
};

export default ProductCardMini;

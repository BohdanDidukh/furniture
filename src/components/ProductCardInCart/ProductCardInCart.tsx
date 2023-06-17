import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import {
  addToCart,
  removeFromCart,
} from "../../store/slices/shoppingCartSlice";
import { Product } from "../../interfaces/Product";

import styles from "./ProductCardInCart.module.scss";

interface ProductCardInCartProps {
  product: Product;
  show: boolean;
}

const ProductCardInCart: FC<ProductCardInCartProps> = ({ product, show }) => {
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
      className={`${styles.ProductCardInCart} ${show ? styles.fadeIn : ""}`}
      key={product.id}
    >
      <div className={styles.ProductCardInCart__info}>
        <img
          alt=""
          src={product.image}
          className={styles.ProductCardInCart__img}
        />
        <div className={styles.ProductCardInCart__body}>
          <p className={styles.ProductCardInCart__category}>
            {product.category.name}
          </p>
          <p className={styles.ProductCardInCart__title}>{product.name}</p>
        </div>
      </div>
      <div className={styles.ProductCardInCart__action}>
        <div className={`${styles.ProductCardInCart__body} ${styles.active}`}>
          <p className={styles.ProductCardInCart__category}>
            {product.category.name}
          </p>
          <p className={styles.ProductCardInCart__title}>{product.name}</p>
        </div>
        <p className={styles.ProductCardInCart__price}>{product.price}</p>
        <button
          className={
            isInCart
              ? `${styles.ProductCardInCart__button} ${styles["active"]}`
              : `${styles.ProductCardInCart__button}`
          }
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
};

export default ProductCardInCart;

import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import { toggleCart } from "../../store/slices/shoppingCartSlice";
import Title from "../common/Title/Title";
import ProductCardInCart from "../ProductCardInCart/ProductCardInCart";

import styles from "./ShoppingCartItems.module.scss";

interface ShoppingCartItemsProps {}

const ShoppingCartItems: FC<ShoppingCartItemsProps> = () => {
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const dispatch = useDispatch();
  const productsInCart = useSelector(
    (state: unknown) => (state as RootState).cart.cart
  );
  const isCartOpen = useSelector(
    (state: unknown) => (state as RootState).cart.isOpen
  );
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);
  useEffect(() => {
    setShowProduct(true);
  }, [productsInCart]);

  const handleButtonClick = () => {
    dispatch(toggleCart());
  };
  return (
    <div
      className={
        isCartOpen
          ? `${styles.ShoppingCartItems} ${styles["Cart-open"]}`
          : `${styles.ShoppingCartItems} ${styles["Cart-close"]}`
      }
    >
      <div className={styles.ShoppingCartItems__header}>
        <div className={styles.ShoppingCartItems__title}>
          <Title label="Your Cart" />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.ShoppingCartItems__button}
        ></button>
      </div>
      <div className={styles.ShoppingCartItems__scroll}>
        {productsInCart.length === 0 ? (
          <h2 className={styles.ShoppingCartItems__message}>
            There are no products in the cart
          </h2>
        ) : (
          <div className={styles.ShoppingCartItems__list}>
            {productsInCart.map((product) => (
              <ProductCardInCart
                key={product.id}
                product={product}
                show={showProduct}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartItems;

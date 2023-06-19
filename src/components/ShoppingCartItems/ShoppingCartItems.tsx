import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import {
  orderAmountCounter,
  toggleCart,
} from "../../store/slices/shoppingCartSlice";
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
  const orderAmount = useSelector(
    (state: unknown) => (state as RootState).cart.orderAmount
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
    const totalPrice = productsInCart.reduce(
      (total, product) => total + product.price,
      0
    );
    dispatch(orderAmountCounter(totalPrice));
  }, [productsInCart, dispatch]);
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
          className={styles.ShoppingCartItems__button_close}
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
      <div className={styles.ShoppingCartItems__footer}>
        <h2 className={styles.ShoppingCartItems__amount}>
          Total coast:{" "}
          <span>
            {orderAmount}
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.05158 14.4096V0.562195H4.93869V14.4096H4.05158ZM6.61012 4.9923C6.55963 4.5199 6.34687 4.15208 5.97184 3.88883C5.60041 3.62558 5.11719 3.49396 4.52218 3.49396C4.10387 3.49396 3.74506 3.55707 3.44576 3.68328C3.14645 3.8095 2.91746 3.98078 2.75879 4.19715C2.60013 4.41352 2.51899 4.66054 2.51538 4.93821C2.51538 5.169 2.56767 5.36914 2.67225 5.53862C2.78043 5.70811 2.92648 5.85236 3.11039 5.97136C3.2943 6.08675 3.49805 6.18412 3.72162 6.26345C3.9452 6.34279 4.17059 6.4095 4.39777 6.46359L5.43633 6.72323C5.85464 6.82059 6.25672 6.95222 6.64257 7.1181C7.03203 7.28398 7.38002 7.49313 7.68654 7.74556C7.99667 7.99799 8.24188 8.3027 8.42219 8.65971C8.60249 9.01671 8.69264 9.43502 8.69264 9.91463C8.69264 10.5637 8.52676 11.1353 8.195 11.6293C7.86324 12.1198 7.38363 12.5038 6.75616 12.7815C6.13231 13.0556 5.37683 13.1926 4.48973 13.1926C3.62787 13.1926 2.8796 13.0592 2.24492 12.7923C1.61386 12.5255 1.11982 12.136 0.762814 11.6239C0.409415 11.1119 0.218292 10.488 0.189443 9.75236H2.16379C2.19264 10.1382 2.31164 10.4592 2.52079 10.7152C2.72995 10.9712 3.00221 11.1623 3.33757 11.2886C3.67655 11.4148 4.05519 11.4779 4.4735 11.4779C4.90984 11.4779 5.29208 11.413 5.62024 11.2832C5.952 11.1497 6.21164 10.9658 6.39916 10.7314C6.58668 10.4934 6.68224 10.2157 6.68585 9.89841C6.68224 9.60992 6.5975 9.37192 6.43161 9.1844C6.26573 8.99327 6.03314 8.83461 5.73383 8.70839C5.43813 8.57857 5.09195 8.46318 4.69527 8.36221L3.43494 8.03766C2.52259 7.80326 1.80137 7.44806 1.27128 6.97205C0.744783 6.49244 0.481538 5.85596 0.481538 5.06262C0.481538 4.40991 0.658237 3.83834 1.01164 3.34791C1.36864 2.85748 1.85366 2.47704 2.4667 2.20658C3.07974 1.93252 3.77391 1.79548 4.54923 1.79548C5.33536 1.79548 6.02412 1.93252 6.61553 2.20658C7.21053 2.47704 7.67752 2.85388 8.0165 3.33709C8.35547 3.81671 8.53037 4.36844 8.54119 4.9923H6.61012Z"
                fill="#E58411"
              />
            </svg>
          </span>
        </h2>
        <div className={styles.ShoppingCartItems__action}>
          <button
            className={styles.ShoppingCartItems__continue}
            onClick={handleButtonClick}
          >
            Сontinue Shopping
          </button>
          <button
            className={
              productsInCart.length === 0
                ? `${styles.ShoppingCartItems__order} ${styles["disable"]}`
                : `${styles.ShoppingCartItems__order} ${styles["active"]}`
            }
          >
            To Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItems;

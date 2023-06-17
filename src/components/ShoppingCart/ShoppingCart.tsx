import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import { toggleCart } from "../../store/slices/shoppingCartSlice";
import ShoppingCartItems from "../ShoppingCartItems/ShoppingCartItems";

import styles from "./ShoppingCart.module.scss";

interface ShoppingCartProps {}

const ShoppingCart: FC<ShoppingCartProps> = () => {
  const dispatch = useDispatch();
  const cartSize = useSelector(
    (state: unknown) => (state as RootState).cart.cart.length
  );

  const handleButtonClick = () => {
    dispatch(toggleCart());
  };
  return (
    <div className={styles.ShoppingCart}>
      <button
        type="button"
        className={styles.ShoppingCart__button}
        onClick={handleButtonClick}
      >
        <p className={styles.ShoppingCart__counter}>{cartSize}</p>
        <svg
          className={styles.ShoppingCart__icon}
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.492188 0.12493C0.25 0.242117 0 0.632742 0 0.890555C0 1.14056 0.226562 1.55462 0.4375 1.69524C0.632812 
      1.82024 0.890625 1.84368 2.69531 1.87493C4.60938 1.91399 4.74219 1.92181 5.05469 2.09368C5.5 2.32806 5.89844 
      2.74212 6.11719 3.18743C6.21875 3.39056 7.61719 7.52337 9.21875 12.3749L12.1406 21.1874L12 21.5546C11.4297 
      23.039 11.4531 22.9609 11.4453 23.9062C11.4453 24.6406 11.4766 24.8984 11.625 25.3281C12.1094 26.7343 13.2656 
      27.789 14.7266 28.164C15.4062 28.3359 33.7188 28.3437 34.0547 28.1718C34.6953 27.8359 34.6875 26.914 34.0391 
      26.539C33.9062 26.4687 31.75 26.4374 24.4141 26.4062L14.9609 26.3671L14.5391 26.1327C14.1094 25.8984 13.7266 
      25.4843 13.4688 24.9999C13.3672 24.7968 13.3281 24.5468 13.3203 24.0234C13.3203 23.4218 13.3516 23.2421 13.5391 
      22.8046C13.7578 22.2968 13.7734 22.2812 14.0859 22.2343C14.2656 22.2109 18.6484 21.7499 23.8281 21.2109C29.0078 
      20.6718 33.4375 20.1952 33.6719 20.1484C34.6094 19.9687 35.5859 19.4765 36.2812 18.8359C36.7891 18.3671 37.3125 
      17.5312 37.5781 16.7577C37.8672 15.9218 40.0156 6.71868 39.9688 6.52337C39.9141 6.29681 39.6484 6.03118 39.375 
      5.92181C39.25 5.87493 33.5781 5.76556 24.0469 5.63274C15.7188 5.51556 8.89844 5.40618 8.875 5.38274C8.85938 
      5.36712 
      8.66406 4.78899 8.4375 4.10149C7.85938 2.35931 7.64844 1.94524 6.99219 1.28118C6.39062 0.671805 5.625 0.242117 
      4.85938 0.0858674C4.625 0.0389924 3.64062 -7.01305e-05 2.59375 -7.01305e-05C1.07031 -7.01305e-05 0.695312 
      0.0233674 0.492188 0.12493ZM25.5469 7.50774C32.3125 7.60149 37.8594 7.68743 37.875 7.70306C37.8906 7.71087 
      37.4453 9.60931 36.8828 11.9296C35.8203 16.289 35.6562 16.7968 35.1562 17.3359C34.7578 17.7577 34.1953 18.0937 
      33.6641 18.2343C33.2266 18.3437 14.6406 20.3124 14 20.3124H13.7578L12.5703 16.6952C11.9141 14.7109 10.9531 
      11.7734 10.4219 10.164L9.46094 7.24212L11.3516 7.28899C12.3906 7.32024 18.7812 7.41399 25.5469 7.50774Z"
            fill="white"
          />
          <path
            d="M11.875 30.6721C10.375 30.9924 9.06251 32.2736 8.71095 33.758C8.37501 35.1955 8.78126 36.6096 
      9.82814 37.6564C10.8985 38.7268 12.2891 39.1252 13.7422 38.7893C14.4688 38.6174 15.1172 38.2346 
      15.711 37.6408C16.6406 36.7111 17.0703 35.4533 16.8906 34.1877C16.6953 32.8205 15.8203 31.6174 
      14.5703 31.0158C13.6485 30.5627 12.8438 30.4611 11.875 30.6721ZM13.7813 32.6877C14.6016 33.0861 
      15.0313 33.8127 15.0391 34.7658C15.0391 35.2268 15 35.4221 14.8594 35.7033C14.5781 36.2346 
      14.086 36.6955 13.6094 36.8752C11.711 37.5861 9.91408 35.7893 10.625 33.8908C10.8516 33.2814 
      11.4688 32.7268 12.1875 32.4924C12.5469 32.3752 13.336 32.4689 13.7813 32.6877Z"
            fill="white"
          />
          <path
            d="M29.5313 30.6719C28.7344 30.8438 28.0859 31.2031 27.4609 31.8281C26.6172 32.6719 26.25 33.5469 26.25 
      34.7266C26.25 35.9141 26.6328 36.8516 27.4766 37.6875C29.1016 39.3125 31.6797 39.3125 33.3047 
      37.6875C34.1484 36.8516 34.5313 35.9297 34.5313 34.7734C34.5313 33.5391 34.1797 32.6875 33.3203 
      31.8281C32.6875 31.1953 32.0469 30.8438 31.2109 30.6641C30.5469 30.5234 30.1953 30.5234 29.5313 
      30.6719ZM31.3438 32.6328C31.8125 32.8438 32.2422 33.2891 32.4844 33.8125C32.9922 34.9219 
      32.5234 36.2422 31.4297 36.7969C30.8906 37.0781 29.8906 37.0781 29.3516 36.7969C28.0703 
      36.1484 27.7109 34.5781 28.5625 33.3438C29.1328 32.5234 30.3672 32.2031 31.3438 32.6328Z"
            fill="white"
          />
        </svg>
      </button>
      <ShoppingCartItems />
    </div>
  );
};

export default ShoppingCart;
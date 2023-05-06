import React, { FC } from "react";
import Slider from "react-slick";

import ProductCard from "../ProductCard/ProductCard";
import ProductCardMore from "../ProductCardMore/ProductCardMore";

import styles from "./ProductSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  img: string;
  title: string;
  category: string;
  price: number;
}

interface ProductSliderProps {
  items: Product[][];
}

const ProductSlider: FC<ProductSliderProps> = ({items}) => {
  const CustomPrevArrow: React.FC = (props) => {
    const { onClick } = props as any;
    return (
      <button onClick={onClick} className={styles.PrevArrow}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6958 14.4355H5.48568M5.48568 14.4355C5.48568 14.4355
           10.364 11.2272 11.3552 8.56592M5.48568 14.4355C5.48568
            14.4355 9.79826 17.45 11.3552 20.305"
            stroke="#1E1E1E"
            stroke-width="2.17391"
            stroke-linecap="square"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow: React.FC = (props) => {
    const { onClick } = props as any;
    return (
      <button onClick={onClick} className={styles.NextArrow}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.30417 14.4355H22.5143M22.5143 14.4355C22.5143
           14.4355 17.636 11.2272 16.6447 8.56592M22.5143
            14.4355C22.5143 14.4355 18.2017 17.45 16.6447 20.305"
            stroke="#1E1E1E"
            stroke-width="2.17391"
            stroke-linecap="square"
          />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: false, // Відображення крапок навігації
    infinite: false, // Безкінечний режим прокрутки
    speed: 300, // Швидкість прокрутки (в мілісекундах)
    slidesToShow: 4, // Кількість відображуваних слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, що прокручуються за один раз
    autoplay: false, // Автоматичне відтворення слайдів
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Брейкпоінт для адаптивності
        settings: {
          slidesToShow: 3, // Кількість відображуваних слайдів при розмірі екрану менше 768px
        },
      },
      {
        breakpoint: 1040, // Брейкпоінт для адаптивності
        settings: {
          slidesToShow: 2, // Кількість відображуваних слайдів при розмірі екрану менше 768px
        },
      },
      {
        breakpoint: 740, // Брейкпоінт для адаптивності
        settings: {
          slidesToShow: 1, // Кількість відображуваних слайдів при розмірі екрану менше 480px
        },
      },
    ],
  };

  return (
    <div className={styles.ProductSlider}>
      <Slider {...settings}>
        {items.map((subItems, index) => (
          <div key={index}>
            {subItems.map((item, subIndex) => (
              <ProductCard
                key={subIndex}
                img={item.img}
                title={item.title}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
        ))}
        <ProductCardMore/>
      </Slider>
    </div>
  );
};

export default ProductSlider;

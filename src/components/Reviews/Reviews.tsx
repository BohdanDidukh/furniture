import React, { FC } from "react";

import Container from "../common/Container/Container";
import Subtitle from "../common/Subtitle/Subtitle";
import Title from "../common/Title/Title";
import ReviewsSlider from "../ReviewsSlider/ReviewsSlider";

import review1 from "../../assets/images/reviews/review1.png";
import review2 from "../../assets/images/reviews/review2.png";
import review3 from "../../assets/images/reviews/review3.png";
import review4 from "../../assets/images/reviews/review4.png";
import review5 from "../../assets/images/reviews/review5.png";
import review6 from "../../assets/images/reviews/review6.png";
import avatar1 from "../../assets/images/avatars/avatar1.png";
import avatar2 from "../../assets/images/avatars/avatar2.png";
import avatar3 from "../../assets/images/avatars/avatar3.png";
import avatar4 from "../../assets/images/avatars/avatar4.png";
import avatar5 from "../../assets/images/avatars/avatar5.png";
import avatar6 from "../../assets/images/avatars/avatar6.png";

import styles from "./Reviews.module.scss";

interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = () => {
  const items = [
    [
      {
        background: review1,
        avatar: avatar1,
        nikname: "Bang Upin",
        name: "Pedagang Asongan",
        review:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
      },
    ],
    [
      {
        background: review2,
        avatar: avatar2,
        nikname: "Ibuk Sukijan",
        name: "Ibu Rumah Tangga",
        review:
          "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
      },
    ],
    [
      {
        background: review3,
        avatar: avatar3,
        nikname: "Mpok Ina",
        name: "Karyawan Swasta",
        review:
          "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      },
    ],
    [
      {
        background: review4,
        avatar: avatar4,
        nikname: "Mpok Ina",
        name: "Karyawan Swasta",
        review:
          "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      },
    ],
    [
      {
        background: review5,
        avatar: avatar5,
        nikname: "Bang Upin",
        name: "Pedagang Asongan",
        review:
          "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
      },
    ],
    [
      {
        background: review6,
        avatar: avatar6,
        nikname: "Ibuk Sukijan",
        name: "Ibu Rumah Tangga",
        review:
          "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
      },
    ],
  ];

  return (
    <section className={styles.Reviews}>
      <Container>
        <div className={styles.Reviews__subtitle}>
          <Subtitle label="Testimonials" />
        </div>
        <div className={styles.Reviews__title}>
          <Title label="Our Client Reviews" />
        </div>
        <ReviewsSlider items={items}></ReviewsSlider>
      </Container>
    </section>
  );
};
export default Reviews;

import React, { FC } from "react";

import RatingStar from "../RatingStar/RatingStar";

import styles from "./ReviewsCard.module.scss";

interface ReviewsCardProps {
  background: string;
  avatar: string;
  nikname: string;
  name: string;
  review: string;
}

const ReviewsCard: FC<ReviewsCardProps> = ({
  background,
  avatar,
  nikname,
  name,
  review,
}) => {
  const backdropImage = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className={styles.ReviewsCard}>
      <div className={styles.ReviewsCard__wrapper} style={backdropImage}>
        <div className={styles.ReviewsCard__body}>
          <div className={styles.ReviewsCard__avatar}>
            <img alt="avatar" src={avatar} />
          </div>
          <p className={styles.ReviewsCard__nikname}>{nikname}</p>
          <p className={styles.ReviewsCard__name}>{name}</p>
          <p className={styles.ReviewsCard__review}>{review}</p>
          <div>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
            <RatingStar></RatingStar>
          </div>
        </div>
      </div>
      <img
        className={styles.ReviewsCard__reflection}
        src={background}
        alt="interior"
      ></img>
    </div>
  );
};

export default ReviewsCard;

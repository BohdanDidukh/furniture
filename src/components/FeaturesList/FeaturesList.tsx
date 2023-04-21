import React, { FC } from "react";

import FeaturesCard from "../FeaturesCard/FeaturesCard";

import styles from "./FeaturesList.module.scss";

interface FeaturesListProps {}

const FeaturesList: FC<FeaturesListProps> = () => (
  <div className={styles.FeaturesList}>
    <FeaturesCard
      title="Luxury facilities"
      text="The advantage of hiring a workspace with us is that givees you
       comfortable service and all-around facilities."
      link="#"
    ></FeaturesCard>
    <FeaturesCard
      title="Affordable Price"
      text="You can get a workspace of the highst quality at an affordable
       price and still enjoy the facilities that are oly here."
      link="#"
    ></FeaturesCard>
    <FeaturesCard
      title="Many Choices"
      text="We provide many unique work space choices so that you can 
      choose the workspace to your liking."
      link="#"
    ></FeaturesCard>
  </div>
);

export default FeaturesList;

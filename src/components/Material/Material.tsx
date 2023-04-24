import React, { FC } from "react";

import MaterialPhoto from "../MaterialPhoto/MaterialPhoto";
import AdvantagesInfo from "../AdvantagesInfo/AdvantagesInfo";

import styles from "./Material.module.scss";

interface MaterialProps {}

const Material: FC<MaterialProps> = () => (
  <div className={styles.Material}>
    <AdvantagesInfo
      subtitle="Materials"
      title="Very serious materials for making furniture"
      text="Because panto was very serious about designing 
      furniture for our environment, using a very expensive 
      and famous capital but at a relatively low price"
    ></AdvantagesInfo>
    <MaterialPhoto></MaterialPhoto>
  </div>
);

export default Material;

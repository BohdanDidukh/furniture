import React, { FC } from "react";

import materials1 from "../../assets/images/materials1.png";
import materials2 from "../../assets/images/materials2.png";
import materials3 from "../../assets/images/materials3.png";

import styles from "./MaterialPhoto.module.scss";

interface MaterialPhotoProps {}

const MaterialPhoto: FC<MaterialPhotoProps> = () => (
  <div className={styles.MaterialPhoto}>
    <div className={styles.MaterialPhoto__column}>
      <div>
        <img src={materials1} alt="furniture"></img>
      </div>
      <div>
        <img src={materials2} alt="furniture"></img>
      </div>
    </div>
    <div>
      <img src={materials3} alt="furniture"></img>
    </div>
  </div>
);

export default MaterialPhoto;

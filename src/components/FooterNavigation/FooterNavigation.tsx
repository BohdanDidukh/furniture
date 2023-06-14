import React, { FC } from "react";

import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import facebook from "../../assets/images/svg/facebook.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import instagram from "../../assets/images/svg/instagram.svg";

import styles from "./FooterNavigation.module.scss";

interface FooterNavigationProps {}

const FooterNavigation: FC<FooterNavigationProps> = () => {
  const services = [
    { text: "Email Marketing" },
    { text: "Campaigns" },
    { text: "Branding" },
  ];
  const furniture = [{ text: "Beds" }, { text: "Chairs" }, { text: "All" }];
  const follow = [
    { text: "Facebook", icon: facebook },
    { text: "Twitter", icon: twitter },
    { text: "Instagram", icon: instagram },
  ];

  return (
    <div id="contact" className={styles.FooterNavigation}>
      <CategoryNavigation title="Services" children={services} />
      <CategoryNavigation title="Furniture" children={furniture} />
      <CategoryNavigation title="Follow Us" children={follow} />
    </div>
  );
};
export default FooterNavigation;

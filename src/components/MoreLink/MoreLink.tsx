import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./MoreLink.module.scss";

interface MoreLinkProps {
  label: string;
  link: string;
}

const MoreLink: FC<MoreLinkProps> = ({ label, link }) => (
  <Link to={link} className={styles.MoreLink}>
    {label}
    <svg
      width="48"
      height="24"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 12.4005H42M42 12.4005C42 12.4005 37.5119
             9.44891 36.6 7.00049M42 12.4005C42 12.4005 
             38.0324 15.1739 36.6 17.8005"
        stroke="#E58411"
        stroke-linecap="square"
      />
    </svg>
  </Link>
);

export default MoreLink;

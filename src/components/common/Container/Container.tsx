import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired, // Пропс children, який має бути вузлом React
};

export default Container;

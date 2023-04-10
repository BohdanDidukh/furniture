import React, { FC } from "react";

import styles from "./App.module.scss";

import Header from "./components/common/Header/Header";
import Hero from "./components/Hero/Hero";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Header />
    <Hero />
  </div>
);

export default App;

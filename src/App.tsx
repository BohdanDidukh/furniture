import React, { FC } from "react";

import styles from "./App.module.scss";

import Header from "./components/common/Header/Header";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Header />
    <Hero />
    <Shop/>
  </div>
);

export default App;

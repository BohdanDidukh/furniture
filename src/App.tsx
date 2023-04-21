import React, { FC } from "react";

import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";

import styles from "./App.module.scss";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Hero/>
    <Features/>
    <Shop />
  </div>
);

export default App;

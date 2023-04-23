import React, { FC } from "react";

import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";

import styles from "./App.module.scss";
import Reviews from "./components/Reviews/Reviews";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Hero />
    <Features />
    <Shop />
    <Reviews />
  </div>
);

export default App;

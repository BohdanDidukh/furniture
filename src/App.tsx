import React, { FC } from "react";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Shop from "./components/Shop/Shop";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";

import styles from "./App.module.scss";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Hero />
    <Features />
    <Shop />
    <Advantages />
    <Reviews />
  </div>
);

export default App;

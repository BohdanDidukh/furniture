import React, { FC } from "react";

import Container from "../common/Container/Container";
import Header from "../common/Header/Header";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroSubtitle from "../HeroSubtitle/HeroSubtitle";
import Search from "../Search/Search";

import styles from "./Hero.module.scss";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <section className={styles.Hero}>
    <Container>
      <Header></Header>
      <HeroTitle
        label={"Make your interior more minimalistic & modern"}
      ></HeroTitle>
      <HeroSubtitle
        label={
          "Turn your room with panto into a lot more minimalist and modern with ease and speed"
        }
      ></HeroSubtitle>
      <Search></Search>
    </Container>
  </section>
);

export default Hero;

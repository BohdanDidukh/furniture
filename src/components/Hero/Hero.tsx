import React, { FC, useState } from "react";

import Container from "../common/Container/Container";
import Header from "../common/Header/Header";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroSubtitle from "../HeroSubtitle/HeroSubtitle";
import SofaChangeColor from "../SofaChangeColor/SofaChangeColor";
import Search from "../Search/Search";

import background1 from "../../assets/images/background/background1.png";

import styles from "./Hero.module.scss";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [background, setBackground] = useState(background1);
  const style = { backgroundImage: `url(${background})` };
  
  function handleBackground(value: string) {
    setBackground(value);
  }

  return (
    <section className={styles.Hero} style={style}>
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
        <SofaChangeColor onClick={handleBackground} />
        <Search></Search>
      </Container>
    </section>
  );
};

export default Hero;

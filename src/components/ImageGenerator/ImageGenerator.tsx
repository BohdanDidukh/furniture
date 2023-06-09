import React, { FC, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Container from "../common/Container/Container";
import Subtitle from "../common/Subtitle/Subtitle";
import Title from "../common/Title/Title";
import ImageSearch from "../ImageSearch/ImageSearch";

import styles from "./ImageGenerator.module.scss";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

interface ImageGeneratorProps {}

const ImageGenerator: FC<ImageGeneratorProps> = () => {
  const [image, setImage] = useState(
    "https://www.bridgefordesign.com/cms/images/large/1527761252_fabcosummer2018.jpg"
  );
  const [image2, setImage2] = useState(
    "https://cdn.home-designing.com/wp-content/uploads/2016/04/modern-art-deco-interior.jpg"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState(
    "A high-accuracy picture captures a cozy apartment furnished with rustic pieces from designer brand Restoration Hardware, featuring a comfortable and inviting Cloud sofa that embodies the essence of relaxation, placed in front of a warm and inviting brick wall. The apartment evokes a charming and cozy design style with an impressive attention to detail, including high-end finishes from brands like"
  );

  function handlePrompt(value: string) {
    setPrompt(value);
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await openai.createImage({
        prompt: prompt,
        n: 2,
        size: "512x512",
      });
      const url1 = response.data.data[0].url;
      setImage(url1 !== undefined ? url1 : "");
      const url2 = response.data.data[1].url;
      setImage2(url2 !== undefined ? url2 : "");
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  function handleButtonClick() {
    fetchData();
  }

  return (
    <section className={styles.ImageGenerator}>
      <Container>
        <div className={styles.ImageGenerator_subtitle}>
          <Subtitle label="Requests"></Subtitle>
        </div>
        <div className={styles.ImageGenerator_title}>
          <Title label="Interior Generator"></Title>
        </div>
        <div className={styles.ImageGenerator_title}></div>
        <ImageSearch
          onChange={handlePrompt}
          onClick={handleButtonClick}
        ></ImageSearch>
        <div>
          {isLoading ? (
            <div className={styles.ImageGenerator__loading}>
              <p>Loading...</p>
              <p>Please wait until your image is ready.</p>
            </div>
          ) : (
            <div className={styles.ImageGenerator__img}>
              <img alt="interior" src={image}></img>
              <img alt="interior" src={image2}></img>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
export default ImageGenerator;

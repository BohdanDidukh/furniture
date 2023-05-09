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
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-wuyDqsQhD28qJUtbqfXKRoeK/user-TssUk3S0DwDVDQsrn19yjfit/img-GbkKzzOZ5SLJHgTFFFZ6lQ96.png?st=2023-05-08T14%3A18%3A21Z&se=2023-05-08T16%3A18%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-08T03%3A25%3A36Z&ske=2023-05-09T03%3A25%3A36Z&sks=b&skv=2021-08-06&sig=KEgWX5Bsv/wQOwhhAa6UdzsfsXKQi5STtTzkzl/HGW4%3D"
  );
  const [image2, setImage2] = useState(
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-wuyDqsQhD28qJUtbqfXKRoeK/user-TssUk3S0DwDVDQsrn19yjfit/img-zpxm9klFz5E5PC5f2gnW9ek0.png?st=2023-05-08T14%3A18%3A21Z&se=2023-05-08T16%3A18%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-08T03%3A25%3A36Z&ske=2023-05-09T03%3A25%3A36Z&sks=b&skv=2021-08-06&sig=T8qnVH%2BT2%2BhV/HBT12vyksOLvOKLV606TgmJAjyTZOY%3D"
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
    <div className={styles.ImageGenerator}>
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
              <img src={image}></img>
              <img src={image2}></img>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default ImageGenerator;

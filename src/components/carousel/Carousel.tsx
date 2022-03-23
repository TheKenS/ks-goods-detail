import { useState } from "react";
import { Carousel as AntCarousel } from "antd";
import styles from "./Carousel.module.css";
interface PropsType {
  imgs: string[];
}

export const Carousel: React.FC<PropsType> = ({ imgs }) => {
  const [current, setCurrent] = useState(1);
  const len = imgs.length;
  const afterAction = (current) => {
    // console.log(current);
    setCurrent(current + 1);
  };
  return (
    <div className={styles["carousel-container"]}>
      <AntCarousel dots={false} afterChange={afterAction}>
        {imgs.map((imgSrc, index) => (
          <img src={imgSrc} key={"carousel-img" + index} />
        ))}
      </AntCarousel>
      <div className={styles["carousel-flag"]}>
        {current}/{len}
      </div>
    </div>
  );
};

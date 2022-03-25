import styles from "./ShopInfo.module.css";
import { Rate } from "antd";
import { Score } from "../score";

interface PropsType {
  avatar: string;
  shopName: string;
  sales: string;
  stars: number;
  scores: { name: string; score: number }[];
}

export const ShopInfo: React.FC<PropsType> = ({
  avatar,
  shopName,
  sales,
  stars,
  scores,
}) => {
  return (
    <div className={styles["shop-info-container"]}>
      <div className={styles["shop-info-wrapper"]}>
        <div className={styles["shop-info-header"]}>
          <img className={styles["shop-info-avatar"]} src={avatar} alt="" />
          <div className={styles["shop-info-header-right"]}>
            <div className={styles["shop-info-name-container"]}>
              <p className={styles["shop-info-name"]}>{shopName}</p>
              <p className={styles["shop-info-amount"]}>总销量{sales}件</p>
            </div>
            <div className={styles["shop-info-button"]}>
              <span>进店逛逛</span>
            </div>
          </div>
        </div>
        <div className={styles["shop-info-content"]}>
          <div className={styles["shop-info-stars-wrapper"]}>
            <div className={styles["shop-info-stars-title"]}>购物体验星级</div>
            <Rate
              disabled
              value={stars}
              className={`${styles["shop-info-stars"]}`}
            />
          </div>
          <div className={styles["shop-info-scores-wrapper"]}>
            {scores.map((score, idx) => (
              <Score
                name={score.name}
                score={score.score}
                key={`shop-info-scores${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

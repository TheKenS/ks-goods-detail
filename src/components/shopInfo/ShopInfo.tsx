import styles from "./ShopInfo.module.css";
import { Rate } from "antd";
import { Score } from "@/components";

export const ShopInfo = () => {
  return (
    <div className={styles["shop-info-container"]}>
      <div className={styles["shop-info-wrapper"]}>
        <div className={styles["shop-info-header"]}>
          <img
            className={styles["shop-info-avatar"]}
            src="https://tx2.a.kwimgs.com/uhead/AB/2020/08/03/11/BMjAyMDA4MDMxMTQ2MzJfODMzMDkzOTVfMV9oZDQ0Xzg4Ng==_s.jpg"
            alt=""
          />
          <div className={styles["shop-info-header-right"]}>
            <div className={styles["shop-info-name-container"]}>
              <p className={styles["shop-info-name"]}>
                Sir东东的小店Sir东东的小店Sir东东的小店Sir东东的小店Sir东东的小店
              </p>
              <p className={styles["shop-info-amount"]}>总销量82件</p>
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
              value={3}
              className={`${styles["shop-info-stars"]}`}
            />
          </div>
          <div className={styles["shop-info-scores-wrapper"]}>
            <Score name={"商品质量"} score={4.5} />
            <Score name={"客服服务"} score={4.5} />
            <Score name={"物流速度"} score={4.5} />
            <Score name={"售后体验"} score={4.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

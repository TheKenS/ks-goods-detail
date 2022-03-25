import styles from "./GoodsInfo.module.css";
import { Typography } from "antd";
import { Divider } from "@/components";

interface PropsType {
  price: string;
  discount: string;
  title: string;
  serves: string[];
  delivery: string[];
}

export const GoodsInfo: React.FC<PropsType> = ({
  price,
  discount,
  title,
  serves,
  delivery,
}) => {
  return (
    <div className={styles["goods-info-container"]}>
      <div className={styles["goods-info-price"]}>
        <div className={styles["goods-info-price-current"]}>
          <span>￥</span>
          <span>{price}</span>
        </div>

        <div className={styles["goods-info-price-discount"]}>
          <span>预估到手价</span>
          <span>￥</span>
          <span>{discount}</span>
          <i className="icon iconfont icon-xiangyoujiantou" />
        </div>
      </div>

      <Typography.Title level={5} className={styles["goods-info-title"]}>
        {title}
      </Typography.Title>

      <div className={styles["goods-info-divider"]}>
        <Divider />
      </div>

      <div className={styles["goods-info-serve"]}>
        <div className={styles["goods-info-serve-left"]}>
          {serves.map((serve, idx) => (
            <div
              className={styles["goods-info-serve-item"]}
              key={`goods-info-serve-${idx}`}
            >
              <span>{serve}</span>
            </div>
          ))}
        </div>
        <i className="icon iconfont icon-xiangyoujiantou" />
      </div>

      <div className={styles["goods-info-divider"]}>
        <Divider />
      </div>

      <div className={styles["goods-info-delivery"]}>
        {delivery.map((serve, idx) => (
          <div
            className={styles["goods-info-delivery-item"]}
            key={`goods-info-delivery-${idx}`}
          >
            <span>{serve}</span>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

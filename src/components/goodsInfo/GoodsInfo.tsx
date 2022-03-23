import styles from "./GoodsInfo.module.css";
import { Typography } from "antd";
import { Divider } from "@/components";

export const GoodsInfo = () => {
  return (
    <div className={styles["goods-info-container"]}>
      <div className={styles["goods-info-price"]}>
        <div className={styles["goods-info-price-current"]}>
          <span>￥</span>
          <span>228</span>
        </div>

        <div className={styles["goods-info-price-discount"]}>
          <span>预估到手价</span>
          <span>￥</span>
          <span>226</span>
          <i className="icon iconfont icon-xiangyoujiantou" />
        </div>
      </div>

      <Typography.Title level={5} className={styles["goods-info-title"]}>
        测试商品勿拍不发货快手小块测试商品勿拍不发货快手小块测试商
      </Typography.Title>

      <div className={styles["goods-info-divider"]}>
        <Divider />
      </div>

      <div className={styles["goods-info-serve"]}>
        <div className={styles["goods-info-serve-left"]}>
          <div className={styles["goods-info-serve-item"]}>
            <span>支持七天无理由退货</span>
          </div>
          <div className={styles["goods-info-serve-item"]}>
            <span>急速退款</span>
          </div>
          <div className={styles["goods-info-serve-item"]}>
            <span>已交保证金</span>
          </div>
          <div className={styles["goods-info-serve-item"]}>
            <span>已交保证金</span>
          </div>
        </div>
        <i className="icon iconfont icon-xiangyoujiantou" />
      </div>

      <div className={styles["goods-info-divider"]}>
        <Divider />
      </div>

      <div className={styles["goods-info-delivery"]}>
        <div className={styles["goods-info-delivery-item"]}>
          <span>48小时内从北京市市辖区发货</span>
        </div>
        <div className={styles["goods-info-delivery-item"]}>
          <span>包邮</span>
        </div>
        <div className={styles["goods-info-delivery-item"]}>
          <span>48小时内从北京市市辖区发货</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

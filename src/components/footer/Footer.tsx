import styles from "./Footer.module.css";
import { IconButton } from "./iconButton";

export const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <IconButton
          icon={<i className="icon iconfont icon-geren" />}
          name={"个人主页"}
        />
        <IconButton
          icon={<i className="icon iconfont icon-dianpu" />}
          name={"店铺"}
        />
        <IconButton
          icon={<i className="icon iconfont icon-kefu" />}
          name={"客服"}
        />
      </div>
      <div className={styles["footer-button-buy"]}>领券购买</div>
    </div>
  );
};

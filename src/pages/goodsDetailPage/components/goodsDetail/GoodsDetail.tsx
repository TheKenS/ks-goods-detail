import { Typography } from "antd";
import styles from "./GoodsDetail.module.css";
const { Title, Paragraph } = Typography;
interface PropsType {
  title: string;
  detailImgs: string[];
}

export const GoodsDetail: React.FC<PropsType> = ({ title, detailImgs }) => {
  return (
    <div>
      <Typography className={styles["goods-detail-typography"]}>
        <Title level={5}>商品详情</Title>
        <Paragraph className={styles["goods-detail-describe"]}>
          {title}
        </Paragraph>
      </Typography>
      <div className={styles["goods-detail-imgs"]}>
        {detailImgs.map((imgSrc, index) => (
          <img src={imgSrc} key={"detail-img" + index} />
        ))}
      </div>
    </div>
  );
};

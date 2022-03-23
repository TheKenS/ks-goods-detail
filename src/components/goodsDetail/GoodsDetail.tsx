import { Typography } from "antd";
import styles from "./GoodsDetail.module.css";
const { Title, Paragraph } = Typography;
interface PropsType {
  detailImgs: string[];
}

export const GoodsDetail = ({ detailImgs }) => {
  return (
    <div>
      <Typography className={styles["goods-detail-typography"]}>
        <Title level={5}>商品详情</Title>
        <Paragraph className={styles["goods-detail-describe"]}>
          《春季新品》潮流宽松卫衣 1520
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

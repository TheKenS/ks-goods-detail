import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Carousel,
  GoodsInfo,
  ShopInfo,
  GoodsDetail,
  Footer,
  LikeList,
} from "./components";
import { Spin } from "antd";
import styles from "./GoodsDetailPage.module.css";
import { getGoodsDetail, getLikes } from "@/redux/goodsDetail/slice";
import { useSelector } from "@/redux/hooks";

interface MatchParams {
  goodsId: string;
}

export const GoodsDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams<MatchParams>();
  const loading = useSelector((state) => state.goodsDetail.loading);
  const error = useSelector((state) => state.goodsDetail.error);
  const { topInfo, shopInfo, details } = useSelector(
    (state) => state.goodsDetail.info
  );
  const likes = useSelector((state) => state.goodsDetail.likes);

  useEffect(() => {
    dispatch(getGoodsDetail(params));
    dispatch(getLikes({ goodsId: params.goodsId, pageCount: 0 }));
  }, [params]);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }

  if (error) {
    return <div>网站出错：{error}</div>;
  }

  const goodsInfoProps = {
    price: topInfo.price,
    discount: topInfo.discount,
    title: topInfo.title,
    serves: topInfo.serves,
    delivery: topInfo.delivery,
  };

  return (
    <div className={styles["detail-container"]}>
      <Carousel imgs={topInfo.topImgs} />
      <GoodsInfo {...goodsInfoProps}></GoodsInfo>
      <ShopInfo {...shopInfo}></ShopInfo>
      <GoodsDetail {...details}></GoodsDetail>
      <LikeList goodsId={params.goodsId} {...likes} />
      <Footer />
    </div>
  );
};

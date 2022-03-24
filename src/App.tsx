import styles from "./App.module.css";
import {
  Carousel,
  GoodsInfo,
  ShopInfo,
  GoodsDetail,
  Footer,
} from "@/components";

const imgSrc = `https://p1.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg`;
const imgSrc2 = `https://p1.eckwai.com/ufile/adsocial/1063e77d-5430-4747-a4b5-963b6ef41941.jpg`;
const imgs = [imgSrc, imgSrc2];

const detailImgSrc = `/mock/imgs/detail1.jpg`;
const detailImgSrc2 = `/mock/imgs/detail2.jpg`;
const detailImgSrc3 = `/mock/imgs/detail3.jpg`;
const detailImgs = [detailImgSrc, detailImgSrc2, detailImgSrc3];

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["detail-container"]}>
        <Carousel imgs={imgs} />
        <GoodsInfo></GoodsInfo>
        <ShopInfo></ShopInfo>
        <GoodsDetail detailImgs={detailImgs}></GoodsDetail>
        <Footer />
      </div>
    </div>
  );
}

export default App;

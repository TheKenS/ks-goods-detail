import { useEffect, useRef } from "react";
import styles from "./LikeList.module.css";
import { useDispatch } from "react-redux";
import { getLikes } from "@/redux/goodsDetail/slice";
import { Loading } from "./Loading";

interface PropsType {
  isFetching: boolean;
  pageCount: number;
  items: any[];
  goodsId: string;
}

export const LikeList: React.FC<PropsType> = ({
  isFetching,
  pageCount,
  items,
  goodsId,
}) => {
  const dispatch = useDispatch();
  const listRef = useRef<HTMLDivElement | null>(null);

  // 处理屏幕滚动事件，实现加载更多的效果
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; // 网页被卷去的高
    const screenHeight = document.documentElement.clientHeight;
    if (listRef.current) {
      const likeListTop = listRef.current.offsetTop; // 元素顶部距离网页顶部的高
      const likeListHeight = listRef.current.offsetHeight;
      if (
        scrollTop >= likeListHeight + likeListTop - screenHeight &&
        !isFetching
      ) {
        console.log("触发了事件");
        dispatch(getLikes({ goodsId, pageCount }));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles["like-container"]}>
      <div className={styles["like-top"]}>
        <i className="icon iconfont icon-xihuan" />
        猜你喜欢
      </div>
      <div className={styles["like-list"]} ref={listRef}>
        {items.map((item, idx) => (
          <div
            className={styles["like-list-item"]}
            key={`like-list-item${idx}`}
          >
            <div
              className={styles["like-list-img"]}
              style={{ backgroundImage: `url('${item.imgSrc}')` }}
            />
            <div className={styles["like-list-content"]}>
              <div className={styles["like-list-title"]}>
                <span className={styles["like-list-icon"]}>品牌</span>
                {item.title}
              </div>
              <div className={styles["like-list-manjian"]}>满50减5</div>
              <div className={styles["like-list-bottom"]}>
                <div className={styles["like-list-price"]}>
                  <span>￥</span>
                  <span>{item.price}</span>
                </div>
                <div className={styles["like-list-sales"]}>
                  已售{item.sales}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Loading />
      </div>
    </div>
  );
};

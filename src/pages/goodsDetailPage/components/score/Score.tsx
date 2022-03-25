import styles from "./Score.module.css";

interface PropsType {
  name: string;
  score: number;
}

export const Score = ({ name, score }) => {
  return (
    <div className={styles["score"]}>
      <span>{name}</span>
      <span>{score}</span>
    </div>
  );
};

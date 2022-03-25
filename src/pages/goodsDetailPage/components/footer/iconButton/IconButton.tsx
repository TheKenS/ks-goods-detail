import styles from "./IconButton.module.css";

interface PropsType {
  icon: JSX.Element;
  name: string;
}

export const IconButton: React.FC<PropsType> = ({ icon, name }) => {
  return (
    <div className={styles["button-wrapper"]}>
      <div className={styles["button-icon"]}>{icon}</div>
      <div className={styles["button-name"]}>{name}</div>
    </div>
  );
};

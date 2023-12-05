import Skeleton from "../helper/Skeleton/Index";
import styles from "./Notice.module.sass";

export const Notice = () => {
  return (
    <div className={styles.notice}>
      <div className={styles.user}>
        <div className={styles.picture}>
          <Skeleton />
        </div>
        <div className={styles.name}>
          <Skeleton />
        </div>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.line}>
          <Skeleton />
        </div>
        <div className={styles.line}>
          <Skeleton />
        </div>
        <div className={styles.line}>
          <Skeleton />
        </div>
      </div>
      <div className={styles.image}>
        <Skeleton />
      </div>
    </div>
  );
};

export default Notice;

import Skeleton from "../helper/Skeleton/Index";
import styles from "./Test.module.sass";

export const Test = () => {
  const loading = true;
  if (loading)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className={styles.wrapper}>
          <Skeleton />
        </div>
        <h1 style={{ height: "1.25rem", width: "30ch", position: "relative" }}>
          <Skeleton />
        </h1>
      </div>
    );
  return (
    <>
      <div className={styles.wrapper}></div>
      <h1>Hello World</h1>
    </>
  );
};

export default Test;

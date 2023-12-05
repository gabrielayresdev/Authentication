import Notice from "../Notice/Notice";
import styles from "./Feed.module.sass";

export const Feed = () => {
  return (
    <div className={styles.feed}>
      <Notice />
      <Notice />
      <Notice />
      <Notice />
    </div>
  );
};

export default Feed;

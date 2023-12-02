import styles from "./Hamburger.module.sass";

export const Hamburger = ({ active }: { active: boolean }) => {
  return (
    <svg
      id="hamburger"
      className={`${styles.hamburger} ${active ? styles.active : ""}`}
      viewBox="0 0 60 40"
    >
      <g
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className={styles.topLine}
          id="top-line"
          d="M10,10 L50,10 Z"
        ></path>
        <path className={styles.middleLine} d="M10,20 L50,20 Z"></path>
        <path className={styles.bottomLine} d="M10,30 L50,30 Z"></path>
      </g>
    </svg>
  );
};

export default Hamburger;

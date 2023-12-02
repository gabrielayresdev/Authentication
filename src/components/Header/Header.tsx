import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Header.module.sass";
import { motion } from "framer-motion";

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const ul = {
    hidden: {
      left: "-100vw",
    },
    visible: {
      left: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };
  return (
    <header className={styles.header}>
      <div onClick={() => setShowMenu(!showMenu)}>
        <Hamburger active={showMenu} />
      </div>
      <div className={styles.logo}>
        <img src="/src/assets/Logo(min).png" alt="Logo do site" />
      </div>

      <div className={styles.profile}>
        <img src="/src/assets/profile.jpg" alt="Foto de perfil" />
      </div>
      <motion.div
        className={`${styles.nav} ${showMenu ? styles.active : ""}`}
        variants={container}
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
      >
        <motion.div className={styles.list} variants={ul}>
          <div className={styles.listItem}>Home</div>
          <div className={styles.listItem}>Produtos</div>
          <div className={styles.listItem}>Contato</div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;

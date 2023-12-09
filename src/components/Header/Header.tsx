import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Header.module.sass";
import { motion } from "framer-motion";
import Popup from "../Popup/Popup";
import { ReactComponent as Exit } from "../../assets/exit.svg";
import { ReactComponent as User } from "../../assets/profile.svg";
import { ReactComponent as Gear } from "../../assets/config.svg";

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showProfileOptions, setShowProfileOptions] = React.useState(false);

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

      <div
        className={styles.profile}
        onClick={() => setShowProfileOptions(true)}
      >
        <img src="/src/assets/profile.jpg" alt="Foto de perfil" />
        <Popup
          show={showProfileOptions}
          setShow={setShowProfileOptions}
          horizontalAlignment="right"
        >
          <div className={styles.profileOptions}>
            <div className={styles.option}>
              <div className={styles.icon}>
                <User />
              </div>
              Perfil
            </div>
            <div className={`${styles.option} ${styles.disabled}`}>
              <div className={styles.icon}>
                <Gear />
              </div>
              Configurações
            </div>
            <div className={styles.option}>
              <div className={styles.icon}>
                <Exit />
              </div>
              Sair
            </div>
          </div>
        </Popup>
      </div>
      <motion.div
        className={`${styles.nav} ${showMenu ? styles.active : ""}`}
        variants={container}
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
        onClick={({ target, currentTarget }) => {
          console.log(target);
          console.log(currentTarget);
          if (currentTarget === target) setShowMenu(false);
        }}
      >
        <motion.div className={styles.list} variants={ul}>
          <div className={styles.listItem}>Home</div>
          <div className={styles.listItem}>Mensagens</div>
          <div className={styles.listItem}>Ajuda</div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;

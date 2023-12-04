import React from "react";
import styles from "./Popup.module.sass";
import { AnimatePresence, motion } from "framer-motion";

interface PopupInterface extends React.PropsWithChildren {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = ({ children, show, setShow }: PopupInterface) => {
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick({ target }: { target: EventTarget | null }) {
      if (target && !popupRef.current?.contains(target as Node)) {
        setShow(false);
      }
    }

    if (show) window.addEventListener("click", handleClick);
    else window.removeEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [show, setShow]);

  const popup = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShow(false)}>
      <motion.div
        ref={popupRef}
        className={styles.wrapper}
        variants={popup}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        exit="hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;

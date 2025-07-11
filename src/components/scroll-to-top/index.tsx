import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./index.module.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const distance = -startY;
    const duration = 800;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * easing);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  if (!showButton) return null;

  return (
    <div
      className={styles["scroll-to-top-button"]}
      onClick={scrollToTop}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <Icon
        icon="hugeicons:arrow-up-double"
        height={20}
        width={20}
        color="var(--text-light)"
        className={styles["fadeUp"]}
      />
    </div>
  );
};

export default ScrollToTopButton;

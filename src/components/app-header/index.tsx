import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import SwitchButton from "../switch-button";
import { useNavigate } from "react-router";

type Props = {
  activeNav?: number;
};
type NavItem = {
  navLabel: string;
  id: string;
  tabindex: number;
};

const AppHeaderComponent: React.FC<Props> = ({ activeNav }) => {
  const [navIndex, setNavIndex] = useState<number>(0);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const navigate = useNavigate();

  const navLinks: NavItem[] = [
    { navLabel: "Home", id: "intro-section", tabindex: 0 },
    { navLabel: "About Us", id: "aboutus-section", tabindex: 1 },
    { navLabel: "Services", id: "services-section", tabindex: 2 },
    { navLabel: "Blog", id: "blogs-section", tabindex: 3 },
    { navLabel: "Contact", id: "contact", tabindex: 4 },
  ];

  useEffect(() => {
    activeNav ? setNavIndex(activeNav) : null;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset to account for header height

      // Find which section is currently in view
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setNavIndex(navLinks[i].tabindex);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  const scrollToWithAnimation = (targetY: number, duration = 1000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

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

  const onNavItemClick = (nav: NavItem) => {
    setNavIndex(nav.tabindex);
    const scrollToSection = (id: string) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 83;
        scrollToWithAnimation(elementPosition - offset, 1000);
      }
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(nav.id);
      }, 300);
    } else {
      setNavIndex(3);
      scrollToSection(nav.id);
    }
  };

  return (
    <header
      className={`${styles["header-layer"]} ${styles["show"]} py-4`}
      id="app-header"
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center gap-2">
            <div className={styles["logo-circle"]}>S</div>
            <h5 className={styles["brand-name"]}>Sancus LLP</h5>
          </div>

          <ul className="m-0 p-0 list-unstyled d-flex justify-content-center gap-4 align-items-center">
            {navLinks.map((nav: NavItem, index) => (
              <li
                key={nav.id}
                className={`${styles["nav-item"]} px-2 py-1 cursor-pointer ${
                  index === navIndex ? styles["active-nav-item"] : "nav-item"
                }`}
              >
                <a
                  className={styles["nav-link"]}
                  tabIndex={nav.tabindex}
                  onClick={() => onNavItemClick(nav)}
                >
                  {nav.navLabel}
                </a>
              </li>
            ))}
          </ul>

          <SwitchButton mode={mode} onChange={setMode} />
        </div>
      </div>
    </header>
  );
};

export default AppHeaderComponent;

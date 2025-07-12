import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import SwitchButton from "../switch-button";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  activeNav?: number;
};
type NavItem = {
  navLabel: string;
  id: string;
  tabindex: number;
  icon?: string;
};

const AppHeaderComponent: React.FC<Props> = ({ activeNav }) => {
  const [navIndex, setNavIndex] = useState<number>(0);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const navigate = useNavigate();
  const [showSidebar, setShowsidebar] = useState<boolean>(false);

  const navLinks: NavItem[] = [
    {
      navLabel: "Home",
      id: "intro-section",
      tabindex: 0,
      icon: "solar:home-2-linear",
    },
    {
      navLabel: "About Us",
      id: "aboutus-section",
      tabindex: 1,
      icon: "solar:users-group-rounded-linear",
    },
    {
      navLabel: "Services",
      id: "services-section",
      tabindex: 2,
      icon: "solar:settings-minimalistic-linear",
    },
    {
      navLabel: "Blog",
      id: "blogs-section",
      tabindex: 3,
      icon: "solar:document-text-linear",
    },
    {
      navLabel: "Contact",
      id: "contact",
      tabindex: 4,
      icon: "solar:letter-linear",
    },
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
    <>
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

            <ul
              className={
                styles["menu-option"] +
                " " +
                "m-0 p-0 list-unstyled justify-content-center gap-4 align-items-center"
              }
            >
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

            <div className="d-flex justify-content-end align-items-center gap-2">
              <SwitchButton mode={mode} onChange={setMode} />
              <div
                className="close-icon d-md-none d-flex"
                onClick={() => setShowsidebar(!showSidebar)}
              >
                <Icon
                  icon={
                    showSidebar
                      ? "line-md:menu-to-close-transition"
                      : "hugeicons:menu-collapse"
                  }
                  height={32}
                  width={32}
                  color="var(--text-light)"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showSidebar ? (
        <>
          <div className={styles["sidebar-overlay"] + " " + "fadeIn"}>
            <div className={styles["sidebar-content"]}>
              <ul className="m-0 p-0 list-unstyled">
                {navLinks?.map((nav, index) => (
                  <li
                    key={nav.id + "_" + index}
                    onClick={() => onNavItemClick(nav)}
                  >
                    <div
                      className={`${styles["sidebar-item"]} mb-3 ${
                        index === navIndex
                          ? styles["active-sidebar-item"]
                          : "sidebar-item"
                      }`}
                    >
                      <Icon
                        icon={nav?.icon as string}
                        height={20}
                        width={20}
                        className={styles["icon-class"]}
                      ></Icon>
                      <h6 className="m-0">{nav.navLabel}</h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AppHeaderComponent;

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useLandingPageStore } from "../../store/landing-page-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const LeadershipContentComponenet: React.FC<Props> = () => {
  const { LeadershipData } = useLandingPageStore();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const goToNext = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % LeadershipData.length);
  };

  const goToPrev = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? LeadershipData.length - 1 : prev - 1));
  };

  const goToSlide = (i: number) => {
    setDirection(i > index ? "right" : "left");
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 10000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section
      className={`spacing-class gradient ${styles["leadership-section"]} overflow-hidden`}
    >
      <div className="container">
        <h2 className={styles["leadership-title"]} data-aos="fade-up">
          <span className="theme-text">Leadership</span> & Expertise
        </h2>
        <p
          className={styles["leadership-subtitle"]}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The firm is led by four distinguished partners, collectively bringing
          over two decades of experience and courtroom acumen. Each partner
          commands a team of Associates, Paralegals, and Court Clerks to ensure
          seamless legal service delivery.
        </p>

        <div
          className={styles.carousel}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={goToPrev}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Icon icon="pepicons-print:angle-left" height={20} width={20} />
          </button>

          <div
            className={styles.slide}
            key={index}
            data-aos={direction === "right" ? "fade-left" : "fade-right"}
            data-aos-duration="500"
          >
            <div className="d-flex w-full gap-md-3 gap-2 mb-3 align-items-center">
              <div className={styles["icon"]}>
                <Icon
                  icon={LeadershipData[index].icon}
                  height={"85%"}
                  width={"85%"}
                  color="var(--text-light)"
                />
              </div>
              <div className={styles["card-content"]}>
                <h2 className="text-start">{LeadershipData[index].name}</h2>
                <h4 className="text-start">{LeadershipData[index].role}</h4>
              </div>
            </div>
            <p
              className={`${styles.location} my-3 d-flex justify-content-start align-items-center`}
            >
              {LeadershipData[index].location}
            </p>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: LeadershipData[index].descriptionHtml,
              }}
            />
          </div>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={goToNext}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Icon icon="pepicons-print:angle-right" height={20} width={20} />
          </button>

          <div
            className={styles.controls}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {LeadershipData.map((_, i) => (
              <span
                key={i}
                onClick={() => goToSlide(i)}
                className={`${styles.dot} ${index === i ? styles.active : ""}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipContentComponenet;

import React from "react";
import styles from "./index.module.css";
import { useLandingPageStore } from "../../store/landing-page-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const LeadershipContentComponenet: React.FC<Props> = () => {
  const { LeadershipData } = useLandingPageStore();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  const CustomDot = ({ onClick, active }: any) => (
    <span
      onClick={onClick}
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: active ? "var(--theme-color, #c5a059)" : "#ccc",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: active ? "scale(1.3)" : "scale(1)",
        display: "inline-block",
        margin: "0 4px",
      }}
    />
  );

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
          <Carousel
            responsive={responsive}
            arrows
            infinite
            autoPlay={true}
            autoPlaySpeed={10000}
            showDots
            customDot={<CustomDot />}
            renderDotsOutside={true}
            keyBoardControl
            dotListClass={styles["dotList"]}
            customTransition="all 0.5s ease"
            containerClass={styles["carousel-container"]}
            itemClass={styles["carousel-item"]}
            customLeftArrow={
              <button className={`${styles.arrow} ${styles.left}`}>
                <Icon icon="pepicons-print:angle-left" height={20} width={20} />
              </button>
            }
            customRightArrow={
              <button className={`${styles.arrow} ${styles.right}`}>
                <Icon
                  icon="pepicons-print:angle-right"
                  height={20}
                  width={20}
                />
              </button>
            }
          >
            {LeadershipData.map((item, index) => (
              <div className={styles.slide} key={index}>
                <div className="d-flex w-full gap-md-3 gap-2 mb-3 align-items-center">
                  <div className={styles.icon}>
                    <Icon
                      icon={item.icon}
                      height={"85%"}
                      width={"85%"}
                      color="var(--text-light)"
                    />
                  </div>
                  <div className={styles["card-content"]}>
                    <h2 className="text-start">{item.name}</h2>
                    <h4 className="text-start">{item.role}</h4>
                  </div>
                </div>
                <p
                  className={`${styles.location} my-3 d-flex justify-content-start align-items-center`}
                >
                  {item.location}
                </p>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: item.descriptionHtml,
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LeadershipContentComponenet;

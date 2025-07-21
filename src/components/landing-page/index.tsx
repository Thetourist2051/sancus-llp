import React, { useEffect } from "react";
import styles from "./index.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLandingPageStore } from "../../store/landing-page-store";
import ContactFormComponenet from "../contact-form";
import LeadershipContentComponenet from "../leadership-content";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogPosts } from "../../data/blogData";
import BlogCardComponent from "../blog-card";
import { useNavigate } from "react-router";
import AppFooterComponent from "../app-footer";
import ScrollToTopButton from "../scroll-to-top";

const LandingPageComponent: React.FC = () => {
  const { LegalServices } = useLandingPageStore();
  const navigate = useNavigate();

  const scrollToWithAnimation = (targetY: number, duration = 800) => {
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

  const scrollToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const targetY = documentHeight - viewportHeight;
    scrollToWithAnimation(targetY, 1000);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const navigateToBlogPage = () => {
    navigate("blog");
  };

  const onFreeConsultationClick = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offset = 83;
      scrollToWithAnimation(elementPosition - offset, 1000);
    }
  };

  const onMoreAboutUsClick = () => {
    const targetElement = document.getElementById("aboutus-section");
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offset = 83;
      scrollToWithAnimation(elementPosition - offset, 1000);
    }
  };

  return (
    <>
      <ScrollToTopButton data-aos="none" data-aos-delay="0" />
      <section
        className={`spacing-class gradient ${styles["intro-section"]}`}
        id="intro-section"
      >
        <div className="container">
          <div className="row m-0 px-0 pt-0 position-relative pb-5">
            <div className={styles["bouncing-ball"]}></div>
            <div className={styles["bouncing-ball-2"]}></div>
            <div className="col-md-7 col-12 p-0">
              <div className="h-100 d-flex gap-4 flex-column justify-content-center position-relative">
                <div className="after-element"></div>
                <h2 data-aos="fade-up">
                  We provide creative solutions to turn your ideas into digital
                  reality.
                </h2>
                <p data-aos="fade-up" data-aos-delay="100">
                  Transform your legal practice with innovative digital
                  solutions. We combine cutting-edge technology with deep legal
                  expertise to deliver exceptional results.
                </p>
                <div
                  className="d-flex align-items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <button
                    className="fancy-button-1"
                    onClick={() => onMoreAboutUsClick()}
                  >
                    More About Us
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-5 d-md-block d-none p-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Legal professionals collaborating"
                loading="lazy"
              />
            </div>

            <div
              className={styles["scroll-down-indicator"]}
              onClick={scrollToBottom}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p>Scroll to Bottom</p>
              <span className={styles["scroll-icon"]}>
                <Icon
                  icon="streamline-ultimate:arrow-double-down-1"
                  height={16}
                  width={16}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`spacing-class alternate-gradient ${styles["aboutus-section"]}`}
        id="aboutus-section"
      >
        <div className="container">
          <h2
            className={styles["section-title"]}
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
          >
            About <span>Sancus LLP</span>
          </h2>

          <p
            className={styles["section-subtitle"]}
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
          >
            We pride ourselves on combining courtroom excellence with strategic
            foresight, offering both contentious and non-contentious legal
            support.
          </p>

          <div className="row m-0 p-0">
            <div className="col-md-6 d-flex flex-column gap-3 gap-4 justify-content-center py-4 px-md-4 px-0">
              <p
                className={
                  styles["section-description"] + " " + styles["class-p"]
                }
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-easing="ease-out-cubic"
              >
                <span className="theme-text">Sancus Legal LLP</span> is a
                premier full-service law firm headquartered in{" "}
                <span className="theme-text">New Delhi</span>, with a robust
                operational footprint across{" "}
                <span className="theme-text">New Delhi</span>,{" "}
                <span className="theme-text">Patna</span>,{" "}
                <span className="theme-text">Ranchi</span>,{" "}
                <span className="theme-text">Allahabad</span> and{" "}
                <span className="theme-text">Kolkata</span>. We deliver
                end-to-end legal solutions—from strategic advisory to rigorous
                litigation—across a diverse spectrum of legal disciplines. Our
                multidisciplinary teams ensure that our clients receive
                proactive, result-oriented, and nuanced counsel at every stage
                of their legal journey.
              </p>
            </div>

            <div
              className="col-md-6 py-4 ps-md-4 pe-md-0 px-0"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-easing="ease-out-cubic"
            >
              <ul className={styles["feature-list"]}>
                <li
                  className={styles["scroll-animate"]}
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="500"
                >
                  <Icon
                    className={styles["icon"]}
                    icon="material-symbols-light:check-rounded"
                  ></Icon>
                  <span>
                    The{" "}
                    <span className="theme-text">
                      Hon'ble Supreme Court of India
                    </span>
                  </span>
                </li>
                <li
                  className={styles["scroll-animate"]}
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <Icon
                    className={styles["icon"]}
                    icon="material-symbols-light:check-rounded"
                  ></Icon>
                  <span>
                    Various <span className="theme-text">High Courts</span>{" "}
                    (Delhi, Bihar, Jharkhand, West Bengal and Uttar Pradesh)
                  </span>
                </li>
                <li
                  className={styles["scroll-animate"]}
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <Icon
                    className={styles["icon"]}
                    icon="material-symbols-light:check-rounded"
                  ></Icon>
                  <span>
                    A wide array of{" "}
                    <span className="theme-text">
                      Tribunals, Quasi-judicial Authorities
                    </span>
                    , and <span className="theme-text">Statutory Forums</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className={`spacing-class gradient ${styles["corevalue-section"]}`}
        id="corevalue-section"
      >
        <div className="container">
          <div data-aos="fade-up">
            <h2 className={styles["core-value-title"]}>
              Our <span className="theme-text">Core Values</span>
            </h2>
            <p className={styles["core-value-subtitle"]}>
              At <span className="theme-text">Sancus LLP</span>, we are
              committed to providing transparent, timely, and expert legal
              services.
              <br />
              Our values shape every client interaction and outcome we pursue.
            </p>
          </div>

          <div className="row px-2">
            {CoreValues.map((item, index) => (
              <div
                key={item.id}
                className={`col-md-4 ${styles["col-class"]}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div
                  className={`${styles["core-value-card"]} card-hover text-center`}
                >
                  <div className={styles["core-value-icon"]}>
                    <Icon
                      icon={item.icon}
                      height={30}
                      width={30}
                      color="var(--text-light)"
                      className="icon-animated"
                    />
                  </div>
                  <h5 className={`${styles["core-value-label"]} my-3`}>
                    {item.label}
                  </h5>
                  <p
                    className={`${styles["core-value-description"]} ellipsis-text-3-line`}
                  >
                    {item.description}
                  </p>
                  <div className={styles["bubble_card"]}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        className={`spacing-class gradient ${styles["services-section"]}`}
        id="services-section"
      >
        <div className="container">
          <div data-aos="fade-up">
            <h2 className={styles["service-title"]}>
              Our <span className="theme-text">Legal Services</span>
            </h2>
            <p className={styles["service-subtitle"]}>
              We provide comprehensive legal services across multiple practice
              areas, ensuring expert representation tailored to your specific
              needs.
            </p>
          </div>

          <div className="row justify-content-center">
            {LegalServices.map((service, index) => (
              <div
                key={service.id}
                className={`col-md-4 ${styles["card-col"]}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className={`${styles["legal-card"]}`}>
                  <div className={styles["icon"]}>
                    <Icon
                      icon={service.icon}
                      width={26}
                      height={26}
                      className="icon-animated"
                    />
                  </div>
                  <h5 className={styles["card-title"]}>{service.label}</h5>
                  <p
                    className={`${styles["card-description"]} ellipsis-text-3-line`}
                  >
                    {service.description}
                  </p>
                  <ul className={styles["points-list"]}>
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex}>✓ {point}</li>
                    ))}
                  </ul>
                  {/* <a href="#" className={styles["learn-more"]}>
                    {service.cta} →
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`spacing-class alternate-gradient ${styles["blog-section"]}`}
        id="blogs-section"
      >
        <div className="container">
          <h2 className={styles["blog-title"]} data-aos="fade-up">
            Legal<span className="theme-text"> Insights</span> & News
          </h2>
          <p
            className={styles["blog-subtitle"]}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay informed with the latest legal developments, expert analysis,
            and practical advice from our experienced team of attorneys.
          </p>

          <div className="row justify-content-center mb-md-5 mb-3">
            {blogPosts.map(
              (blog, index) =>
                index < 3 && (
                  <>
                    <BlogCardComponent
                      blog={blog}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100 + 200}`}
                    />
                  </>
                )
            )}
          </div>

          <div
            className="d-flex justify-content-center align-items-center pb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button className="fancy-button-3" onClick={navigateToBlogPage}>
              <Icon
                icon={"material-symbols-light:arrow-right-alt"}
                className="arr-2"
                height={20}
                width={20}
              />
              <span className="text">Browse All Blogs</span>
              <span className="circle"></span>
              <Icon
                icon={"material-symbols-light:arrow-right-alt"}
                className="arr-1"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </section>

      <section className={`spacing-class gradient ${styles["cta-section"]}`}>
        <div className="container text-center" data-aos="zoom-in">
          <h2 className={styles["cta-title"]}>
            Need <span className="theme-text">Legal</span> Assistance?
          </h2>
          <p className={styles["cta-subtitle"]}>
            Our experienced legal team is ready to help you navigate complex
            legal challenges. Contact us today for a confidential consultation.
          </p>
          <button className="fancy-button-2" onClick={onFreeConsultationClick}>
            <span className="text">Get Consultation</span>
          </button>
        </div>
      </section>

      <LeadershipContentComponenet />
      <ContactFormComponenet />
      <AppFooterComponent />
    </>
  );
};

export default LandingPageComponent;

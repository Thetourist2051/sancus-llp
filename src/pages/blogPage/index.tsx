import { useEffect } from "react";
import AppHeaderComponent from "../../components/app-header";
import BlogCardComponent from "../../components/blog-card";
import { blogPosts } from "../../data/blogData";
import styles from "./index.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const BlogPage = ({}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <AppHeaderComponent activeNav={3}  />
      <section
        className={`spacing-class gradient ${styles["intro-section"]}`}
        id="blog-page-section"
      >
        <div className="container">
          <h4
            className={styles["page-title"] + " " + "text-center"}
            data-aos="fade-up"
          >
            <span className="theme-text">Insights</span> & Innovations
          </h4>
          <p
            className={styles["page-subtitle"]}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore thought leadership, digital strategies, and practical
            guidance to elevate your legal practice in a rapidly evolving
            digital world.
          </p>

          <div className="row justify-content-center">
            {blogPosts.map((blog, index) => (
              <BlogCardComponent
                blog={blog}
                data-aos="fade-up"
                data-aos-delay={150 * (index % 3)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

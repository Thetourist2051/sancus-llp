import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import AppHeaderComponent from "../../components/app-header";
import styles from "./index.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import AOS from "aos";
import "aos/dist/aos.css";
import AppFooterComponent from "../../components/app-footer";
import ScrollToTopButton from "../../components/scroll-to-top";
import { useLandingPageStore } from "../../store/landing-page-store";
import blogPlaceholder from "../../assets/blogPlaceholder.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
}

const BlogPost = () => {
  const navigate = useNavigate();
  const { blogsPost } = useLandingPageStore();
  const { title } = useParams<{ title: string }>();
  const selectedBlog = blogsPost.find((blog) => blog.title === title);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    window.scrollTo(0, 0);
  }, []);

  const onBackToBlogs = () => {
    navigate("/blog");
  };

  if (!selectedBlog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
      <AppHeaderComponent activeNav={3} />
      <section
        className={`py-md-5 py-4 px-md-0 px-3 gradient ${styles["blogpost-section"]}`}
        id="blogpost-section"
      >
        <div className="container">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div
                className={styles["back-btn"] + " " + "mb-3"}
                onClick={onBackToBlogs}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Icon
                  icon={"basil:arrow-left-outline"}
                  height={20}
                  width={20}
                />
                <span>Back To Blogs</span>
              </div>

              <div
                className={styles["category-chip"] + " " + "my-3"}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {selectedBlog.categoryName}
              </div>

              <h3 className="my-3 py-1" data-aos="fade-up" data-aos-delay="200">
                {selectedBlog.title}
              </h3>

              <div
                className="d-flex gap-3 align-items-center justify-content-start my-3 py-1 flex-wrap"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    icon={"solar:calendar-broken"}
                    color={"var(--text-muted)"}
                    height={20}
                    width={20}
                  />
                  <h6>{selectedBlog.createdAt}</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    icon={"solar:user-circle-broken"}
                    height={20}
                    width={20}
                    color={"var(--text-muted)"}
                  />
                  <h6>{selectedBlog.writtenBy}</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    icon={"fluent:read-aloud-24-regular"}
                    height={20}
                    width={20}
                    color={"var(--text-muted)"}
                  />
                  <h6>{selectedBlog.readTime} mins</h6>
                </div>
              </div>

              <img
                className="mb-md-5 mb-3"
                alt={selectedBlog.title}
                data-aos="zoom-in"
                data-aos-delay="300"
                src={`http://localhost:3000/${selectedBlog.image}`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = blogPlaceholder;
                }}
              />

              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
                data-aos="fade-up"
                data-aos-delay="350"
              ></div>

              <div
                className="tags-section mt-4 mb-3 pt-3"
                style={{ borderTop: "1px solid var(--text-muted)" }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="d-flex flex-wrap align-items-center gap-3">
                  {selectedBlog?.tags?.split(",")?.map((tag, index) => (
                    <div
                      key={index}
                      className={
                        styles["tag"] + " " + "d-flex gap-2 align-items-center"
                      }
                    >
                      <Icon icon={"fa:tags"} height={20} width={20}></Icon>
                      <h6>{tag}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton data-aos="none" />
      <AppFooterComponent />
    </>
  );
};

export default BlogPost;

import { Icon } from "@iconify/react/dist/iconify.js";
import type { BlogPost } from "../../data/blogData";
import styles from "./index.module.css";
import { useNavigate } from "react-router";

type Props = {
  blog: BlogPost;
};

const BlogCardComponent = ({ blog, ...aosProps }: Props) => {
  const navigate = useNavigate();

  const onReadMoreClick = () => {
    navigate(`/blog/${blog.title}`);
  };
  return (
    <>
      <div
        key={blog.id}
        {...aosProps}
        className={`col-md-4 mb-3 ${styles["blog-col"]}`}
      >
        <div className={styles["blog-card"]}>
          <div className={styles["image-container"]}>
            <img src={blog.image} alt={blog.title} />
            <div className={styles["image-overlay"]}></div>
            <div className={styles["category-floating"]}>{blog.category}</div>
          </div>
          <div className={styles["card-content"]}>
            <div className="d-flex justify-content-between align-items-center px-0 mb-3">
              <div className="d-flex align-items-center gap-2">
                <Icon icon={"solar:calendar-broken"} height={14} width={14} />
                <h6>{blog.date}</h6>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Icon
                  icon={"solar:user-circle-broken"}
                  height={14}
                  width={14}
                />
                <h6>{blog.author}</h6>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Icon
                  icon={"fluent:read-aloud-24-regular"}
                  height={14}
                  width={14}
                />
                <h6>{blog.readTime} mins</h6>
              </div>
            </div>
            <h3 className="ellipsis-text-2-line">{blog.title}</h3>
            <h5 className="ellipsis-text-3-line">{blog.excerpt}</h5>
            <div
              className={styles["read-more"]}
              onClick={() => onReadMoreClick()}
            >
              <span>Read More</span>
              <Icon icon={"basil:arrow-right-outline"} height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardComponent;

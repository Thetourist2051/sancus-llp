import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./index.module.css";
import { useNavigate } from "react-router";
import type { BlogPost } from "../../store/landing-page-store";
import blogPlaceholder from "../../assets/blogPlaceholder.jpg";

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
            <img
              src={`http://localhost:3000/${blog.image}`}
              alt={blog.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = blogPlaceholder;
              }}
            />
            <div className={styles["image-overlay"]}></div>
            <div className={styles["category-floating"]}>
              {blog.categoryName}
            </div>
          </div>
          <div className={styles["card-content"]}>
            <div className="d-flex justify-content-between align-items-center px-0 mb-3">
              <div className="d-flex align-items-center gap-2">
                <Icon
                  color="var(--text-muted)"
                  icon={"solar:calendar-broken"}
                  height={14}
                  width={14}
                />
                <h6>{blog.createdAt}</h6>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Icon
                  color="var(--text-muted)"
                  icon={"solar:user-circle-broken"}
                  height={14}
                  width={14}
                />
                <h6>{blog.writtenBy}</h6>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Icon
                  color="var(--text-muted)"
                  icon={"fluent:read-aloud-24-regular"}
                  height={14}
                  width={14}
                />
                <h6>{blog?.readTime} mins</h6>
              </div>
            </div>
            <h3 className="ellipsis-text-2-line">{blog.title}</h3>
            <h5 className="ellipsis-text-3-line">{blog?.summary}</h5>
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

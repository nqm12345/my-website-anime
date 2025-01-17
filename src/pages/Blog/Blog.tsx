import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../Data/Blogs"; // Đường dẫn đến file blogs.ts
import "./Blog.css";

const Blog = () => {
  const backgroundImage = "/images/blog_bg.jpg";

  return (
    <section
      className="blog-area blog-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-post-item">
                <div className="blog-post-thumb">
                  <Link to={`/blog-details/${blog.id}`}>
                    <img src={blog.images[0]} alt={blog.title} />
                  </Link>
                </div>
                <div className="blog-post-content">
                  <span className="date">
                    <i className="far fa-clock" />{" "}
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                  <h2 className="title">
                    <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p>{blog.desc}</p>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        <i className="far fa-user" /> bởi{" "}
                        <a href="#">{blog.author}</a>
                      </li>
                      <li>
                        <i className="far fa-thumbs-up" /> {blog.likes}
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <a href="#">{blog.comments} Bình luận</a>
                      </li>
                    </ul>
                    <div className="read-more">
                      <Link to={`/blog-details/${blog.id}`}>
                        Đọc Thêm <i className="fas fa-angle-double-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="pagination-wrap mt-60">
              <nav>
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">Tiếp</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="blog-sidebar">
              <div className="widget blog-widget">
                <div className="widget-title mb-30">
                  <h5 className="title">Tìm Kiếm</h5>
                </div>
                <form action="#" className="sidebar-search">
                  <input type="text" placeholder="Tìm kiếm..." />
                  <button>
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget blog-widget">
                <div className="widget-title mb-30">
                  <h5 className="title">Danh Mục</h5>
                </div>
                <div className="sidebar-cat">
                  <ul>
                    <li>
                      <a href="#">Phim</a> <span>12</span>
                    </li>
                    <li>
                      <a href="#">Phim Hành Động</a> <span>10</span>
                    </li>
                    <li>
                      <a href="#">Trực Tuyến</a> <span>9</span>
                    </li>
                    <li>
                      <a href="#">Tải Về</a> <span>16</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
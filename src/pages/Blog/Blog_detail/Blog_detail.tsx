import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../../Data/Blogs"; // Đường dẫn đến file blogs.ts

const Blog_detail = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === parseInt(id!));
    const backgroundImage = "/images/tr_movies_bg.jpg";

    if (!blog) {
        return <div>Blog không tìm thấy</div>;
    }

    return (
        <section className="blog-details-area blog-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-item blog-details-wrap">
                            <div className="blog-post-thumb">
                                <img src={blog.images[0]} alt={blog.title} />
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-details-top-meta">
                                    <span className="user">
                                        <i className="far fa-user" /> bởi <a href="#">{blog.author}</a>
                                    </span>
                                    <span className="date">
                                        <i className="far fa-clock" /> {new Date(blog.publishedAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <h2 className="title">{blog.title}</h2>
                                <p>{blog.desc}</p>

                                <div className="blog-img-wrap">
                                    <div className="row">
                                        {blog.images.slice(1).map((img, index) => (
                                            <div key={index} className="col-sm-6">
                                                <img src={img} alt={`Blog image ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="blog-post-meta">
                                    <div className="blog-details-tags">
                                        <ul>
                                            <li><i className="fas fa-tags" /> <span>Tags :</span></li>
                                            <li><a href="#">Phim ,</a> <a href="#">Sáng tạo ,</a> <a href="#">Tin tức ,</a> <a href="#">Tiếng Anh</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-post-share">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-pinterest-p" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="avatar-post mt-40 mb-80">
                            <div className="post-avatar-img">
                                <img src="/images/avatar/517a4ef09e4afcc6afb2cf6fc06f8bfa.jpg" alt="img" />
                            </div>
                            <div className="post-avatar-content">
                                <h5>Genos</h5>
                                <p>Ngành in ấn và sắp chữ. Lorem Ipsum đã là văn bản chuẩn của ngành từ những năm 1500, khi một nhà in ẩn danh lấy một tủ mẫu và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn nhảy vọt vào sắp chữ điện tử, vẫn giữ nguyên bản chất.</p>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-comment mb-80">
                            <div className="widget-title mb-45">
                                <h5 className="title">Bình luận (02)</h5>
                            </div>
                            <ul>
                                <li>
                                    <div className="single-comment">
                                        <div className="comment-avatar-img">
                                            <img src="/images/avatar/thumb-1920-367029.png" alt="img" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="comment-avatar-info">
                                                <h5>Gon<span className="comment-date">13 Tháng 11, 2021</span></h5>
                                                <a href="#" className="comment-reply-link">Trả lời <i className="fas fa-reply-all" /></a>
                                            </div>
                                            <p>Bài viết rất hay và chi tiết. Cảm ơn tác giả đã chia sẻ!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="comment-reply">
                                    <div className="single-comment">
                                        <div className="comment-avatar-img">
                                            <img src="/images/avatar/03a44ef259593d7540d179611882def0.jpg" alt="img" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="comment-avatar-info">
                                                <h5>Killua<span className="comment-date">13 Tháng 11, 2021</span></h5>
                                                <a href="#" className="comment-reply-link">Trả lời <i className="fas fa-reply-all" /></a>
                                            </div>
                                            <p>Tôi rất thích bài viết này. Rất hữu ích và nhiều thông tin!</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-form-wrap">
                            <div className="widget-title mb-50">
                                <h5 className="title">Đăng Bình Luận</h5>
                            </div>
                            <div className="contact-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Tên của bạn *" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder="Email của bạn *" />
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Chủ đề *" />
                                    <textarea name="message" placeholder="Nhập nội dung bình luận..." defaultValue={""} />
                                    <button className="btn">Gửi Bình Luận</button>
                                </form>
                            </div>
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
                                    <button><i className="fas fa-search" /></button>
                                </form>
                            </div>
                            <div className="widget blog-widget">
                                <div className="widget-title mb-30">
                                    <h5 className="title">Danh Mục</h5>
                                </div>
                                <div className="sidebar-cat">
                                    <ul>
                                        <li><a href="#">Phim</a> <span>12</span></li>
                                        <li><a href="#">Phim Hành Động</a> <span>10</span></li>
                                        <li><a href="#">Trực Tuyến</a> <span>9</span></li>
                                        <li><a href="#">Tải Về</a> <span>16</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget blog-widget">
                                <div className="widget-title mb-30">
                                    <h5 className="title">Bài Viết Gần Đây</h5>
                                </div>
                                <div className="rc-post">
                                    <ul>
                                        <li className="rc-post-item">
                                            <div className="thumb">
                                                <a href=""><img src="img/blog/rc_post_thumb01.jpg" alt="" /></a>
                                            </div>
                                            <div className="content">
                                                <h5 className="title"><a href="">Quản lý hiệu quả</a></h5>
                                                <span className="date"><i className="far fa-clock" /> 10 Tháng 3, 2021</span>
                                            </div>
                                        </li>
                                        <li className="rc-post-item">
                                            <div className="thumb"><a href=""><img src="img/blog/rc_post_thumb02.jpg" alt="" /></a></div>
                                            <div className="content">
                                                <h5 className="title"><a href="blog-details.html">Xem phim tiếng Anh miễn phí ở đâu?</a></h5>
                                                <span className="date"><i className="far fa-clock" /> 10 Tháng 3, 2021</span>
                                            </div>
                                        </li>
                                        <li className="rc-post-item">
                                            <div className="thumb"><a href=""><img src="img/blog/rc_post_thumb03.jpg" alt="" /></a></div>
                                            <div className="content">
                                                <h5 className="title"><a href="">Website xem phim tại nhà</a></h5>
                                                <span className="date"><i className="far fa-clock" /> 10 Tháng 3, 2021</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget blog-widget">
                                <div className="widget-title mb-30"><h5 className="title">Tag Bài Viết</h5></div>
                                <div className="tag-list">
                                    <ul>
                                        <li><a href="#">Phim</a></li>
                                        <li><a href="#">Sáng tạo</a></li>
                                        <li><a href="#">Tin tức</a></li>
                                        <li><a href="#">Lãng mạn</a></li>
                                        <li><a href="#">Ai</a></li>
                                        <li><a href="#">Tiếng Anh</a></li>
                                        <li><a href="#">Pha trộn</a></li>
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

export default Blog_detail;
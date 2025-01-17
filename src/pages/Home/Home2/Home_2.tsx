import React from "react";
import './Home_2.scss';
const Home_2 = () => {
    const backgroundImage = "/images/services_bg.jpg";
    return (
        <section
            className="services-area services-bg"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container banner-services">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="services-img-wrap">
                            <img src="/images/services_img.jpg" alt="Hình ảnh anime" />
                            <a
                                href="/images/anime_img.jpg"
                                className="download-btn"
                                download=""
                            >
                                Tải xuống <img src="/images/download.svg" alt="Tải xuống" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-content-wrap">
                            <div className="section-title title-style-two mb-20">
                                <span className="sub-title">Anime Của Chúng Tôi</span>
                                <h2 className="title">Tải xuống các anime yêu thích để xem ngoại tuyến.</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
                                tempor. Có nhiều biến thể của Lorem Ipsum có sẵn, nhưng phần lớn đã bị
                                thay đổi bằng các nội dung chèn hài hước.
                            </p>
                            <div className="services-list">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-drupal"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Thưởng thức trên TV của bạn.</h5>
                                            <p>
                                                Xem các chương trình và bộ phim anime trên màn hình lớn với chất lượng tốt nhất.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-flickr-alt" />
                                        </div>
                                        <div className="content">
                                            <h5>Xem ở mọi nơi.</h5>
                                            <p>
                                                Tận hưởng trải nghiệm xem anime linh hoạt trên bất kỳ thiết bị nào, mọi lúc, mọi nơi.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_2;
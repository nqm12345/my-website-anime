import React from "react";
import './Home_4.scss';
import { Col } from "antd";
import CountUp from "react-countup";

const Home_4 = () => {
    return (
        <section className="live-area live-bg fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title title-style-two mb-25">
                            <span className="sub-title">ANIME TRỰC TUYẾN</span>
                            <h2 className="title">
                                Anime và Chương Trình Trực Tiếp Dành Riêng Cho Bạn
                            </h2>
                        </div>
                        <div className="live-anime-content">
                            <p>
                                Khám phá thế giới anime đa dạng, từ hành động đến lãng mạn. Với
                                chất lượng hình ảnh tuyệt vời, mỗi khoảnh khắc đều đáng nhớ.
                            </p>
                            <div className="live-fact-wrap">
                                <div className="resolution">
                                    <h2>HD 4K</h2>
                                </div>
                                <div className="active-customer">
                                    <h4 className="statistic-wrapper">
                                        <Col span={12}>
                                            <CountUp
                                                className="odometer"
                                                start={0}
                                                end={80}
                                                duration={25}
                                                separator="," />
                                        </Col>
                                        <span className="statistic-unit">K+</span>
                                    </h4>
                                    <p>Người Xem Anime Hoạt Động</p>
                                </div>
                            </div>
                            <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="btn popup-video">
                                <i className="fas fa-play" /> Xem Ngay
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div
                            className="live-anime-img wow fadeInRight"
                            data-wow-delay=".2s"
                            data-wow-duration="1.8s">
                            <img src="/images/live_img.png" alt="Anime Live" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_4;

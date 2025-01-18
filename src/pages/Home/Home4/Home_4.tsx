import React, { useEffect, useState } from "react";
import './Home_4.scss';
import { Col } from "antd";
import CountUp from "react-countup";

const Home_4 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleVideo = () => {
        setIsOpen(!isOpen);
    };

    // ✅ Ngăn cuộn trang khi modal video mở
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Dọn dẹp khi component bị hủy
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);


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
                            <li className="banner-btn" onClick={toggleVideo}>
                                <a href="#!">
                                    <i className="ti-control-play"></i> XEM NGAY
                                </a>
                            </li>
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
            {/* ✅ Modal Video */}
            {isOpen && (
                <div className="video-modal">
                    <div className="video-content">
                        <span
                            className="close-btn"
                            onClick={toggleVideo}
                            onTouchEnd={toggleVideo} // Đảm bảo hoạt động trên di động
                        >
                            &times;
                        </span>
                        <iframe
                            width="900"
                            height="315"
                            src="https://www.youtube.com/embed/Pm-wNmS9RGI"
                            title="Trình phát video YouTube"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home_4;

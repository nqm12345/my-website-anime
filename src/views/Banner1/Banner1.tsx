import React, { useState, useEffect } from "react";
import "./Banner1.scss";

const Banner1 = () => {
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
        <div className="banner1-container">
            {/* ✅ Phần nền */}
            <div className="background-header">
                {/* ✅ Phần nội dung */}
                <div className="container">
                    <div className="box-content-banner1">
                        <div className="title-banner1">
                            <h6 className="sub-title">Movflx</h6>
                            <h2 className="sub-title-h2">
                                Không giới hạn <span className="span-color">Anime</span>, TV
                                <br />
                                Show, & Nhiều hơn nữa.
                            </h2>
                            <ul className="flex-content">
                                <li className="quality">
                                    <span className="span-pg">PG 18</span>
                                    <span className="span-hd">HD</span>
                                </li>
                                <li className="category">
                                    <a className="a-category-one" href="#">Hành động,</a>
                                    <a className="a-category-two" href="#"> Kịch tính</a>
                                </li>
                                <li className="release-time">
                                    <span>
                                        <i className="ti-calendar icon-calendar"></i>
                                        2025
                                    </span>
                                    <span className="span-clock">
                                        <i className="ti-time icon-clock"></i>
                                        128 phút
                                    </span>
                                </li>
                            </ul>
                            <li className="banner-btn" onClick={toggleVideo}>
                                <a href="#!">
                                    <i className="ti-control-play"></i> XEM NGAY
                                </a>
                            </li>
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
        </div>
    );
};

export default Banner1;

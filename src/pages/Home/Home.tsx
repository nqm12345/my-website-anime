import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import movies from "../../Data/Movies";
const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isDragging = useRef(false);
    const isClick = useRef(true);
    const owlStageRef = useRef<HTMLDivElement | null>(null);
    const [isDraggingState, setIsDraggingState] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    const getFilteredMovies = () => {
        if (activeIndex === 0) {
            return movies;
        } else if (activeIndex === 1) {
            return movies.filter(movie => movie.category === "Movie");
        } else if (activeIndex === 2) {
            return movies.filter(movie => movie.category === "Anime");
        }
        return movies;
    };

    const handleScroll = (direction: number) => {
        if (owlStageRef.current) {
            const scrollAmount = 220;
            owlStageRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
        }
    };

    const handleStart = (clientX: number) => {
        if (owlStageRef.current) {
            startX.current = clientX;
            scrollLeft.current = owlStageRef.current.scrollLeft;
            isDragging.current = true;
            setIsDraggingState(true);
            isClick.current = true;
        }
    };

    const handleMove = (clientX: number) => {
        if (!owlStageRef.current || !isDragging.current) return;

        const dx = clientX - startX.current;
        if (Math.abs(dx) > 5) {
            isClick.current = false;
            owlStageRef.current.scrollLeft = scrollLeft.current - dx;
        }
    };

    const handleEnd = () => {
        isDragging.current = false;
        setIsDraggingState(false);
        setTimeout(() => {
            isClick.current = true;
        }, 50);
    };

    const handleItemClick = (title: string) => {
        if (isClick.current) {
            navigate(`/movie_details/${title}`);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            handleMove(e.pageX);
        };

        const handleMouseUp = () => {
            handleEnd();
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (owlStageRef.current) {
                if (owlStageRef.current.scrollLeft === 0) {
                    owlStageRef.current.scrollLeft = owlStageRef.current.scrollWidth / 3;
                } else if (owlStageRef.current.scrollLeft >= owlStageRef.current.scrollWidth * 2 / 3) {
                    owlStageRef.current.scrollLeft = owlStageRef.current.scrollWidth / 3;
                }
            }
        };

        if (owlStageRef.current) {
            owlStageRef.current.addEventListener('scroll', handleScroll);
            owlStageRef.current.scrollLeft = owlStageRef.current.scrollWidth / 3;
        }

        return () => {
            if (owlStageRef.current) {
                owlStageRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="main-home">
            <div className="container">
                <div className="section-title">
                    <div className="box-section-one">
                        <div className="span-title-home">
                            <span>TRỰC TUYẾN</span>
                        </div>
                        <h2 className="h2-title-home">Các bộ anime nổi bật</h2>
                    </div>
                    <div className="box-section-two">
                        <div className="ucm-nav-wrap">
                            <ul className="nav">
                                {["Tất cả", "Movie", "Anime"].map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <button
                                            type="button"
                                            className={`nav-link-btn ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleNavClick(index)}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="owl-nav">
                                <i
                                    className="ti-angle-left icon-angle"
                                    onClick={() => handleScroll(-1)}
                                ></i>
                                <div className="btn-height"></div>
                                <i
                                    className="ti-angle-right icon-angle"
                                    onClick={() => handleScroll(1)}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="owl-stage"
                    ref={owlStageRef}
                    onMouseDown={(e) => handleStart(e.pageX)}
                    onTouchStart={(e) => handleStart(e.touches[0].pageX)}
                    onTouchMove={(e) => handleMove(e.touches[0].pageX)}
                    onTouchEnd={handleEnd}
                    style={{ touchAction: 'none', overflowX: 'auto', scrollBehavior: 'smooth' }}
                >
                    {[...getFilteredMovies(), ...getFilteredMovies(), ...getFilteredMovies()].map((movie, index) => (
                        <div
                            className="box"
                            key={index}
                            onClick={() => handleItemClick(movie.title)}
                        >
                            <div className="box-item">
                                <div className="img-card">
                                    <img src={movie.imgSrc} alt={movie.title} />
                                </div>
                                <div className="movies-content">
                                    <div className="top">
                                        <h5 className="h5-title">
                                            <a href="#">{movie.title}</a>
                                        </h5>
                                        <span className="date">
                                            {movie.year}
                                        </span>
                                    </div>
                                    <ul className="ul-desc">
                                        <span className="video-quality">
                                            {movie.quality}
                                        </span>
                                        <div className="li-duration">
                                            <span className="duration">
                                                <i className="ti-time font-icon"></i>
                                                <h6 className="h6-duration">{movie.duration}</h6>
                                            </span>
                                            <span className="movies-rating">
                                                <i className="ti-thumb-up font-icon"></i>
                                                <h6 className="h6-duration">{movie.rating}</h6>
                                            </span>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

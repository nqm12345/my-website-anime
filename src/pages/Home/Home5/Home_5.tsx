import React, { useRef } from "react";
import './Home_5.scss';
import movies from "../../../Data/Movies";
import { useNavigate } from "react-router-dom";

const Home_5 = () => {
    const isClick = useRef(true);
    const navigate = useNavigate();
    const handleItemClick = (title: string) => {
        if (isClick.current) {
            navigate(`/movie_details/${title}`);
        }
     };
    return (
        <section className="tv-series-area tv-series-bg banner_home5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-50">
                            <span className="sub-title">Loạt Phim Hay Nhất</span>
                            <h2 className="title">Loạt Phim TV Hay Nhất Thế Giới</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {movies.map((movie, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                            <div onClick={() => handleItemClick(movie.title)} className="movie-item mb-50">
                                <div className="movie-poster">
                                    <a href="">
                                        <img src={movie.imgSrc} alt={movie.title} />
                                    </a>
                                </div>
                                <div className="movie-content">
                                    <div className="top">
                                        <h5 className="title">
                                            <a href="movie-details.html">{movie.title}</a>
                                        </h5>
                                        <span className="date">{movie.year}</span>
                                    </div>
                                    <div className="bottom">
                                        <ul>
                                            <li>
                                                <span className="quality">{movie.quality}</span>
                                            </li>
                                            <li>
                                                <span className="duration">
                                                    <i className="far fa-clock" /> {movie.duration}
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-thumbs-up" /> {movie.rating}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home_5;

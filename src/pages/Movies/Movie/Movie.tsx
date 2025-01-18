import React, { useRef, useState } from "react";
import './Movie.css';
import movies from "../../../Data/Movies";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [qualityFilter, setQualityFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState("");

  const navigate = useNavigate();
  const isClick = useRef(true);

  const handleItemClick = (title: string) => {
    if (isClick.current) {
      navigate(`/movie_details/${title}`);
    }
  };

  const handleTrailerClick = (trailer: string) => {
    setCurrentTrailer(trailer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTrailer("");
  };

  // Lọc phim dựa vào bộ lọc category và quality
  const filteredMovies = movies.filter((movie) => {
    const matchesCategory =
      categoryFilter === "All" || movie.category === categoryFilter;
    const matchesQuality =
      qualityFilter === "All" || movie.quality === qualityFilter;
    return matchesCategory && matchesQuality;
  });

  return (
    <section className="movie-area movie-bg banner_movie">
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-lg-6">
            <div className="section-title text-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '5px' }}>
              <span className="sub-title">TRUYỀN HÌNH ONLINE</span>
              <h2 className="title">Phim Mới Ra Mắt</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="movie-page-meta">
              <div className="tr-movie-menu-active text-center">
                <button
                  className={categoryFilter === "Anime" ? "active" : ""}
                  onClick={() => setCategoryFilter("Anime")}
                >
                  Hoạt Hình
                </button>
                <button
                  className={categoryFilter === "Movie" ? "active" : ""}
                  onClick={() => setCategoryFilter("Movie")}
                >
                  Phim
                </button>
                <button
                  className={categoryFilter === "All" ? "active" : ""}
                  onClick={() => setCategoryFilter("All")}
                >
                  Tất Cả
                </button>
              </div>
              <form action="#" className="movie-filter-form">
                <select
                  className="custom-select"
                  onChange={(e) => setQualityFilter(e.target.value)}
                >
                  <option value="All">Tất Cả</option>
                  <option value="8K">8K</option>
                  <option value="4K">4K</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {filteredMovies.map((movie, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img src={movie.imgSrc} alt={movie.title} />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <button
                        className="btn"
                        onClick={() => handleTrailerClick(movie.trailer)}
                      >
                        Xem Ngay
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn"
                        onClick={() => handleItemClick(movie.title)}
                      >
                        Chi Tiết
                      </button>
                    </li>
                  </ul>
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
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={handleCloseModal}>
                &times;
              </button>
              <iframe
                width="100%"
                height="400px"
                src={currentTrailer}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movie;

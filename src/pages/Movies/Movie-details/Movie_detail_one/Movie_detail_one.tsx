import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Movie_detail_one.css';
import movies from "../../../../Data/Movies";

const MovieDetailOne = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const backgroundImage = "/images/movie_details_bg.jpg";
  const backgroundImage2 = "/images/episode_bg.jpg";

  const movie = movies.find((movie) => movie.title === title);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!movie) {
    return <div>Phim không tìm thấy</div>;
  }

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleWatchNow = () => {
    if (movie.episodes && movie.episodes.length > 0) {
      navigate(`/video/${movie.title}`, { 
        state: { 
          videoSrc: movie.episodes[0].video, 
          videoTitle: movie.episodes[0].name, 
          posterSrc: movie.episodes[0].poster, // Thêm trường poster
          episodes: movie.episodes 
        } 
      });
    }
  };

  const handleEpisodeClick = (episode) => {
    navigate(`/video/${movie.title}`, { 
      state: { 
        videoSrc: episode.video, 
        videoTitle: episode.name, 
        posterSrc: episode.poster, // Thêm trường poster
        episodes: movie.episodes 
      } 
    });
  };

  return (
    <>
      <section
        className="movie-details-area"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-3 col-lg-4">
              <div className="movie-details-img">
                <img src={movie.imgSrc} alt={movie.title} />
                <a
                  onClick={toggleModal}
                  className="popup-video"
                >
                  <img src="/images/play_icon.png" alt="Play" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="movie-details-content">
                <h5>Tập Mới</h5>
                <h2>
                  {movie.title} <span>{movie.category}</span>
                </h2>
                <div className="banner-meta">
                  <ul>
                    <li className="quality">
                      <span>{movie.quality}</span>
                      <span>hd</span>
                    </li>
                    <li className="category">
                      <a href="#">{movie.category}</a>
                    </li>
                    <li className="release-time">
                      <span>
                        <i className="far fa-calendar-alt" /> {movie.year}
                      </span>
                      <span>
                        <i className="far fa-clock" /> {movie.duration}
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                 {movie.desc}
                </p>
                <div className="movie-details-prime">
                  <ul>
                    <li className="share">
                      <a href="#">
                        <i className="fas fa-share-alt" /> Chia sẻ
                      </a>
                    </li>
                    <li className="streaming">
                      <h6>Prime Video</h6>
                      <span>Kênh phát sóng</span>
                    </li>
                    <li className="watch">
                      <button
                        onClick={handleWatchNow}
                        className="btn popup-video"
                      >
                        <i className="fas fa-play" /> Xem Ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="movie-details-btn">
              <a
                href="img/poster/movie_details_img.jpg"
                className="download-btn"
                download=""
              >
                Tải về <img src="/src/assets/images/download.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>
              X
            </button>
            <iframe
              width="100%"
              height="500"
              src={movie.trailer}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <section
        className="episode-area episode-bg"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="movie-episode-wrap">
                <div className="episode-top-wrap">
                  <div className="section-title">
                    <span className="sub-title">PHÁT SÓNG TRỰC TUYẾN</span>
                    <h2 className="title">Xem Tập đầy đủ</h2>
                  </div>
                  <div className="total-views-count">
                    <p>
                      2.7 triệu <i className="far fa-eye" />
                    </p>
                  </div>
                </div>
                <div className="episode-watch-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <button
                          className="btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="season">Mùa 2</span>
                          <span className="video-count">5 Tập đầy đủ</span>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          {movie.episodes && movie.episodes.length > 0 ? (
                            <ul>
                              {movie.episodes.map((episode, index) => (
                                <li key={index}>
                                  <a
                                    onClick={() => handleEpisodeClick(episode)}
                                    className="popup-video"
                                  >
                                    <i className="fas fa-play" /> {episode.name}
                                  </a>
                                  <span className="duration">
                                    <i className="far fa-clock" /> {episode.duration}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>Không có tập nào để hiển thị.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetailOne;
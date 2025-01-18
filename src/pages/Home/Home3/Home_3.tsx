import React, { useRef, useState } from "react";
import './Home_3.scss';
import movies from "../../../Data/Movies";
import { useNavigate } from "react-router-dom";

const Home_3 = () => {
   const [activeCategory, setActiveCategory] = useState("*");
   const navigate = useNavigate();
   const isClick = useRef(true);

   const handleItemClick = (title: string) => {
      if (isClick.current) {
         navigate(`/movie_details/${title}`);
      }
   };
   // Lọc phim theo danh mục
   const filteredMovies = movies.filter((movie) =>
      activeCategory === "*" || movie.category.toLowerCase() === activeCategory.toLowerCase()
   );

   return (
      <section className="top-rated-movie tr-movie-bg banner_home3">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="section-title text-center mb-50" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
                     <span className="sub-title">PHÁT TRỰC TUYẾN</span>
                     <h2 className="title">Phim Được Đánh Giá Cao</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center" style={{ marginTop: "50px" }}>
               <div className="col-lg-8">
                  <div className="tr-movie-menu-active text-center">
                     <button
                        className={activeCategory === "*" ? "active" : ""}
                        onClick={() => setActiveCategory("*")}
                     >
                        Tất Cả
                     </button>
                     <button
                        className={activeCategory === "movie" ? "active" : ""}
                        onClick={() => setActiveCategory("movie")}
                     >
                        Phim
                     </button>
                     <button
                        className={activeCategory === "anime" ? "active" : ""}
                        onClick={() => setActiveCategory("anime")}
                     >
                        Hoạt Hình
                     </button>
                     <button
                        className={activeCategory === "documentary" ? "active" : ""}
                        onClick={() => setActiveCategory("documentary")}
                     >
                        Tài Liệu
                     </button>
                     <button
                        className={activeCategory === "sports" ? "active" : ""}
                        onClick={() => setActiveCategory("sports")}
                     >
                        Thể Thao
                     </button>
                  </div>
               </div>
            </div>

            <div className="row tr-movie-active" style={{ marginTop: "0" }}>
               {filteredMovies.map((movie, index) => (
                  <div key={index} className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                     <div className="movie-item mb-60" onClick={() => handleItemClick(movie.title)}>
                        <div className="movie-poster">
                           <a href="">
                              <img src={movie.imgSrc} alt={movie.title} />
                           </a>
                        </div>
                        <div className="movie-content">
                           <div className="top">
                              <h5 className="title">
                                 <a href="">{movie.title}</a>
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

export default Home_3;

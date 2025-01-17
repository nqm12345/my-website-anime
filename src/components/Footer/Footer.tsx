import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <a href="index.html">Trang Chủ</a>
                      </li>
                      <li>
                        <a href="index.html">Phim</a>
                      </li>
                      <li>
                        <a href="index.html">Chương Trình TV</a>
                      </li>
                      <li>
                        <a href="index.html">Trang</a>
                      </li>
                      <li>
                        <a href="pricing.html">Giá Cả</a>
                      </li>
                    </ul>
                    <div className="footer-search">
                      <form action="#">
                        <input type="text" placeholder="Tìm Phim Yêu Thích" />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li>
                      <a href="#">Câu Hỏi Thường Gặp (FAQ)</a>
                    </li>
                    <li>
                      <a href="#">Trung Tâm Hỗ Trợ</a>
                    </li>
                    <li>
                      <a href="#">Điều Khoản Sử Dụng</a>
                    </li>
                    <li>
                      <a href="#">Quyền Riêng Tư</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Bản Quyền © 2021. Tất Cả Quyền Lợi Được Bảo Lưu Bởi{" "}
                  <a href="index.html">Movflx</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="payment-method-img text-center text-md-right">
                <img src="/card_img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

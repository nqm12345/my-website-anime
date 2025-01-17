import React from "react";
import './Pricing.css';

const Pricing = () => {
  const backgroundImage2 = "/images/episode_bg.jpg";

  return (
    <section
      className="pricing-area pricing-bg"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-three text-center mb-70">
              <span className="sub-title">Các gói giá của chúng tôi</span>
              <h2 className="title">Chiến lược giá của chúng tôi</h2>
            </div>
          </div>
        </div>
        <div className="pricing-box-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item mb-30">
                <div className="pricing-top">
                  <h6>cao cấp</h6>
                  <div className="price">
                    <h3>$7.99</h3>
                    <span>Hàng tháng</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality">
                      <i className="fas fa-check" /> Chất lượng video <span>Tốt</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Độ phân giải <span>480p</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Số màn hình có thể xem{" "}
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Hủy bất cứ lúc nào
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="btn">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item active mb-30">
                <div className="pricing-top">
                  <h6>chuẩn</h6>
                  <div className="price">
                    <h3>$9.99</h3>
                    <span>Hàng tháng</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality">
                      <i className="fas fa-check" /> Chất lượng video{" "}
                      <span>Tốt hơn</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Độ phân giải <span>1080p</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Số màn hình có thể xem{" "}
                      <span>2</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Hủy bất cứ lúc nào
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="btn">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item mb-30">
                <div className="pricing-top">
                  <h6>cao cấp</h6>
                  <div className="price">
                    <h3>$11.99</h3>
                    <span>Hàng tháng</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality">
                      <i className="fas fa-check" /> Chất lượng video <span>Tốt nhất</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Độ phân giải <span>4K+HDR</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Số màn hình có thể xem{" "}
                      <span>4</span>
                    </li>
                    <li>
                      <i className="fas fa-check" /> Hủy bất cứ lúc nào
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="btn">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from "react";
import './Home_6.scss';

const Home_6 = () => {
  return (
    <section className="newsletter-area newsletter-bg banner_home6">
      <div className="container">
        <div className="newsletter-inner-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h4>Khởi động thử nghiệm 30 ngày đầu tiên.</h4>
                <p>Nhập email của bạn để tạo mới hoặc khởi động lại tư cách thành viên của bạn.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#" className="newsletter-form">
                <input type="email" placeholder="Nhập email của bạn" />
                <button className="btn">Bắt đầu ngay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Home_6;

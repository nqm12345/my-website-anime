import React from "react";

const Banner4 = () => {
  const backgroundImage = "/public/images/breadcrumb_bg.jpg";

  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">
                Kế Hoạch <span>Của Chúng Tôi</span>
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Báo Giá
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner4;

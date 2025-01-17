import React from "react";

const Banner5 = () => {
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
                Cập Nhật <span>Tin Tức</span>
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Trang Blog
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

export default Banner5;

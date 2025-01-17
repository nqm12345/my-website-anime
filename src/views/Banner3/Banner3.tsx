import React from "react";

const Banner3 = () => {
  const backgroundImage = "/images/breadcrumb_bg.jpg";

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
                Chương Trình <span>Truyền Hình</span>
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Chương Trình Truyền Hình
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

export default Banner3;

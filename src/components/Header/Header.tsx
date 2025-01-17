import React, { useState } from 'react';
import "./Header.scss";
import { Drawer } from 'antd';

const Header = () => {
  const [activeNav, setActiveNav] = useState('HOME'); // Mục mặc định là HOME
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <header>
        <div id="sticky-header" className="menu-area transparent-header">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav show">
                    <div className="logo">
                      <a href="index.html">
                        <img src="/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={`menu-item-has-children ${activeNav === 'HOME' ? 'active' : ''}`}>
                          <a href="/">Trang Chủ</a>
                        </li>
                        <li className={`menu-item-has-children ${activeNav === 'MOVIE' ? 'active' : ''}`}>
                          <a href="/movie">Anime</a>
                          <ul className="submenu">
                            <li className={activeNav === 'MOVIE' ? 'active' : ''}>
                              <a href="/movie">Anime</a>
                            </li>
                          </ul>
                        </li>
                        <li className={activeNav === 'TV SHOW' ? 'active' : ''}>
                          <a href="/tv_show">Chương Trình TV</a>
                        </li>
                        <li className={activeNav === 'PRICING' ? 'active' : ''}>
                          <a href="/pricing">Giá Cả</a>
                        </li>
                        <li className={`menu-item-has-children ${activeNav === 'BLOG' ? 'active' : ''}`}>
                          <a href="/blog">Blog</a>
                          <ul className="submenu">
                            <li className={activeNav === 'BLOG' ? 'active' : ''}>
                              <a href="blog.html">Blog Của Chúng Tôi</a>
                            </li>
                          </ul>
                        </li>
                        <li className={activeNav === 'CONTACTS' ? 'active' : ''}>
                          <a href="/contact">Liên Hệ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul>
                        <li className="header-search">
                          <a href="#">
                            <i className="fas fa-search" />
                          </a>
                        </li>
                        <li className="header-lang">
                          <form>
                            <div className="icon">
                              <i className="fas fa-globe"></i>

                            </div>
                            <select>
                              <option>Tiếng Anh</option>
                              <option>Tiếng Úc</option>
                              <option>Tiếng Ả Rập</option>
                              <option>Tiếng Thổ Nhĩ Kỳ</option>
                            </select>
                          </form>
                        </li>
                        <li className="header-btn">
                          <a href="#" className="btn">
                            Đăng Nhập
                          </a>
                        </li>
                      </ul>
                    </div>
                    <i className='ti-menu menu-none' onClick={showDrawer}></i>
                    <Drawer
                      placement="right"
                      open={open}
                      onClose={onClose}
                      className="custom-drawer"
                      width={300}
                      title={
                        <div className="logo-menu">
                          <img src="/logo.png" alt="Logo" />
                        </div>
                      }
                    >
                      <div className='navbar-menu'>
                        {[
                          { label: 'Trang Chủ', href: '/' },
                          { label: 'Anime', href: '/movie' },
                          { label: 'Chương Trình TV', href: '/tv_show' },
                          { label: 'Giá Cả', href: '/pricing' },
                          { label: 'Blog', href: '/blog' },
                          { label: 'Liên Hệ', href: '/contact' },
                        ].map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className={activeNav === item.label.toUpperCase() ? 'active' : ''}
                            onClick={() => {
                              setActiveNav(item.label.toUpperCase());
                              onClose(); // Đóng Drawer sau khi chọn
                            }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>

                      <div className="social-links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-menu">
                          <i className="ti-twitter-alt"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-menu">
                          <i className="ti-facebook"></i>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="icon-menu">
                          <i className="ti-pinterest"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-menu">
                          <i className="ti-instagram"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-menu">
                          <i className="ti-youtube"></i>
                        </a>
                      </div>
                    </Drawer>

                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

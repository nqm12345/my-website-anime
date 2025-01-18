import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { Drawer } from 'antd';

const Header = () => {
  const [activeNav, setActiveNav] = useState('');
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Trang Chủ', href: '/', key: 'HOME' },
    { label: 'Anime', href: '/movie', key: 'MOVIE' },
    { label: 'Chương Trình TV', href: '/tv_show', key: 'TV SHOW' },
    { label: 'Giá Cả', href: '/pricing', key: 'PRICING' },
    { label: 'Blog', href: '/blog', key: 'BLOG' },
    { label: 'Liên Hệ', href: '/contact', key: 'CONTACTS' }
  ];

  useEffect(() => {
    // Function to determine the active menu item based on the current URL
    const determineActiveNav = () => {
      const currentPath = window.location.pathname;
      const currentItem = menuItems.find(item => item.href === currentPath);
      if (currentItem) {
        setActiveNav(currentItem.key);
      }
    };

    // Determine the active nav on component mount
    determineActiveNav();

    // Listen to URL changes
    window.addEventListener('popstate', determineActiveNav);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('popstate', determineActiveNav);
    };
  }, [menuItems]);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

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
                        {menuItems.map((item) => (
                          <li key={item.key} className={`menu-item-has-children ${activeNav === item.key ? 'active' : ''}`}>
                            <a href={item.href} onClick={() => setActiveNav(item.key)}>{item.label}</a>
                          </li>
                        ))}
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
                          <a href="#" className="btn">Đăng Nhập</a>
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
                        {menuItems.map((item) => (
                          <a
                            key={item.key}
                            href={item.href}
                            className={activeNav === item.key ? 'active' : ''}
                            onClick={() => {
                              setActiveNav(item.key);
                              onClose();
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
import React from 'react';
import Header from "./Header/Header.tsx";
import Footer from './Footer/Footer.tsx';
import Home_6 from '../pages/Home/Home6/Home_6.tsx';
interface LayoutProps {
  children?: React.ReactNode; // Dấu "?" giúp children là tùy chọn
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log("Layout component is rendering...");
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Home_6 />
      <Footer />
    </div>
  );
};

export default Layout;

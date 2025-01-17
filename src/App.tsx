// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Banner1 from './views/Banner1/Banner1';
import Home from './pages/Home/Home';
import Home_2 from './pages/Home/Home2/Home_2';
import Home_3 from './pages/Home/Home3/Home_3';
import Home_4 from './pages/Home/Home4/Home_4';
import Home_5 from './pages/Home/Home5/Home_5';
import Home_6 from './pages/Home/Home6/Home_6';
import Banner2 from './views/Banner2/Banner2';
import Movie from './pages/Movies/Movie/Movie';
import Movie_detail_one from './pages/Movies/Movie-details/Movie_detail_one/Movie_detail_one';
import Banner3 from './views/Banner3/Banner3';
import Banner4 from './views/Banner4/Banner4';
import Pricing from './pages/Pricing/Pricing';
import Banner5 from './views/Banner5/Banner5';
import Blog from './pages/Blog/Blog';
import VideoPlayer from './layouts/Video';
import Banner6 from './views/Banner6/Banner6';
import Contact from './pages/Contact/Contact';
import Blog_detail from './pages/Blog/Blog_detail/Blog_detail';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Banner1 />
            <Home />
            <Home_2 />
            <Home_3 />
            <Home_4 />
            <Home_5 />

          </Layout>
        }
      />
      <Route
        path="/movie"
        element={
          <Layout>
            <Banner2 />
            <Movie />
          </Layout>
        }
      />

      <Route
        path="/movie_details/:title"
        element={
          <Layout>
            <Movie_detail_one />
            <Home_5 />
          </Layout>
        }
      />
      <Route
        path="/tv_show"
        element={
          <Layout>
            <Banner3 />
            <Movie />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <Banner4 />
            <Pricing />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <Banner4 />
            <Pricing />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <Banner5 />
            <Blog />
          </Layout>
        }
      />
       <Route
        path="/blog-details/:id"
        element={
          <Layout>
            <Banner5 />
            <Blog_detail />
          </Layout>
        }
      />
      <Route
        path="/video/:title"
        element={
          <Layout>
            <VideoPlayer />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Banner6 />
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

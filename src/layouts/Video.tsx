import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import { Link } from "react-router-dom";
import "./Video.css";

const VideoPlayer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoSrc, videoTitle, episodes, posterSrc } = location.state || {};
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);
  const [currentPosterSrc, setCurrentPosterSrc] = useState(posterSrc);
  const [currentVideoTitle, setCurrentVideoTitle] = useState(videoTitle);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(
    episodes ? episodes.findIndex((episode) => episode.video === videoSrc) : 0
  );

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleSpeedChange = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    message.info(`Tốc độ phát đã được đặt thành ${speed}x`);
  };

  const handleQualityChange = (quality: string) => {
    message.success(`Đã thay đổi chất lượng thành: ${quality}p`);
  };

  const handleEpisodeChange = (episode: any, index: number) => {
    setCurrentVideoSrc(episode.video);
    setCurrentPosterSrc(episode.poster); // Cập nhật ảnh đại diện
    setCurrentVideoTitle(episode.name);
    setCurrentEpisodeIndex(index);
    navigate(location.pathname, {
      state: {
        ...location.state,
        videoSrc: episode.video,
        videoTitle: episode.name,
        episodes: episodes,
        posterSrc: episode.poster, // Cập nhật ảnh đại diện trong state
      },
    });
  };

  const handleTouchStart = () => {
    handlePlayPause();
  };

  return (
    <div className="background_color">
      <div className="video-page">
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/categories">Danh mục</Link>
            </li>
            <li>
              <Link to="/categories/romance">Lãng mạn</Link>
            </li>
            <li>
              <span>{currentVideoTitle || "Video"}</span>
            </li>
          </ul>
        </nav>

        <div className="video-container">
          <video
            ref={videoRef}
            className="video"
            controls
            src={currentVideoSrc || "/src/assets/videos/default_video.mp4"}
            poster={currentPosterSrc || "/src/assets/poster/default_poster.jpg"} // Hiển thị poster của tập phim hiện tại
            onTouchStart={handleTouchStart} // Thêm sự kiện cảm ứng
          ></video>
          <div className="controls">
            <button onClick={handlePlayPause}>Phát/Tạm dừng</button>
            <button onClick={() => handleSpeedChange(0.5)}>0.5x</button>
            <button onClick={() => handleSpeedChange(1)}>1x</button>
            <button onClick={() => handleSpeedChange(1.5)}>1.5x</button>
            <button onClick={() => handleSpeedChange(2)}>2x</button>
            <button onClick={handleFullScreen}>Toàn màn hình</button>
            <select onChange={(e) => handleQualityChange(e.target.value)}>
              <option value="360">360p</option>
              <option value="720">720p</option>
              <option value="1080">1080p</option>
            </select>
          </div>
        </div>

        <div className="episode-list">
          <h3>Tập phim</h3>
          <div className="episodes">
            {episodes && episodes.length > 0 ? (
              episodes.map((episode, index) => (
                <div key={index} className={`episode-item ${index === currentEpisodeIndex ? "active" : ""}`}>
                  <button
                    className={`episode-btn ${index === currentEpisodeIndex ? "active" : ""}`}
                    onClick={() => handleEpisodeChange(episode, index)}
                  >
                    {`Tập ${index + 1}`}
                  </button>
                </div>
              ))
            ) : (
              <p>Không có tập nào để hiển thị.</p>
            )}
          </div>
        </div>

        <div className="reviews">
          <h3>Đánh giá</h3>
          <div className="review">
            <img
              src="/public/images/avatar/images.jpg"
              alt="Chris Curry"
              className="avatar"
            />
            <p>
              <strong>Chris Curry</strong> - 1 giờ trước
            </p>
            <p>Ai vừa phát hiện có người xếp phim này vào thể loại "quỷ"? LOL</p>
          </div>
          <div className="review">
            <img
              src="/public/images/avatar/thumb-1920-367029.png"
              alt="Lewis Wen"
              className="avatar"
            />
            <p>
              <strong>Lewis Wen</strong> - 5 giờ trước
            </p>
            <p>Cuối cùng thì phim cũng ra mắt 5 ngày trước</p>
          </div>
          <div className="review">
            <img
              src="/public/images/avatar/517a4ef09e4afcc6afb2cf6fc06f8bfa.jpg"
              alt="Louis Tyler"
              className="avatar"
            />
            <p>
              <strong>Louis Tyler</strong> - 20 giờ trước
            </p>
            <p>Tập 13 đâu rồi? Cập nhật chậm quá!</p>
          </div>
        </div>

        <div className="comment-section">
          <h3>Bình luận của bạn</h3>
          <textarea placeholder="Nhập bình luận của bạn"></textarea>
          <button className="submit-comment">Gửi</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
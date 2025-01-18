import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { message } from "antd";
import { Link } from "react-router-dom";
import "./Video.css";

const VideoPlayer: React.FC = () => {
  const location = useLocation();
  const { videoSrc, videoTitle, episodes, posterSrc } = location.state || {};
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentVideoSrc, setCurrentVideoSrc] = useState(
    videoSrc && videoSrc.endsWith(".mp4") ? videoSrc : "/video_trailer/one_punch_man_s3_trailer.mp4"
  );
  const [currentPosterSrc, setCurrentPosterSrc] = useState(
    posterSrc || "/assets/poster/default_poster.jpg"
  );
  const [currentVideoTitle, setCurrentVideoTitle] = useState(videoTitle || "Video");
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
    setCurrentPosterSrc(episode.poster);
    setCurrentVideoTitle(episode.name);
    setCurrentEpisodeIndex(index);
  };

  const handleTouchStart = () => {
    if (videoRef.current && videoRef.current.paused) {
      handlePlayPause();
    }
  };

  const isValidSource = (src: string | undefined) => {
    return src && (src.startsWith("http") || src.startsWith("/"));
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
              <span>{currentVideoTitle}</span>
            </li>
          </ul>
        </nav>

        <div className="video-container">
          {isValidSource(currentVideoSrc) ? (
            <video
              ref={videoRef}
              className="video"
              controls
              src={currentVideoSrc}
              poster={currentPosterSrc}
              onTouchStart={handleTouchStart}
            >
              <source src={currentVideoSrc} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          ) : (
            <p>Video không khả dụng.</p>
          )}
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
            <img src="/images/avatar/images.jpg" alt="Chris Curry" className="avatar" />
            <p>
              <strong>Chris Curry</strong> - 1 giờ trước
            </p>
            <p>Ai vừa phát hiện có người xếp phim này vào thể loại "quỷ"? LOL</p>
          </div>
          <div className="review">
            <img src="/images/avatar/thumb-1920-367029.png" alt="Lewis Wen" className="avatar" />
            <p>
              <strong>Lewis Wen</strong> - 5 giờ trước
            </p>
            <p>Cuối cùng thì phim cũng ra mắt 5 ngày trước</p>
          </div>
          <div className="review">
            <img src="/images/avatar/517a4ef09e4afcc6afb2cf6fc06f8bfa.jpg" alt="Louis Tyler" className="avatar" />
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

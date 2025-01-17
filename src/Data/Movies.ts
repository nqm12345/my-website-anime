interface Episode {
  id: string;
  name: string;
  video: string;
  duration: string;
  poster: string;
}

interface Movie {
  id: string;
  title: string;
  year: number;
  quality: string;
  duration: string;
  rating: number;
  category: string;
  imgSrc: string;
  trailer: string;
  desc: string;
  episodes: Episode[];
}

const movies: Movie[] = [
  {
    id: "1",
    title: "One Punch Man Season 1",
    year: 2025,
    quality: "8K",
    duration: "24 tập",
    rating: 4.9,
    category: "Anime",
    imgSrc: "/images/one-punch-man-season-1.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "One Punch Man kể về Saitama, một anh hùng có thể đánh bại bất kỳ kẻ thù nào chỉ với một cú đấm.",
    episodes: [
      {
        id: "1",
        name: "Tập 1: Thực thi chính nghĩa",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/ss1_tap1.jpg", // Không cần /public
      },
      {
        id: "2",
        name: "Tập 2: Chàng Cyborg cô độc",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/ss1_tap2.jpg", // Không cần /public
      },
    ],
  },
  {
    id: "2",
    title: "One Piece Stampede",
    year: 2025,
    quality: "4K",
    duration: "120 phút",
    rating: 4.8,
    category: "Movie",
    imgSrc: "/images/one-piece-stampede.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "One Piece Stampede là một bộ phim anime hành động dựa trên bộ truyện tranh nổi tiếng One Piece.",
    episodes: [
      {
        id: "1",
        name: "Movie: Lễ Hội Hải Tặc",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "120 phút",
        poster: "/poster/one_pice_movie.jpg", // Không cần /public
      },
    ],
  },
  {
    id: "3",
    title: "Demon Slayer Movie",
    year: 2025,
    quality: "8K",
    duration: "128 phút",
    rating: 4.5,
    category: "Movie",
    imgSrc: "/images/MV5BZWEyNGI0ZDMtZTI0Yi00OTU5LWJjNGYtODFhNjdhMDg4MGJlXkEyXkFqcGc@._V1_.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "Demon Slayer Movie là một bộ phim hành động kịch tính và đầy cảm xúc dựa trên bộ truyện tranh nổi tiếng Demon Slayer.",
    episodes: [
      {
        id: "1",
        name: "Movie: Demon Slayer - Mugen Train",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "120 phút",
        poster: "/poster/Demon-Slayer-The-Movie-Review-Featured.webp", // Không cần /public
      },
    ],
  },
  {
    id: "4",
    title: "Naruto Movie 4",
    year: 2022,
    quality: "4K",
    duration: "120 phút",
    rating: 4.0,
    category: "Movie",
    imgSrc: "/images/unnamed.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "Naruto Movie 4 kể về cuộc phiêu lưu mới của Naruto và các đồng đội.",
    episodes: [
      {
        id: "1",
        name: "Movie: Tòa tháp bị mất",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "120 phút",
        poster: "/poster/naruto-movie-4.jpg", // Không cần /public
      },
    ],
  },
  {
    id: "5",
    title: "Dragon Ball Heroes",
    year: 2024,
    quality: "HD",
    duration: "118 phút",
    rating: 4.5,
    category: "Anime",
    imgSrc: "/images/MV5BNmZjYWI2MWQtYmJiZC00MTkwLWIwNGQtNTRjYzRmNmYyZjA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "Dragon Ball Heroes là một bộ phim dựa trên bộ truyện tranh nổi tiếng Dragon Ball.",
    episodes: [
      {
        id: "1",
        name: "Tập 1: Dragon Ball Heroes",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/pjimage-2020-07-16T222924.472.jpg", // Không cần /public
      },
      {
        id: "2",
        name: "Tập 2: Dragon Ball Heroes",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/af2d1968c23147d6aaa768a5fadc19b3d4722c68.jpg", // Không cần /public
      },
    ],
  },
  {
    id: "6",
    title: "Hunter x Hunter",
    year: 2024,
    quality: "HD",
    duration: "118 phút",
    rating: 4.5,
    category: "Anime",
    imgSrc: "/images/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg", // Không cần /public
    trailer: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
    desc: "Hunter x Hunter là một bộ phim dựa trên bộ truyện tranh nổi tiếng Hunter x Hunter.",
    episodes: [
      {
        id: "1",
        name: "Tập 1: Dragon Ball Heroes",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/pjimage-2020-07-16T222924.472.jpg", // Không cần /public
      },
      {
        id: "2",
        name: "Tập 2: Dragon Ball Heroes",
        video: "/video_trailer/y2mate.com - One Punch Man Season 3  Official Trailer  AniTV_1080.mp4", // Không cần /public
        duration: "24 phút",
        poster: "/poster/af2d1968c23147d6aaa768a5fadc19b3d4722c68.jpg", // Không cần /public
      },
    ],
  },
];

export default movies;

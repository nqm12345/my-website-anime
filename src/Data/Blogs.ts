export type Blog = {
    id: number;
    title: string;
    images: string[]; // Thay đổi từ img thành mảng images để chứa nhiều ảnh
    desc: string;
    author: string;
    likes: number;
    comments: number;
    publishedAt: string;
};

const blogs: Blog[] = [
    {
        id: 1,
        title: "Top Anime đáng xem nhất năm 2025",
        images: [ // Thay đổi img thành mảng images
            "/images/blogs/maxresdefault.jpg",
            "/images/blogs/top-phim-hoat-hinh-nhat-ban-hay-nhat.jpg",
            "/images/blogs/sc-1.jpg",
        ],
        desc: "Khám phá danh sách các bộ anime không thể bỏ lỡ trong năm 2025 với nội dung hấp dẫn và đồ họa đỉnh cao.",
        author: "Nguyễn Quang Minh",
        likes: 500,
        comments: 200,
        publishedAt: "2025-01-01T10:00:00Z",
    },
    {
        id: 2,
        title: "Cách xem Anime với phụ đề chuẩn nhất",
        images: [
            "/images/blogs/naEMqb8Hwb15m0yUHiDP.png",
           "/images/blogs/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg",
            "/images/blogs/7788e616825a1925f79c303699dc82faa8cb5e6a2b95b83e42a436b7432ef99f.jpg"
        ],
        desc: "Hướng dẫn chi tiết cách lựa chọn website xem anime với phụ đề chất lượng cao và trải nghiệm mượt mà.",
        author: "Jane Doe",
        likes: 320,
        comments: 150,
        publishedAt: "2025-01-05T14:30:00Z",
    },
    {
        id: 3,
        title: "One Piece: Tổng hợp những tập phim đáng nhớ",
        images: [
            "/images/blogs/top-movie-one-piece-3.jpg",
            "/images/blogs/top-phim-hoat-hinh-nhat-ban-hay-nhat.jpg",
            "/images/blogs/sc-1.jpg",
        ],
        desc: "Điểm lại những tập phim kinh điển nhất của One Piece mà mọi fan không nên bỏ lỡ.",
        author: "John Smith",
        likes: 800,
        comments: 450,
        publishedAt: "2025-01-08T08:15:00Z",
    },
    {
        id: 4,
        title: "10 bộ Anime tình cảm hay nhất năm 2025",
        images: [
            "/images/blogs/anime buồn 6.jpg",
            "/images/blogs/nhung-bo-anime-tinh-cam-hay-nhat-2.jpg",
            "/images/blogs/anime-hoc-duong-thumbnail.jpg"
        ],
        desc: "Danh sách các bộ anime tình cảm lãng mạn đầy cảm xúc, thích hợp để xem vào cuối tuần.",
        author: "Nguyễn Quang Minh",
        likes: 700,
        comments: 300,
        publishedAt: "2025-01-09T16:45:00Z",
    },
    {
        id: 5,
        title: "One Punch Man mùa 3 hé lộ trailer khủng, phản diện Garou trở lại",
        images: [
            "/images/blogs/one-punch-man-season-3.jpg",
            "/images/blogs/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg",
            "/images/blogs/7788e616825a1925f79c303699dc82faa8cb5e6a2b95b83e42a436b7432ef99f.jpg"
        ],
        desc: "One Punch Man là một trong những series gắn liền với tuổi thơ của nhiều người. Dù vậy, tiến độ ra bản chuyển thể anime của series này lại không ổn định và thường để khán giả “đợi dài cổ” mới chịu ra mùa mới. Mùa đầu tiên đã được phát hành vào 2015 với 12 tập, 4 năm sau công chúng mới tiếp tục được đón nhận mùa 2 tiếp nối câu chuyện về Saitama cùng với 12 tập tiếp theo. Sau 5 năm mong ngóng, Shueisha và JC Staff cuối cùng cũng đã hé lộ những thông tin đầu tiên về ngày phát hành poster và trailer anime One Punch Man mùa 3.",
        author: "Jane Doe",
        likes: 400,
        comments: 180,
        publishedAt: "2025-01-10T09:00:00Z",
    },
];
export default blogs;
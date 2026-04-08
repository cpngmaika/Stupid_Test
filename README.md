# Hệ Thống Trắc Nghiệm Tâm Lý (Tích hợp AI)

Một ứng dụng Node.js/EJS cho phép người dùng thực hiện đa dạng các bài đánh giá tâm lý (trầm cảm, lo âu, stress) và kết hợp sức mạnh của **Google Gemini AI** để tổng hợp, phân tích và đưa ra nhận xét một cách sinh động..

## ✨ Tính năng nổi bật
- Giao diện **TailwindCSS** hiện đại với các thành phần bóng bẩy (Glassmorphism).
- Thanh Progress Bar giúp người dùng theo dõi tiến trình làm bài.
- Hỗ trợ đa dạng chủ đề trắc nghiệm qua file cấu hình động.
- Liên kết trực tiếp API của **Gemini 3 Flash Preview** để nhận xét kết quả người dùng.

## 🚀 Hướng dẫn cài đặt

1. **Clone repository và cài đặt Dependencies:**
   ```bash
   npm install
   ```

2. **Cấu hình API Key:**
   - Tạo file `.env` ở thư mục gốc (hoặc sao chép từ file `.env.example`).
   - Cập nhật thông tin Google Gemini API Key:
   ```env
   GEMINI_API_KEY=khóa_api_của_bạn_tại_đây
   ```

3. **Chạy ứng dụng:**
   ```bash
   node server.js
   ```
   *Lưu ý: Bạn cũng có thể dùng `npm start` nếu đã thiết lập kèm các cờ environment file tuỳ chọn.*

4. Mở trình duyệt và truy cập: **[http://localhost:3000](http://localhost:3000)**

## 🛠️ Công nghệ sử dụng
- **Node.js & Express**: Framework Web server.
- **EJS**: View engine để render giao diện HTML động.
- **Tailwind CSS**: Styling UI (qua phương thức CDN).
- **@google/genai**: Thư viện SDK chính thức từ Google tương tác trực tiếp với bộ não Gemini.
- **dotenv**: Bắt buộc nạp API key an toàn bảo mật.

## 📝 Giới hạn / Tuỳ biến
Bạn có thể dễ dàng thêm bài trắc nghiệm mới chỉ bằng việc thêm 1 Block Object vào bên trong cấu hình `config/questions.js`. Hệ thống routing và giao diện sẽ tự động thích ứng với loại bài test mới.

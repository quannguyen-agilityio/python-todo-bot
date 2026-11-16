# Notes

- Ngôn ngữ bài học: tiếng Việt; code, tên hàm, thuật ngữ kỹ thuật giữ tiếng Anh.
- Nền tảng: thành thạo JS/TS/Node.js. Luôn dùng bảng so sánh "JS → Python".
- Không giải thích khái niệm lập trình chung (biến, vòng lặp, hàm, async là gì). Tập trung vào *khác biệt* và bẫy của Python.
- Cường độ cao (~1h+/ngày) → đi nhanh được, nhưng mỗi bài vẫn chỉ một "chiến thắng" cụ thể.
- Ví dụ trong bài: luôn dùng task/nhắc việc (nội dung, giờ nhắc, lặp lại) — đúng với bot đang xây.
- Token bot Telegram là bí mật: luôn để trong `.env` (đã có trong `.gitignore`), không dán vào chat, không commit.
- Repo là public: tuyệt đối không commit `.env`, `chat_id` cá nhân hay dữ liệu task thật.
- Code bot nằm trong `bot/` (dự án uv riêng); mỗi bài làm tiếp trên cùng code đó.
- Múi giờ: Asia/Ho_Chi_Minh. JobQueue của python-telegram-bot mặc định UTC — phải nhắc rõ khi tới bài lập lịch.
- Lộ trình dự kiến: (1) gửi tin nhắn bằng HTTP thô → (2) bot luôn lắng nghe với python-telegram-bot, lệnh /start /add → (3) parse lệnh: chuỗi, split, datetime → (4) JobQueue: run_once/run_daily → (5) lưu task (JSON → SQLite) → (6) /list /done /del → (7) deploy.

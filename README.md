# python-todo-bot

Học Python (từ nền tảng JavaScript/Node.js) bằng cách xây một **bot Telegram nhắc việc**: tạo task bằng lệnh đơn giản gồm nội dung, giờ nhắc và lịch nhắc lại.

```text
/add Uống thuốc | 20:00 | hằng ngày
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `lessons/` | Các bài học (HTML, mở bằng trình duyệt) |
| `reference/` | Trang tra cứu: JS → Python, thuật ngữ |
| `assets/` | Style và quiz dùng chung cho các bài |
| `bot/` | Code bot, viết dần qua từng bài (tạo ở bài 1) |
| `MISSION.md` | Mục tiêu của khoá học |
| `RESOURCES.md` | Nguồn tài liệu và cộng đồng |
| `learning-records/` | Những gì đã học được, dùng để chọn bài tiếp theo |
| `NOTES.md` | Ghi chú cách dạy |

## Bắt đầu

Mở [lessons/0001-bot-noi-xin-chao.html](lessons/0001-bot-noi-xin-chao.html) trong trình duyệt.

> Token bot nằm trong `bot/.env` và **không bao giờ** được commit (đã chặn trong `.gitignore`).

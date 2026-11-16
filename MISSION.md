# Mission: Python

## Why
Xây dựng một bot Telegram nhắc việc (todo) bằng Python cho bản thân: tạo task bằng một câu lệnh đơn giản gồm nội dung, giờ nhắc và lịch nhắc lại, rồi bot tự nhắn đúng giờ.

## Success looks like
- Tự viết từ đầu một script Python chạy được, quản lý dự án bằng `uv` (giống npm)
- Bot hiểu lệnh tạo task, ví dụ `/add Uống thuốc | 20:00 | hằng ngày`, và báo lỗi rõ ràng khi gõ sai
- Bot nhắn nhắc việc đúng giờ (theo giờ Việt Nam), kể cả nhắc lại hằng ngày hoặc vào các thứ trong tuần
- Xem, đánh dấu xong, xoá task: `/list`, `/done`, `/del`
- Task được lưu lại, bot khởi động lại không mất lịch nhắc
- Bot chạy liên tục trên server, không cần mở máy cá nhân
- Code nằm trong repo GitHub `quannguyen-agilityio/python-todo-bot`

## Constraints
- Đã thành thạo JavaScript/TypeScript/Node.js → dạy Python bằng cách so sánh với JS, bỏ qua kiến thức lập trình cơ bản
- Học cường độ cao: khoảng 1 giờ trở lên hầu hết các ngày
- Bài học viết bằng tiếng Việt (code và thuật ngữ kỹ thuật giữ tiếng Anh)

## Out of scope
- Bot cho khách hàng / shop, Zalo OA, Facebook Messenger
- Hiểu ngôn ngữ tự nhiên bằng AI (Claude) — có thể thêm sau khi bot lệnh chạy ổn
- Data science, frontend web, GUI desktop

# Mission đổi sang bot Telegram nhắc việc (todo)

Ngày 2026-11-16, người học đổi đầu ra của khoá học: thay vì bot trả lời khách cho shop, giờ là bot nhắc việc cá nhân — tạo task bằng lệnh đơn giản (nội dung, giờ nhắc, lịch nhắc lại). Xem [[MISSION.md]].

**Implications:** Bài 1 vẫn giữ (gửi tin nhắn qua Bot API là nền tảng chung), nhưng ví dụ chuyển sang task. Các bài tiếp theo ưu tiên: xử lý chuỗi/parse lệnh, `datetime` + múi giờ, JobQueue của python-telegram-bot, lưu trữ bền vững. Claude API bị đẩy ra ngoài phạm vi. Code sống trong repo public `quannguyen-agilityio/python-todo-bot`, thư mục `bot/`.

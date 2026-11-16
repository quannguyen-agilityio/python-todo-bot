# Python Resources

## Knowledge

- [Docs: The Python Tutorial (python.org)](https://docs.python.org/3/tutorial/)
  Tài liệu chính thức, viết cho người đã biết lập trình. Use for: cú pháp, kiểu dữ liệu, list/dict, hàm, module — nguồn chính cho mọi bài cú pháp.
- [Docs: uv — Working on projects (Astral)](https://docs.astral.sh/uv/guides/projects/)
  Trình quản lý dự án/Python hiện đại, vai trò như npm. Use for: `uv init`, `uv add`, `uv run`, phiên bản Python.
- [Docs: Telegram Bot API (core.telegram.org)](https://core.telegram.org/bots/api)
  Đặc tả HTTP chính thức của bot. Use for: tên method, tham số, cấu trúc `{ok, result}`.
- [Guide: "From BotFather to 'Hello World'" (Telegram)](https://core.telegram.org/bots/tutorial)
  Hướng dẫn chính thức tạo bot và lấy token. Use for: BotFather, bảo mật token.
- [Docs: HTTPX Quickstart](https://www.python-httpx.org/quickstart/)
  Thư viện HTTP (giống fetch/axios), hỗ trợ cả sync và async. Use for: gọi API thô trước khi dùng framework.
- [Docs: python-telegram-bot](https://docs.python-telegram-bot.org/)
  Framework bot Telegram phổ biến nhất cho Python (async, `Application.builder()`), bản hiện tại v22.x. Use for: handler, lệnh, chạy bot liên tục (từ bài 2).
- [Docs: python-telegram-bot JobQueue](https://docs.python-telegram-bot.org/en/stable/telegram.ext.jobqueue.html)
  Lập lịch bằng `run_once`, `run_daily(time, days=…)`, `run_repeating`; cần extra `python-telegram-bot[job-queue]`; mặc định UTC. Use for: nhắc việc đúng giờ và nhắc lại.
- [Docs: datetime & zoneinfo (Python stdlib)](https://docs.python.org/3/library/datetime.html)
  Thời gian, ngày, múi giờ (`ZoneInfo("Asia/Ho_Chi_Minh")`). Use for: parse "20:00", tính giờ nhắc tiếp theo.

## Wisdom (Communities)

- [r/learnpython](https://www.reddit.com/r/learnpython/)
  Subreddit lớn, được kiểm duyệt, thân thiện với người mới. Use for: hỏi cách viết "Pythonic", review code ngắn.
- [Python Discord](https://www.pythondiscord.com/)
  Cộng đồng Python lớn nhất trên Discord, có kênh help. Use for: hỏi nhanh khi kẹt.
- [python-telegram-bot group (Telegram)](https://t.me/pythontelegrambotgroup)
  Nhóm chính thức của thư viện. Use for: câu hỏi riêng về bot Telegram.

## Gaps

- Chưa có nguồn tiếng Việt đáng tin cậy được xác minh.
- Chưa chọn nguồn cho lưu trữ (sqlite3) và deploy (VPS/systemd/Docker) — tìm khi tới bài đó.

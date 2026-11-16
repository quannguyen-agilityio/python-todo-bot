# Notes

- Lesson language: Vietnamese; code, function names and technical terms stay in English.
- Background: fluent in JS/TS/Node.js. Always use a "JS → Python" comparison table.
- Don't explain general programming concepts (what variables, loops, functions, async are). Focus on Python's *differences* and pitfalls.
- High intensity (~1h+/day) → can move fast, but each lesson still delivers one concrete "win".
- Examples in lessons always use tasks/reminders (text, time, repeat) — matching the bot being built.
- The Telegram bot token is a secret: always keep it in `.env` (already in `.gitignore`), never paste it in chat, never commit it.
- The repo is public: never commit `.env`, a personal `chat_id` or real task data.
- Bot code lives in `bot/` (its own uv project); each lesson continues on the same code.
- Timezone: Asia/Ho_Chi_Minh. python-telegram-bot's JobQueue defaults to UTC — call this out in the scheduling lesson.
- Planned path: (1) send a message with raw HTTP → (2) an always-listening bot with python-telegram-bot, /start /add → (3) parse commands: strings, split, datetime → (4) JobQueue: run_once/run_daily → (5) persist tasks (JSON → SQLite) → (6) /list /done /del → (7) deploy.

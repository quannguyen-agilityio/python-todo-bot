# Mission: Python

## Why
Build a personal Telegram todo reminder bot in Python: create a task with one simple command holding the text, the reminder time and the repeat schedule, and the bot messages me at the right time.

## Success looks like
- Write a working Python script from scratch, with the project managed by `uv` (like npm)
- The bot understands the add command, e.g. `/add Uống thuốc | 20:00 | hằng ngày`, and reports clear errors on bad input
- The bot sends reminders on time (Vietnam time), including daily repeats and specific weekdays
- View, complete and delete tasks: `/list`, `/done`, `/del`
- Tasks are persisted, so restarting the bot does not lose the schedule
- The bot runs continuously on a server, without needing my own machine on
- Code lives in the GitHub repo `quannguyen-agilityio/python-todo-bot`

## Constraints
- Already fluent in JavaScript/TypeScript/Node.js → teach Python by comparing with JS, skip general programming basics
- High intensity: about 1 hour or more on most days
- Lessons are written in Vietnamese (code and technical terms stay in English)

## Out of scope
- Customer/shop bots, Zalo OA, Facebook Messenger
- Natural-language understanding with AI (Claude) — can be added once the command bot is stable
- Data science, web frontend, desktop GUI

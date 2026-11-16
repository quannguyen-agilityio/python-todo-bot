# Python Resources

## Knowledge

- [Docs: The Python Tutorial (python.org)](https://docs.python.org/3/tutorial/)
  Official tutorial, written for people who already program. Use for: syntax, data types, lists/dicts, functions, modules — the main source for every syntax lesson.
- [Docs: uv — Working on projects (Astral)](https://docs.astral.sh/uv/guides/projects/)
  Modern Python project/package manager, plays the role of npm. Use for: `uv init`, `uv add`, `uv run`, Python versions.
- [Docs: Telegram Bot API (core.telegram.org)](https://core.telegram.org/bots/api)
  Official HTTP spec for bots. Use for: method names, parameters, the `{ok, result}` shape.
- [Guide: "From BotFather to 'Hello World'" (Telegram)](https://core.telegram.org/bots/tutorial)
  Official guide to creating a bot and getting a token. Use for: BotFather, token security.
- [Docs: HTTPX Quickstart](https://www.python-httpx.org/quickstart/)
  HTTP library (like fetch/axios), supports both sync and async. Use for: calling the raw API before using a framework.
- [Docs: python-telegram-bot](https://docs.python-telegram-bot.org/)
  The most popular Telegram bot framework for Python (async, `Application.builder()`), currently v22.x. Use for: handlers, commands, running the bot continuously (from lesson 2).
- [Docs: python-telegram-bot JobQueue](https://docs.python-telegram-bot.org/en/stable/telegram.ext.jobqueue.html)
  Scheduling with `run_once`, `run_daily(time, days=…)`, `run_repeating`; needs the `python-telegram-bot[job-queue]` extra; defaults to UTC. Use for: on-time and repeating reminders.
- [Docs: datetime & zoneinfo (Python stdlib)](https://docs.python.org/3/library/datetime.html)
  Times, dates, timezones (`ZoneInfo("Asia/Ho_Chi_Minh")`). Use for: parsing "20:00", computing the next reminder time.

## Wisdom (Communities)

- [r/learnpython](https://www.reddit.com/r/learnpython/)
  Large, moderated, beginner-friendly subreddit. Use for: asking how to write "Pythonic" code, short code reviews.
- [Python Discord](https://www.pythondiscord.com/)
  The largest Python community on Discord, with help channels. Use for: quick questions when stuck.
- [python-telegram-bot group (Telegram)](https://t.me/pythontelegrambotgroup)
  The library's official group. Use for: Telegram-bot-specific questions.

## Gaps

- No verified, trustworthy Vietnamese-language source yet.
- No sources chosen yet for storage (sqlite3) and deployment (VPS/systemd/Docker) — find them when those lessons come up.

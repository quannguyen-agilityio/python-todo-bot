# Mission changed to a Telegram todo reminder bot

On 2026-11-16 the learner changed the course outcome: instead of a customer-reply bot for a shop, it is now a personal reminder bot — create tasks with a simple command (text, reminder time, repeat schedule). See [[MISSION.md]].

**Implications:** Lesson 1 stays (sending a message through the Bot API is common ground), but examples switch to tasks. Next lessons prioritise: string handling/command parsing, `datetime` + timezones, python-telegram-bot's JobQueue, persistent storage. The Claude API is out of scope. Code lives in the public repo `quannguyen-agilityio/python-todo-bot`, in the `bot/` folder.

import os

from dotenv import load_dotenv

load_dotenv()  # reads bot/.env into os.environ (like process.env)

TOKEN = os.environ["TELEGRAM_TOKEN"]  # KeyError if missing: fail fast
CHAT_ID = os.environ.get("CHAT_ID")  # None if missing

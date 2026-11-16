import os

import httpx
from dotenv import load_dotenv

load_dotenv()  # reads bot/.env
api = "https://api.telegram.org/bot" + os.environ["TELEGRAM_TOKEN"]

me = httpx.get(api + "/getMe").json()
print("Bot:", me)

updates = httpx.get(api + "/getUpdates").json()["result"]
chats = [u["message"]["chat"]["id"] for u in updates if "message" in u]
if chats:
    print("CHAT_ID =", chats[-1])
else:
    print("Chưa có tin nhắn. Mở bot trên Telegram, bấm Start rồi chạy lại.")

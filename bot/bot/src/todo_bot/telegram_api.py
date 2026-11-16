import httpx

from todo_bot import config

API = f"https://api.telegram.org/bot{config.TOKEN}"


def call(method, **params):
    r = httpx.post(f"{API}/{method}", json=params, timeout=10)
    data = r.json()
    if not data["ok"]:
        raise RuntimeError(f"{method}: {data['description']}")
    return data["result"]


def send_message(text, chat_id=None):
    return call("sendMessage", chat_id=chat_id or config.CHAT_ID, text=text)

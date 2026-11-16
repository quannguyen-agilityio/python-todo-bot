def format_task(text, hour, minute):
    label = f"{hour:02d}:{minute:02d}"
    return f"⏰ {label} — {text}"

def time_error(hour, minute):
    """Return an error message, or None when the time is valid."""
    if not 0 <= hour < 24:
        return f"Giờ {hour} không hợp lệ (0–23)"
    elif not 0 <= minute < 60:
        return f"Phút {minute} không hợp lệ (0–59)"
    return None

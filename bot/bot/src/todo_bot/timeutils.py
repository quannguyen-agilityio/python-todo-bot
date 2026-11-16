def time_error(hour, minute):
    """Return an error message, or None when the time is valid."""
    if not 0 <= hour < 24:
        return f"Giờ {hour} không hợp lệ (0–23)"
    elif not 0 <= minute < 60:
        return f"Phút {minute} không hợp lệ (0–59)"
    return None


def is_valid_time(hour, minute):
    return time_error(hour, minute) is None


def minutes_until(now_h, now_m, at_h, at_m):
    diff = (at_h * 60 + at_m) - (now_h * 60 + now_m)
    return diff % (24 * 60)  # wraps past midnight

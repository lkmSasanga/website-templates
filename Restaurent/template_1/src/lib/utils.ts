export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string): string {
  return phone;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function getTodayHours(hours: {
  [key: string]: { open: string; close: string; closed?: boolean };
}): { open: string; close: string; closed?: boolean } | null {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const dayKey = today.toLowerCase() as keyof typeof hours;
  return hours[dayKey] || null;
}

export function isOpenNow(hours: {
  [key: string]: { open: string; close: string; closed?: boolean };
}): boolean {
  const todayHours = getTodayHours(hours);
  if (!todayHours || todayHours.closed) return false;

  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const parseTime = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let hour24 = hours;
    if (period === "PM" && hours !== 12) hour24 += 12;
    if (period === "AM" && hours === 12) hour24 = 0;
    return hour24 * 60 + (minutes || 0);
  };

  const openTime = parseTime(todayHours.open);
  const closeTime = parseTime(todayHours.close);

  return currentTime >= openTime && currentTime <= closeTime;
}

export function getItem<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : defaultValue;
}

export function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}

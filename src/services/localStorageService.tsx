export class LocalStorageService {
  static getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

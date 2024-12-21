import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  generateUniqueId(prefix: string): string {
    return (
      prefix + '_' +
      Math.random().toString(36).substring(2, 15) +
      new Date().getTime().toString(36)
    );
  }
}

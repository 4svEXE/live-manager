import { Injectable, signal } from '@angular/core';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentDateService {
  private _currentDate = signal('');
  now = this.dateService.getCurrentDate('day');

  constructor(private dateService: DateService) {
    const currDate = this.dateService.getCurrentDate('day');
    this._currentDate.set(currDate);
  }

  // Getter для автоматичної реакції Angular на зміни
  get currentDate(): string {
    return this._currentDate().replace(/\//g, '-'); // from 2023/08/21 to 2023-08-21
  }

  // Setter для оновлення значення
  set currentDate(value: string) {
    this._currentDate.set(value);
  }

  // Повертає URL для попереднього дня
  getPreviousDay(urlPath: string): string {
    const previousDate = this.dateService.getpreviousDate('day', this.currentDate);
    return urlPath + previousDate;
  }

  // Повертає URL для поточного дня
  getCurrentDay(urlPath: string): string {
    return urlPath + this.now;
  }

  // Повертає URL для наступного дня
  getNextDay(urlPath: string): string {
    const nextDate = this.dateService.getNextDate('day', this.currentDate);
    return urlPath + nextDate;
  }

  // Оновлює `currentDate` для попереднього дня
  updateToPreviousDay(): void {
    this.currentDate = this.dateService.getpreviousDate('day', this.currentDate);
  }

  // Оновлює `currentDate` для наступного дня
  updateToNextDay(): void {
    this.currentDate = this.dateService.getNextDate('day', this.currentDate);
  }

  // Оновлює `currentDate` для поточного дня
  updateDateToNow(): void {
    this.currentDate = this.dateService.getCurrentDate('day');
  }
}

import { CurrentDateService } from './../../../../core/services/current-date.service';
import {
  SvgIconsInterface,
  SvgService,
} from '../../../../core/services/svg.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent {
  private readonly urlPath = '/tasks/day/';

  svg!: SvgIconsInterface;

  constructor(
    private SVG: SvgService,
    public currentDateService: CurrentDateService
  ) {
    this.svg = this.SVG.loadSvg();
    this.currentDateService.updateDateToNow();
  }

  updateToPreviousDay() {
    this.currentDateService.updateToPreviousDay();
  }

  getPreviousDay() {
    return this.currentDateService.getPreviousDay(this.urlPath);
  }

  updateToNextDay() {
    this.currentDateService.updateToNextDay();
  }

  getNextDay() {
    return this.currentDateService.getNextDay(this.urlPath);
  }

  updateDateToNow() {
    this.currentDateService.updateDateToNow();
  }

  getCurrentDay() {
    return this.currentDateService.getCurrentDay(this.urlPath);
  }
}

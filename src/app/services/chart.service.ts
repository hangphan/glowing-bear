import {Injectable} from '@angular/core';
import {Chart} from '../models/charts/chart';
import {PieChart} from '../models/charts/pie-chart';
import {BarChart} from '../models/charts/bar-chart';

@Injectable()
export class ChartService {

  private _charts: Chart[];

  constructor() {
    this.charts = [];
    this.charts.push(new PieChart());
    this.charts.push(new PieChart());
    this.charts.push(new BarChart());
  }

  get charts(): Chart[] {
    return this._charts;
  }

  set charts(value: Chart[]) {
    this._charts = value;
  }
}

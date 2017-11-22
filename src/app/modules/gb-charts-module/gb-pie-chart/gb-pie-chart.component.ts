import {Component, OnInit} from '@angular/core';
import {GbChartComponent} from '../gb-chart/gb-chart.component';

@Component({
  selector: 'gb-pie-chart',
  templateUrl: './gb-pie-chart.component.html',
  styleUrls: ['./gb-pie-chart.component.css']
})
export class GbPieChartComponent extends GbChartComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {GbChartComponent} from '../gb-chart/gb-chart.component';

@Component({
  selector: 'gb-bar-chart',
  templateUrl: './gb-bar-chart.component.html',
  styleUrls: ['./gb-bar-chart.component.css']
})
export class GbBarChartComponent extends GbChartComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

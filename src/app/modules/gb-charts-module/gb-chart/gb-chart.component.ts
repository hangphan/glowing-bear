import {Component, Input, OnInit} from '@angular/core';
import {Chart} from '../../../models/charts/chart';

@Component({
  selector: 'gb-chart',
  templateUrl: './gb-chart.component.html',
  styleUrls: ['./gb-chart.component.css']
})
export class GbChartComponent implements OnInit {

  @Input() chartModel: Chart;

  constructor() { }

  ngOnInit() {
  }

}

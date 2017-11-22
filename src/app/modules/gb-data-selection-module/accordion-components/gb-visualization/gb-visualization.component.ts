import {Component, OnInit} from '@angular/core';
import {ChartService} from '../../../../services/chart.service';

@Component({
  selector: 'gb-visualization',
  templateUrl: './gb-visualization.component.html',
  styleUrls: ['./gb-visualization.component.css']
})
export class GbVisualizationComponent implements OnInit {

  constructor(public chartService: ChartService) {
  }

  ngOnInit() {
  }

}

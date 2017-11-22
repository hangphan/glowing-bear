import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GbChartComponent} from './gb-chart/gb-chart.component';
import {GbPieChartComponent} from './gb-pie-chart/gb-pie-chart.component';
import {GbBarChartComponent} from './gb-bar-chart/gb-bar-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GbChartComponent,
    GbPieChartComponent,
    GbBarChartComponent
  ],
  declarations: [
    GbChartComponent,
    GbPieChartComponent,
    GbBarChartComponent
  ]
})
export class ChartsModule {
}

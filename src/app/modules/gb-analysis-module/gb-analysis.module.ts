import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GbAnalysisComponent} from './gb-analysis.component';
import {routing} from './gb-analysis.routing';
import {RouterModule} from '@angular/router';
import {GbCrossTableComponent} from './gb-cross-table/gb-cross-table.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TableModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [GbAnalysisComponent, GbCrossTableComponent]
})
export class GbAnalysisModule {
}



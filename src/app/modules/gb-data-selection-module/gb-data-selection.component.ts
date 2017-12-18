import {Component, OnInit} from '@angular/core';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'gb-data-selection',
  templateUrl: './gb-data-selection.component.html',
  styleUrls: ['./gb-data-selection.component.css']
})
export class GbDataSelectionComponent implements OnInit {

  constructor(public queryService: QueryService) {
  }

  ngOnInit() {
  }

  /**
   * The event handler for the accordion tab open event,
   * to access the accordion, use event.index
   * @param event
   */
  openAccordion(event) {
  }

  /**
   * The event handler for the accordion tab close event,
   * to access the accordion, use event.index
   * @param event
   */
  closeAccordion(event) {
  }

  upateCountBtnClick(event) {
    event.stopPropagation(); console.log(event);
  }

  numberWithCommas(x: number): string {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return '0';
    }
  }

  get subjectCount_0(): string {
    return this.numberWithCommas(this.queryService.subjectCount_0);
  }

  get subjectCount_1(): string {
    return this.numberWithCommas(this.queryService.subjectCount_1);
  }

  get subjectCount_2(): string {
    return this.numberWithCommas(this.queryService.subjectCount_2);
  }

  get subjectCountPercentage_1(): string {
    return '(' + Math.floor(100 * this.queryService.subjectCount_1 / this.queryService.subjectCount_0) + '%)';
  }

  get subjectCountPercentage_2(): string {
    return '(' + Math.floor(100 * this.queryService.subjectCount_2 / this.queryService.subjectCount_1) + '%)';
  }

  get observationCount_0(): string {
    return this.numberWithCommas(this.queryService.observationCount_0);
  }

  get observationCount_1(): string {
    return this.numberWithCommas(this.queryService.observationCount_1);
  }

  get observationCountPercentage_1(): string {
    return '(' + Math.floor(100 * this.queryService.observationCount_1 / this.queryService.observationCount_0) + '%)';
  }

  get observationCountPercentage_2(): string {
    return '(' + Math.floor(100 * this.queryService.observationCount_2 / this.queryService.observationCount_1) + '%)';
  }

}

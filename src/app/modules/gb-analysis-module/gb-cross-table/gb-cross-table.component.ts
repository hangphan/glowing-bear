import {Component, OnInit} from '@angular/core';
import {CrossTableService} from '../../../services/cross-table.service';

@Component({
  selector: 'gb-cross-table',
  templateUrl: './gb-cross-table.component.html',
  styleUrls: ['./gb-cross-table.component.css']
})
export class GbCrossTableComponent implements OnInit {

  constructor(private crossTableService: CrossTableService) {
  }

  ngOnInit() {
  }

  get rows(): Object[] {
    return this.crossTableService.rows;
  }

  set rows(value: Object[]) {
    this.crossTableService.rows = value;
  }

  get cols(): {field: string, label: string}[] {
    return this.crossTableService.columnHeaders;
  }

  set cols(value: {field: string, label: string}[]) {
    this.crossTableService.columnHeaders = value;
  }

  get conceptCandidates(): string[] {
    return this.crossTableService.conceptCandidates;
  }

  set conceptCandidates(value: string[]) {
    this.crossTableService.conceptCandidates = value;
  }

  get rowConcepts(): string[] {
    return this.crossTableService.rowConcepts;
  }

  set rowConcepts(value: string[]) {
    this.crossTableService.rowConcepts = value;
  }

  get columnConcepts(): string[] {
    return this.crossTableService.columnConcepts;
  }

  set columnConcepts(value: string[]) {
    this.crossTableService.columnConcepts = value;
  }

  addRowConcept(candidate: string) {
    this.crossTableService.addRowConcept(candidate);
  }

  addColumnConcept(candidate: string) {
    this.crossTableService.addColumnConcept(candidate);
  }

  removeRowConcept(concept: string) {
    this.crossTableService.removeRowConcept(concept);
  }

  removeColumnConcept(concept: string) {
    this.crossTableService.removeColumnConcept(concept);
  }

}

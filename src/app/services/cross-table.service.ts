import {Injectable} from '@angular/core';
import {CountDictionaryItem} from '../models/count-dictionary-item';

@Injectable()
export class CrossTableService {

  // The concept candidates
  private _conceptCandidates: string[];
  // The rows and columns that store concepts codes
  private _rowConcepts: string[];
  private _columnConcepts: string[];
  private _columnHeaders: { field: string, label: string }[];
  // Given two concept codes, store the corresponding counts here
  private _countItems: CountDictionaryItem[];
  private _rows: object[];

  constructor() {
    this.conceptCandidates = [];
    this.rowConcepts = [];
    this.columnConcepts = [];
    this.columnHeaders = [];
    this.countItems = [];
    this.rows = [];

    this.conceptCandidates.push('concept-A');
    this.conceptCandidates.push('concept-B');
    this.conceptCandidates.push('concept-C');
    this.conceptCandidates.push('concept-D');
    this.conceptCandidates.push('concept-E');
    this.conceptCandidates.push('concept-F');
    this.conceptCandidates.push('concept-G');
    this.conceptCandidates.push('concept-H');
    this.updateTable();
  }

  public addRowConcept(rowConcept: string) {
    this.rowConcepts.push(rowConcept);
    for (let colConcept of this.columnConcepts) {
      this.addCountItem(rowConcept, colConcept);
    }
    this.conceptCandidates.splice(this.conceptCandidates.indexOf(rowConcept), 1);
    this.updateTable();
  }

  public addColumnConcept(colConcept: string) {
    this.columnConcepts.push(colConcept);
    for (let rowConcept of this.rowConcepts) {
      this.addCountItem(rowConcept, colConcept);
    }
    this.conceptCandidates.splice(this.conceptCandidates.indexOf(colConcept), 1);
    this.updateTable();
  }

  public removeRowConcept(rowConcept: string) {
    this.rowConcepts.splice(this.rowConcepts.indexOf(rowConcept), 1);
    this.conceptCandidates.push(rowConcept);
    this.updateTable();
  }

  public removeColumnConcept(colConcept: string) {
    this.columnConcepts.splice(this.columnConcepts.indexOf(colConcept), 1);
    this.conceptCandidates.push(colConcept);
    this.updateTable();
  }

  private updateTable() {
    // this.addRowConcept('concept-A');
    // this.addRowConcept('concept-B');
    // this.addRowConcept('concept-C');
    // this.addColumnConcept('concept-D');
    // this.addColumnConcept('concept-E');
    // this.addColumnConcept('concept-F');
    // this.addColumnConcept('concept-G');
    // this.addColumnConcept('concept-H');

    const filler = 'variables';
    this.columnHeaders = [{
      field: filler,
      label: filler
    }];
    for (let colConcept of this.columnConcepts) {
      this.columnHeaders.push({
        field: colConcept,
        label: colConcept
      });
    }
    this.rows = [];
    for (let rowConcept of this.rowConcepts) {
      let row = {};
      for (let colHeader of this.columnHeaders) {
        if (colHeader.field === filler) {
          row[colHeader.field] = rowConcept;
        } else {
          row[colHeader.field] = this.getSubjectCount(rowConcept, colHeader.field);
        }
      }
      this.rows.push(row);
    }
  }

  private getSubjectCount(concept1: string, concept2: string) {
    let count = -1;
    for (let item of this.countItems) {
      if (item.match(concept1, concept2)) {
        count = item.subjectCount;
        break;
      }
    }
    return count;
  }

  private addCountItem(concept1: string, concept2: string) {
    if (!this.isCountItemExistent(concept1, concept2)) {
      let newCountItem = new CountDictionaryItem(concept1, concept2);
      newCountItem.subjectCount = Math.floor(Math.random() * 100);
      this.countItems.push(newCountItem);
    }
  }

  private isCountItemExistent(concept1: string, concept2: string): boolean {
    let existent = false;
    for (let item of this.countItems) {
      if (item.match(concept1, concept2)) {
        existent = true;
        break;
      }
    }
    return existent;
  }


  get conceptCandidates(): string[] {
    return this._conceptCandidates;
  }

  set conceptCandidates(value: string[]) {
    this._conceptCandidates = value;
  }

  get rowConcepts(): string[] {
    return this._rowConcepts;
  }

  set rowConcepts(value: string[]) {
    this._rowConcepts = value;
  }

  get columnConcepts(): string[] {
    return this._columnConcepts;
  }

  set columnConcepts(value: string[]) {
    this._columnConcepts = value;
  }

  get columnHeaders(): { field: string; label: string }[] {
    return this._columnHeaders;
  }

  set columnHeaders(value: { field: string; label: string }[]) {
    this._columnHeaders = value;
  }

  get countItems(): CountDictionaryItem[] {
    return this._countItems;
  }

  set countItems(value: CountDictionaryItem[]) {
    this._countItems = value;
  }

  public get rows(): object[] {
    return this._rows;
  }

  public set rows(value: object[]) {
    this._rows = value;
  }
}

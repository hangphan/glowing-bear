import {CountDictionaryItem} from '../../models/count-dictionary-item';

export class CrossTableServiceMock {

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

  get rows(): Object[] {
    return this._rows;
  }

  set rows(value: Object[]) {
    this._rows = value;
  }
}

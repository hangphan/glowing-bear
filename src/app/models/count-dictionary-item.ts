/**
 * Used as data structure to store
 * the subject count and observation count
 * for two given concepts,
 * e.g. gender=male and nationality=nederland
 */
export class CountDictionaryItem {
  private _concept1: string;
  private _concept2: string;
  private _subjectCount: number;
  private _observationCount: number;

  constructor(concept1: string, concept2: string) {
    this.concept1 = concept1;
    this.concept2 = concept2;
    this.subjectCount = Number.NaN;
    this.observationCount = Number.NaN;
  }

  match(concept1: string, concept2: string): boolean {
    return (this.concept1 === concept1 && this.concept2 === concept2) ||
      (this.concept1 === concept2 && this.concept2 === concept1);
  }

  get concept1(): string {
    return this._concept1;
  }

  set concept1(value: string) {
    this._concept1 = value;
  }

  get concept2(): string {
    return this._concept2;
  }

  set concept2(value: string) {
    this._concept2 = value;
  }

  get subjectCount(): number {
    return this._subjectCount;
  }

  set subjectCount(value: number) {
    this._subjectCount = value;
  }

  get observationCount(): number {
    return this._observationCount;
  }

  set observationCount(value: number) {
    this._observationCount = value;
  }

}

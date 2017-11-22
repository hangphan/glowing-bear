import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbBarChartComponent} from './gb-bar-chart.component';

describe('BarChartComponent', () => {
  let component: GbBarChartComponent;
  let fixture: ComponentFixture<GbBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GbBarChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbPieChartComponent} from './gb-pie-chart.component';

describe('PieChartComponent', () => {
  let component: GbPieChartComponent;
  let fixture: ComponentFixture<GbPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GbPieChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

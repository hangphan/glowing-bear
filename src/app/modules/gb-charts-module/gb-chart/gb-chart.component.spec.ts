import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbChartComponent} from './gb-chart.component';
import {GenericComponentMock} from '../../../services/mocks/generic.component.mock';
import {BarChart} from '../../../models/charts/bar-chart';

describe('GbChartComponent', () => {
  let component: GbChartComponent;
  let fixture: ComponentFixture<GbChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GbChartComponent,
        GenericComponentMock({selector: 'gb-pie-chart', inputs: ['chartModel']}),
        GenericComponentMock({selector: 'gb-bar-chart', inputs: ['chartModel']})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbChartComponent);
    component = fixture.componentInstance;
    component.chartModel = new BarChart();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

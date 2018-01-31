import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GbChartComponent} from './gb-chart.component';
import {BarChart} from '../../../models/charts/bar-chart';
import {MockComponent} from 'ng2-mock-component';

describe('GbChartComponent', () => {
  let component: GbChartComponent;
  let fixture: ComponentFixture<GbChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GbChartComponent,
        MockComponent({selector: 'gb-pie-chart', inputs: ['chartModel']}),
        MockComponent({selector: 'gb-bar-chart', inputs: ['chartModel']})
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

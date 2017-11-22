import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbVisualizationComponent} from './gb-visualization.component';
import {GbChartComponent} from '../../../gb-charts-module/gb-chart/gb-chart.component';
import {GbPieChartComponent} from '../../../gb-charts-module/gb-pie-chart/gb-pie-chart.component';
import {GbBarChartComponent} from '../../../gb-charts-module/gb-bar-chart/gb-bar-chart.component';
import {ChartService} from '../../../../services/chart.service';
import {ChartServiceMock} from '../../../../services/mocks/chart.service.mock';

describe('GbVisualizationComponent', () => {
  let component: GbVisualizationComponent;
  let fixture: ComponentFixture<GbVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GbVisualizationComponent,
        GbChartComponent,
        GbPieChartComponent,
        GbBarChartComponent
      ],
      providers: [
        {
          provide: ChartService,
          useClass: ChartServiceMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

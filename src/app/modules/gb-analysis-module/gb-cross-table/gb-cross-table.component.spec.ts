import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbCrossTableComponent} from './gb-cross-table.component';
import {TableModule} from 'primeng/table';
import {CrossTableService} from '../../../services/cross-table.service';
import {CrossTableServiceMock} from '../../../services/mocks/cross-table.service.mock';

describe('GbCrossTableComponent', () => {
  let component: GbCrossTableComponent;
  let fixture: ComponentFixture<GbCrossTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GbCrossTableComponent],
      imports: [
        TableModule
      ],
      providers: [
        {
          provide: CrossTableService,
          useClass: CrossTableServiceMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbCrossTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
